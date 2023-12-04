package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Student;
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
     * 新增
     *
     * @param user 用户数据
     * @return 用户
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user) {
        return this.userService.login(user);
    }

    /**
     * 通过 id 获取用喔户
     *
     * @param id 用户 id
     * @return 用户
     */
    @GetMapping("{id}")
    @JsonView(GetByIdJsonView.class)
    public User getById(@PathVariable Long id) {
        if (id == null) {
            return null;
        }
        return this.userService.getById(id);
    }


    /**
     * 登陆
     *
     * @param user 用户数据
     * @return 用户
     */
    @PostMapping("login")
    @JsonView(LoginJsonView.class)
    public User login(@RequestBody User user) {
        return this.userService.login(user);
    }

    private interface LoginJsonView extends
            User.IdJsonView,
            User.UsernameJsonView,
            User.PasswordJsonView,
            User.RoleJsonView
    {}

    private interface GetByIdJsonView extends
            User.IdJsonView,
            User.UsernameJsonView,
            User.PasswordJsonView,
            User.RoleJsonView,
            User.StudentJsonView,
            User.TeacherJsonView
    {}
}
