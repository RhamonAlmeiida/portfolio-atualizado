import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule,CarouselModule, FormsModule],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('portfolio-rhamon');
}
