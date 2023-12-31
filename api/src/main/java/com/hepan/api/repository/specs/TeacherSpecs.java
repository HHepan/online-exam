package com.hepan.api.repository.specs;

import com.hepan.api.entity.Teacher;
import org.springframework.data.jpa.domain.Specification;

public class TeacherSpecs {
    /**
     * 包含名字.
     * @param name 名称
     * @return 谓语
     */
    public static Specification<Teacher> containingName(String name) {
        if (name != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.like(root.get("name").as(String.class), String.format("%%%s%%", name));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<Teacher> containingPhone(String phone) {
        if (phone != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.like(root.get("phone").as(String.class), String.format("%%%s%%", phone));
        } else {
            return Specification.where(null);
        }
    }
}
