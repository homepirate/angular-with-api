import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DataDisplayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
