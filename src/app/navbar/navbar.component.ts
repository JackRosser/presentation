import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faMailBulk,
  faBars,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonsService } from './../services/buttons.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {


  // Icone
  faHome: IconDefinition = faHome;
  faUser: IconDefinition = faUser;
  faProjectDiagram: IconDefinition = faProjectDiagram;
  faMailBulk: IconDefinition = faMailBulk;

  // Icona Hamburger
  faBars: IconDefinition = faBars;
  faAngleDoubleDown: IconDefinition = faAngleDoubleDown;

  icon: IconDefinition = this.faBars;
  iconToggle: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private buttonService: ButtonsService,
    private languageSvc: LanguageService
  ) {}

  // Mostra/nasconde menu mobile
  showMenu(): void {
    this.iconToggle = !this.iconToggle;
    this.icon = this.iconToggle ? this.faAngleDoubleDown : this.faBars;
  }

  // Scorri alla sezione specificata
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (this.iconToggle) {
        // Chiude il menu mobile dopo il click
        this.showMenu();
      }
    }
  }

  setItalian():void {
    this.languageSvc.setItalian()
  }

  setEnglish():void {
    this.languageSvc.setEnglish()
  }

  ngAfterViewInit(): void {
    // Applica effetti ai pulsanti con la classe 'jackbtn'
    const buttons = this.el.nativeElement.querySelectorAll('.jackbtn');
    buttons.forEach((btn: HTMLElement) => {
      this.buttonService.applyEffects(btn, this.renderer);
    });
  }
}
