package com.supero.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@EnableAutoConfiguration
@SpringBootApplication
public class TodoSuperoApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoSuperoApiApplication.class, args);
	}

}
