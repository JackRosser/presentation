import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  applyEffects(button: HTMLElement, renderer: Renderer2): void {
    for (let i = 0; i < 40; i++) {
      const span = renderer.createElement('span');
      renderer.setStyle(span, 'top', `${i * 2}px`);
      const randomDelay = Math.random() * 0.75;
      renderer.setStyle(span, 'transition-delay', `${randomDelay}s`);
      renderer.appendChild(button, span);
}
  }
}
