package com.hepan.api.repository.specs;

import com.hepan.api.entity.Course;
import com.hepan.api.entity.Exam;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;

public class ExamSpecs {
    /**
     * 包含名字.
     * @param name 名称
     * @return 谓语
     */
    public static Specification<Exam> containingName(String name) {
        if (name != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.like(root.get("name").as(String.class), String.format("%%%s%%", name));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<Exam> byClazzId(Long clazzId) {
        if (clazzId != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("clazzes").get("id").as(Long.class),  clazzId);
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<Exam> byHasPublish() {
        return (root, criteriaQuery, criteriaBuilder) ->
                criteriaBuilder.notEqual(root.get("state").as(Long.class),  Exam.EXAM_UNPUBLISHED);
    }

    public static Specification<Exam> byTeacherId(Long teacherId) {
        if (teacherId != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("user").get("teacher").get("id").as(Long.class),  teacherId);
        } else {
            return Specification.where(null);
        }
    }
}
