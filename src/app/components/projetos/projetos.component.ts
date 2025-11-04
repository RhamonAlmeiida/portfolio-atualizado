import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-projetos',
  imports: [ButtonModule,CardModule,InputTextModule,ToastModule,ProgressBarModule, CommonModule, CarouselModule
    
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  rmtparkImgs = [
    'assets/rmtpark1.jpg',
    'assets/rmtpark4.jpg',
    'assets/rmtpark5.jpg',
    'assets/rmtpark6.jpg'
  ];
}
