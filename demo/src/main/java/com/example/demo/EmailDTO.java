package com.example.demo;

public class EmailDTO {
    private String name;
    private String email;
    private String mensagem;
    
    public EmailDTO(String name, String email, String mensagem) {
        this.name = name;
        this.email = email;
        this.mensagem = mensagem;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getMensagem() {
        return mensagem;
    }
    
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}