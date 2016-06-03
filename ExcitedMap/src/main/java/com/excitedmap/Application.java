package com.excitedmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;

import nl.captcha.servlet.SimpleCaptchaServlet;

@SpringBootApplication
@ImportResource({ "classpath:spring-mybatis.xml", "classpath:spring-mvc.xml" })
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public ServletRegistrationBean simpleCaptchaServlet() {
		return new ServletRegistrationBean(new SimpleCaptchaServlet(), "/captcha");
	}
}