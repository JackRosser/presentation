import { Injectable } from '@angular/core';
import { iLanguages } from '../interfaces/languages';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {this.setItalian()}

  private languageBh = new BehaviorSubject<iLanguages | null>(null);
  language$ = this.languageBh.asObservable()

  updateLanguage(newLanguage: iLanguages):void {
    this.languageBh.next(newLanguage)
  }

  setItalian(): void {
    const italian: iLanguages = {
      home: 'home',
      who: 'chi sono',
      contacts: 'contatti',
      trasformoidee: 'Trasformo le tue idee in',
      esperienze: 'ESPERIENZE DIGITALI',
      sloganOne: '"Non basta sapere, si deve anche applicare; non è abbastanza volere, si deve anche fare."',
      sudime: 'Su di me',
      competenze: 'Competenze',
      metodi: 'Metodi',
      obiettivo: 'Obiettivo',
      scrivere: 'Scrivere codice che funzioni perfettamente non è solo un lavoro',
      maunapassione: 'ma una passione che mi spinge a migliorarmi',
      ognigiorno: 'ogni giorno',
    };
    this.updateLanguage(italian)
  }

  setEnglish(): void {
    const english: iLanguages = {
      home: 'home',
      who: 'about',
      contacts: 'contacts',
      trasformoidee: 'Transforming concepts into',
      esperienze: 'DIGITAL EXPERIENCES',
      sloganOne: '"It’s not enough to know; you also need to apply. It’s not enough to want; you also need to do."',
      sudime: 'About me',
      competenze: 'Skills',
      metodi: 'Methods',
      obiettivo: 'Goal',
      scrivere: 'Writing perfectly working code is not just a job',
      maunapassione: 'it’s a passion that drives me to improve',
      ognigiorno: 'every day',
    };
    this.updateLanguage(english)
  }
}

