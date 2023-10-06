package com.automoveis;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table
public class Fabricante {
    long id;
    String nacionalidade;
    String marca;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNacionalidade() {
        return nacionalidade;
    }
    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
}
