package com.controle.notebooks.Controller;

import com.controle.notebooks.Service.S_Usuario;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_Usuario {

    @GetMapping("/cadastro")
    public String getCadastro() {
        return "usuario/cadastro";
    }

    @PostMapping("/cadastro")
    public String cadatrarUsuario(@RequestParam("nome") String nome,
                                  @RequestParam("email") String email,
                                  @RequestParam("matricula") String matricula,
                                  @RequestParam("cargo") String cargo
    ) {
        S_Usuario.cadastrarUsuario(nome, cargo, matricula, email);
        return "usuario/cadastro";
    }

    @GetMapping("/")
    public String getLogin(){
        return "index";
    }

    @PostMapping("/login")
    @ResponseBody
    public boolean PostLogin(@RequestParam("matricula") String matricula,
                             @RequestParam("senha") String senha,
                             HttpSession session){
        session.setAttribute("usuario",S_Usuario.verificaLogin(matricula,senha));
        if(session.getAttribute("usuario")== null){
            return false;
        }else{
            return true;
        }

    }

}
