package com.excitedmap.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import nl.captcha.Captcha;
import nl.captcha.servlet.CaptchaServletUtil;

@RestController
@RequestMapping("/captcha")
public class CaptchaController {
	@RequestMapping(method = RequestMethod.GET)
	public void executeLogin(HttpServletRequest request, HttpServletResponse response) {
		Captcha captcha = new Captcha.Builder(200, 50).addText().build();
		request.getSession().setAttribute(Captcha.NAME, captcha);
		CaptchaServletUtil.writeImage(response, captcha.getImage());
	}
}
