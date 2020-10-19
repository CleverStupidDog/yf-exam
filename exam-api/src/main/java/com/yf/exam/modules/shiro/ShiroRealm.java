package com.yf.exam.modules.shiro;


import com.yf.exam.modules.Constant;
import com.yf.exam.modules.common.redis.service.RedisService;
import com.yf.exam.modules.shiro.jwt.JwtToken;
import com.yf.exam.modules.shiro.jwt.JwtUtils;
import com.yf.exam.modules.sys.user.dto.response.SysUserLoginDTO;
import com.yf.exam.modules.sys.user.service.SysUserRoleService;
import com.yf.exam.modules.sys.user.service.SysUserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;

/**
 * 用户登录鉴权和获取用户授权
 * @author bool
 */
@Component
@Slf4j
public class ShiroRealm extends AuthorizingRealm {

	@Autowired
	@Lazy
	private SysUserService sysUserService;

	@Autowired
	@Lazy
	private SysUserRoleService sysUserRoleService;

	@Autowired
	@Lazy
	private RedisService redisService;


	@Override
	public boolean supports(AuthenticationToken token) {
		return token instanceof JwtToken;
	}


	/**
	 * 详细授权认证
	 * @param principals
	 * @return
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		log.info("++++++++++开始校验详细权限");

		String userId = null;
		if (principals != null) {
			SysUserLoginDTO user = (SysUserLoginDTO) principals.getPrimaryPrincipal();
			userId = user.getId();
		}
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

		// 查找用户角色
		List<String> roles = sysUserRoleService.listRoles(userId);
		info.setRoles(new HashSet<>(roles));

		log.info("++++++++++校验详细权限完成");
		return info;
	}

	/**
	 * 校验用户的账号密码是否正确
	 * @param auth
	 * @return
	 * @throws AuthenticationException
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken auth) throws AuthenticationException {
		String token = (String) auth.getCredentials();
		if (token == null) {
			throw new AuthenticationException("token为空!");
		}

		log.error("++++++++++校验用户："+token);
		// 校验token有效性
		SysUserLoginDTO user = this.checkToken(token);
		return new SimpleAuthenticationInfo(user, token, getName());
	}


	/**
	 * 校验Token的有效性
	 * @param token
	 * @return
	 * @throws AuthenticationException
	 */
	public SysUserLoginDTO checkToken(String token) throws AuthenticationException {

		// 查询用户信息
		log.debug("++++++++++校验用户token： "+ token);

		// 从token中获取用户名
		String username = JwtUtils.getUsername(token);
		log.debug("++++++++++用户名： "+ username);

		if (username == null) {
			throw new AuthenticationException("无效的token");
		}

		// 查找登录用户对象
		SysUserLoginDTO user = sysUserService.token(token);

		// 校验token是否超时失效 & 或者账号密码是否错误
		if (!checkAndRefresh(token, username)) {
			throw new AuthenticationException("登陆失效，请重试登陆!");
		}

		return user;
	}


	/**
	 * 刷新token内容和到期时间，使其有访问时自动续期
	 * @param token
	 * @param userName
	 * @return
	 */
	public boolean checkAndRefresh(String token, String userName) {

		String key = Constant.USER_SESSION_KEY + token;

		String cacheToken = redisService.getString(key);
		if (StringUtils.isNotEmpty(cacheToken)) {
			// 校验token有效性
			if (!JwtUtils.verify(cacheToken, userName)) {
				String newToken = JwtUtils.sign(userName);
				// 更新token
				redisService.set(key, newToken, 1000L);
                log.info("++++++++++会话活跃：{}",token);
			}
			return true;
		}
		return false;
	}

	/**
	 * 清除当前用户的权限认证缓存
	 * @param principals
	 */
	@Override
    public void clearCache(PrincipalCollection principals) {
        super.clearCache(principals);
    }

}
