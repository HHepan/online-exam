package com.hepan.api.controller;

import com.hepan.api.entity.User;
import com.hepan.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    private UserService userService;
    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 登陆
     *
     * @param user 用户数据
     * @return 用户
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user) {
        return this.userService.login(user);
    }
}
