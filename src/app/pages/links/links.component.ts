import { AfterViewInit, Component } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent implements AfterViewInit{

  whatsApp:string = "bi bi-whatsapp"
  myNum:string = ""

  showNum():void {
    this.whatsApp = "text-[0.5rem] lg:text-[1rem]"
    this.myNum = "3489272907"
  }
  hideNum():void {
    this.whatsApp = "bi bi-whatsapp"
    this.myNum = ""
  }


  ngAfterViewInit(): void {
        const elements = Array.from(document.querySelectorAll('.sci li a')); // Converte NodeList in array
        VanillaTilt.init(elements as HTMLElement[], {
          max: 30,
          speed: 400,
          glare: true,
        });
  }

}
