package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5502") // Atualize com o endereço correto do seu servidor front-end
public class EmailController {

    private JavaMailSender javaMailSender;

    @Autowired
    public EmailController(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @PostMapping("/enviar")
    @ResponseBody
    public ResponseEntity<String> enviarEmail(@RequestParam("name") String nome,
            @RequestParam("email") String email,
            @RequestParam("message") String mensagem) {
        try {
            // Validar o formato do e-mail
            if (!isValidEmail(email)) {
                return ResponseEntity.badRequest().body("Endereço de e-mail inválido");
            }

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Contato do Website");
            message.setText("Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem +"\nContato: Recebemos seu contato, como podemos ajudar ?");

            // Configurar o e-mail fixo para onde enviar
            message.setFrom("paulosouzasouzasilva@outlook.com");

            javaMailSender.send(message);

            return ResponseEntity.ok("E-mail enviado com sucesso!");
        } catch (Exception e) {
            String errorMessage = "Erro ao enviar o e-mail: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }

    // Método para validar o formato do e-mail
    private boolean isValidEmail(String email) {
        String regex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
