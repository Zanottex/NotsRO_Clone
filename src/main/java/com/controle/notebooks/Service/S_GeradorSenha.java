package com.controle.notebooks.Service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class S_GeradorSenha {
    public static String gerarSenha(int qtdLetras, int numeros, int especias) {
        final char[] CARACTER_TEXTO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".toCharArray();
        final char[] CARACTER_NUMERICO = "0123456789".toCharArray();
        final char[] CARACTER_ESPECIAIS = "!@#$%^&*()-_=+[]{}|;:,.<>?".toCharArray();
        String senha = "";
        Random rand = new Random();

        //preenche caracteres textuais
        for (int i = 0; i < qtdLetras; i++) {
            senha += CARACTER_TEXTO[rand.nextInt(0, CARACTER_TEXTO.length)];
        }
        //preenche caracteres numéricos
        for (int i = 0; i < qtdLetras; i++) {
            senha += CARACTER_NUMERICO[rand.nextInt(0, CARACTER_NUMERICO.length)];
        }
        //preenche caracteres especiais
        for (int i = 0; i < qtdLetras; i++) {
            senha += CARACTER_ESPECIAIS[rand.nextInt(0, CARACTER_ESPECIAIS.length)];
        }
        return senha;
    }
}
