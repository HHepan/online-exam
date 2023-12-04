package com.hepan.api.repository.specs;

import com.hepan.api.entity.Course;
import com.hepan.api.entity.QuestionBank;
import org.springframework.data.jpa.domain.Specification;

public class QuestionBankSpecs {
    /**
     * 包含名字.
     * @param name 名称
     * @return 谓语
     */
    public static Specification<QuestionBank> containingName(String name) {
        if (name != null) {
            return (root, criteriaQuery, criteriaBuilder) ->
                    criteriaBuilder.like(root.get("name").as(String.class), String.format("%%%s%%", name));
        } else {
            return Specification.where(null);
        }
    }
}
