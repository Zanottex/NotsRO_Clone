package com.controle.notebooks.Controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class C_hominha {
    @GetMapping("/Hominha")
    public String gethominha(HttpServletRequest request){
        if(request.getHeader("Referer") != null){
            return "Home/Hominha";
        }else{
            return "redirect:/";
        }
    }
}
