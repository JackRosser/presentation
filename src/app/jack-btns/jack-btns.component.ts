import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-jack-btns',
  templateUrl: './jack-btns.component.html',
  styleUrl: './jack-btns.component.scss'
})
export class JackBtnsComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void

  ngAfterViewInit(): void {
    const btn = this.el.nativeElement.querySelector('.jackbtn');

    for (let i = 0; i < 40; i++) {
      const span = this.renderer.createElement('span');
      this.renderer.setStyle(span, 'top', `${i * 2}px`);
      const randomDelay = Math.random() * 0.75;
      this.renderer.setStyle(span, 'transition-delay', `${randomDelay}s`);
      this.renderer.appendChild(btn, span);
    }
}
}
