package com.controle.notebooks.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "software")
public class M_Software {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean exigelicensa;
    private String nome;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isExigeLicensa() {
        return exigelicensa;
    }

    public void setExigeLicensa(boolean exigeLicensa) {
        this.exigelicensa = exigeLicensa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
