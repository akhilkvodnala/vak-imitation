package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@RequestMapping("/payment")
public class PaymentService {
    public static void main(String[] args) {
        SpringApplication.run(PaymentService.class, args);
    }

    @PostMapping("/process")
    public String processPayment(@RequestBody PaymentRequest request) {
        return "Payment processed for amount: " + request.amount;
    }
}

class PaymentRequest {
    public double amount;
}