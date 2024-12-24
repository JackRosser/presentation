import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { iCards } from '../../interfaces/cards';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.scss',
})
export class WhoamiComponent implements OnInit{

  constructor(private languageSvc:LanguageService) {}

  cardOne!:any
  cardTwo!:any
  cardThree!:any
  cardFour!:any
  htmlOne!:any
  htmlTwo!:any
  htmlThree!:any
  htmlFour!:any


  ngOnInit(): void {
    this.languageSvc.language$.subscribe(list=> {
      this.cardOne = list?.sudime
      this.cardTwo = list?.competenze
      this.cardThree = list?.metodi
      this.cardFour = list?.obiettivo
      this.htmlOne = list?.htmlOne
      this.htmlTwo = list?.htmlTwo
      this.htmlThree = list?.htmlThree
      this.htmlFour = list?.htmlFour

    })
  }

}
