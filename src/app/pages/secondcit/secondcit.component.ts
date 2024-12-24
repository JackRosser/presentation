import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-secondcit',
  templateUrl: './secondcit.component.html',
  styleUrl: './secondcit.component.scss'
})
export class SecondcitComponent implements OnInit{

  constructor(private languageSvc:LanguageService) {}

  lineOne!:any
  lineTwo!:any
  lineThree!:any

  ngOnInit(): void {
    this.languageSvc.language$.subscribe(list=> {
      this.lineOne = list?.scrivere
      this.lineTwo = list?.maunapassione
      this.lineThree = list?.ognigiorno
    })
  }

}
