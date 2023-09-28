package com.controle.notebooks.Service;

import com.controle.notebooks.Model.M_notes;
import com.controle.notebooks.Repository.R_Notes;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
@Service
public class S_Notes {
    private static R_Notes r_notes;

    public S_Notes(R_Notes r_notes){
        this.r_notes = r_notes;
    }
    public static String cadastraNots(String numero, String patrimonio){
        boolean podeSalvar = true;
       String mensagem = "";
        if (S_Generico.textoEstaVazio(numero)) {
            podeSalvar = false;
            mensagem += "O nome precisa ser preenchido.";
        }
        if (S_Generico.textoEstaVazio(patrimonio)) {
            podeSalvar = false;
            mensagem += "O email inválido.";
        }
        if (podeSalvar) {
            M_notes m_notes = new M_notes();
            m_notes.setNumero((int) Long.parseLong(numero));
            m_notes.setPatrimonio(Long.parseLong(patrimonio));
            m_notes.setAtivo(true);
            try {
                r_notes.save(m_notes);
                mensagem += "Deu bom";
            } catch (DataIntegrityViolationException e) {
                mensagem += "Deu n";
            }
        }
        return mensagem;
    }

}
