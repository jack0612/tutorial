
package com.pokemonreview.api.Jpa.Bi.OneToMany.BestPractice;

import org.springframework.data.jpa.repository.JpaRepository;

public   interface Bi_OneToMany_PostCommentRepository extends JpaRepository<Bi_OneToMany_Comment, Long> {

}