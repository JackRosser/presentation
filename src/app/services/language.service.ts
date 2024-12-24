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
      htmlOne: `Sono un <span class="font-bold underline">Fullstack Developer</span> con una
        formazione solida in sviluppo web e applicazioni software, specializzato
        nella
        <span class="font-semibold text-coralrose"
          >creazione di soluzioni robuste e scalabili</span
        >.`,
      htmlTwo: `Grazie alla mia esperienza nell'intero ciclo di sviluppo –
        <span class="font-semibold text-coralrose"
          >dal design delle interfacce front-end alla gestione di database e API
          back-end
        </span>
        – offro un approccio globale ai progetti digitali.`,
      htmlThree: ` Mi distinguo per la
        <span class="font-bold underline">capacità di adattarmi rapidamente</span> alle
        nuove tecnologie e per la dedizione nell'<span class="font-semibold text-coralrose">
          ottimizzare il codice per prestazioni e mantenibilità</span
        >.`,
      htmlFour: `Cerco <span class="font-bold underline">opportunità</span> in
        <span class="font-semibold text-coralrose">aziende innovative</span> dove posso mettere
        a frutto le mie competenze tecniche e
        <span class="font-bold"
          >contribuire attivamente al raggiungimento degli obiettivi
          aziendali</span
        >.`
    };
    this.updateLanguage(italian)
  }

  setEnglish(): void {
    const english: iLanguages = {
      home: 'home',
      who: 'about me',
      contacts: 'contacts',
      trasformoidee: 'Transforming concepts into',
      esperienze: 'DIGITAL EXPERIENCES',
      sloganOne: '"Knowing is not enough, we must apply; willing is not enough, we must do."',
      sudime: 'About me',
      competenze: 'Skills',
      metodi: 'Methods',
      obiettivo: 'Objective',
      scrivere: 'Writing code that works perfectly is not just a job',
      maunapassione: 'but a passion that drives me to improve',
      ognigiorno: 'every day',
      htmlOne: `I am a <span class="font-bold underline">Fullstack Developer</span> with a solid
        background in web development and software applications, specializing in
        <span class="font-semibold text-coralrose">creating robust and scalable solutions</span>.`,
      htmlTwo: `Thanks to my experience in the full development cycle –
        <span class="font-semibold text-coralrose">from front-end interface design to back-end database
        and API management</span> – I offer a comprehensive approach to digital projects.`,
      htmlThree: `I stand out for my
        <span class="font-bold underline">ability to quickly adapt</span> to new technologies and my
        dedication to <span class="font-semibold text-coralrose">optimizing code for performance and
        maintainability</span>.`,
      htmlFour: `I am looking for <span class="font-bold underline">opportunities</span> in
        <span class="font-semibold text-coralrose">innovative companies</span> where I can leverage my technical skills and
        <span class="font-bold">actively contribute to achieving business goals</span>.`
    };

    this.updateLanguage(english)
  }
}

