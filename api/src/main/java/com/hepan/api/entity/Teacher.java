package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

@Entity
public class Teacher {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @JsonView(PhoneJsonView.class)
    private String phone;

    @JsonView(UserJsonView.class)
    @OneToOne()
    private User user;


    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }

    public void setPhone(String phone) { this.phone = phone; }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface PhoneJsonView {}
    public interface UserJsonView extends
            User.IdJsonView,
            User.UsernameJsonView,
            User.PasswordJsonView,
            User.RoleJsonView
    {}
}
