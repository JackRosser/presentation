import { ButtonsService } from './../services/buttons.service';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private buttonService: ButtonsService
  ) {}

    // ICONE
    faHome = faHome;

  ngAfterViewInit(): void {
    // Trova tutti i pulsanti con la classe 'jackbtn' e applica la logica
    const buttons = this.el.nativeElement.querySelectorAll('.jackbtn');
    buttons.forEach((btn: HTMLElement) => {
      this.buttonService.applyEffects(btn, this.renderer);
    });
  }
}
