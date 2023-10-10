package com.controle.notebooks.Controller;

import com.controle.notebooks.Service.S_Notes;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_Notes {
    @GetMapping("/Notes")
    public String getCadastroNotes(HttpServletRequest request){
        if(request.getHeader("Referer") != null){
            return "Cadastro_Notes/Notes";
        }else{
            return "redirect:/";
        }
    }

    @PostMapping("/Notes")
    @ResponseBody
    public String cadastrarNots(@RequestParam("numero") String numero,
                                @RequestParam("patrimonio")String patrimonio
    ){
        return S_Notes.cadastraNots(numero,patrimonio);

    }
}
