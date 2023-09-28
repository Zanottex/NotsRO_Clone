package com.controle.notebooks.Repository;


import com.controle.notebooks.Model.M_notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface R_Notes extends JpaRepository<M_notes, Long> {

}
