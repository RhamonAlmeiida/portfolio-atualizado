import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule,
    ProgressBarModule,
  ],
})
export class ContatoComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';
  enviado = false;

  constructor(
    private messageService: MessageService
  ){}

  enviarMensagem() {
    const templateParams = {
      from_name: this.nome,
      from_email: this.email,
      message: this.mensagem,
    };

    emailjs
      .send('service_jqp2m7j', 'template_i31c8eb', templateParams, 'wRPlhTsfUEk5vFyiC')
      .then(() => {
        this.enviado = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'E-mail enviado com sucesso!'
          });
          this.nome = '';
          this.email = '';
          this.mensagem = '';
        })
      
      .catch((error: any) => {
        console.error('Erro ao enviar mensagem:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Falha ao enviar e-mail. Tente novamente mais tarde.',
        });
      });
  }
}

