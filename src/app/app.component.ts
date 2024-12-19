import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; // Importa il servizio Title

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Giacomo Rossettini Website';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
