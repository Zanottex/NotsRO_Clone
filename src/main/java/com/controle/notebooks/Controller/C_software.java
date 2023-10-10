package com.controle.notebooks.Controller;

import com.controle.notebooks.Service.S_Software;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_software {
    @GetMapping("/Software/Cadastro")
    public String getCadsoftware(HttpServletRequest request) {
        if(request.getHeader("Referer") != null){
            return "Software/Cadastro";
        }else{
            return "redirect:/";
        }
    }

    @PostMapping("/Software/Cadastro")
    @ResponseBody
    public String cadastrarSoftware(@RequestParam("Nome") String Nome,
                                    @RequestParam("pago") boolean pago) {
        return S_Software.cadastrarSoftware(Nome,pago);
    }
}
