import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cit',
  templateUrl: './cit.component.html',
  styleUrls: ['./cit.component.scss']
})
export class CitComponent  implements OnInit{


  constructor(private languageSvc:LanguageService) {}
  slogan!:any

  ngOnInit(): void {
    this.languageSvc.language$.subscribe(list => {
      this.slogan = list?.sloganOne
    })
  }


}
