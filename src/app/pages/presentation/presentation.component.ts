import { Component, OnInit } from '@angular/core';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements OnInit{

  constructor(private languageSvc:LanguageService) {}
  stringOne!:any;
  stringTwo!:any;

  ngOnInit(): void {
    this.languageSvc.language$.subscribe(string => {
      this.stringOne = string?.trasformoidee
      this.stringTwo = string?.esperienze
    })
  }

  faChevronDown:IconDefinition = faChevronDown;


}
