import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SobreComponent } from '../../components/sobre/sobre.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ContatoComponent } from '../../components/contato/contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SobreComponent,
    HabilidadesComponent,
    ProjetosComponent,
    ContatoComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-projetos></app-projetos>
    <app-sobre></app-sobre>
    <app-habilidades></app-habilidades>
    <app-contato></app-contato>
  `,
})
export class HomeComponent {}
