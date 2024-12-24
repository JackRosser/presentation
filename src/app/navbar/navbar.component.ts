import { ButtonsService } from './../services/buttons.service';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';





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
    faHome: IconDefinition = faHome;
    faUser: IconDefinition = faUser;
    faProjectDiagram: IconDefinition = faProjectDiagram;
    faMailBulk: IconDefinition = faMailBulk;
    // ICONA HAMBURGER
    // menu hidden
    faBars: IconDefinition = faBars;
    // menu mostrato
    faAngleDoubleDown: IconDefinition = faAngleDoubleDown;

    icon: IconDefinition = faBars
    iconToggle: boolean = false;

    showMenu(): void {
      this.iconToggle = !this.iconToggle
      if(this.iconToggle) {
        this.icon = faAngleDoubleDown
      } else {
        this.icon = faBars
      }
    }

  ngAfterViewInit(): void {
    // Trova tutti i pulsanti con la classe 'jackbtn' e applica la logica
    const buttons = this.el.nativeElement.querySelectorAll('.jackbtn');
    buttons.forEach((btn: HTMLElement) => {
      this.buttonService.applyEffects(btn, this.renderer);
    });
  }
}
