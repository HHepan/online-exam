package com.hepan.api.config;

import com.hepan.api.entity.User;
import com.hepan.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * 系统启动时添加系统管理员
 */
@Component
public class CommandLineRunnerImpl  implements CommandLineRunner {
    private final UserRepository userRepository;

    @Autowired
    public CommandLineRunnerImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        User admin = new User();
        admin.setRole(User.USER_ADMIN_ROLE);
        admin.setUsername("admin");
        admin.setPassword("admin");
        this.userRepository.save(admin);
    }
}
