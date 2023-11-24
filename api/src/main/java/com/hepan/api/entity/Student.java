package com.hepan.api.entity;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String sno;

    @ManyToOne
    @JoinColumn(name = "clazz_id")
    private Clazz clazz;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getSno() { return sno; }

    public void setSno(String sno) { this.sno = sno; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

}
