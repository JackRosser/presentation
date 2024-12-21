import { Component } from '@angular/core';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  faChevronDown:IconDefinition = faChevronDown;

}
