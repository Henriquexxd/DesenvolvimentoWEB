package com.automoveis.FabricanteController;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fabricante")
public class FabricanteController {

    @Autowired
    private FabricanteRepository fb;

    public List<Fabricante> listaFabricante(){
        return fb.findAll();
}
}
