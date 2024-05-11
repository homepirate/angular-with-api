import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DataDisplayComponent, CounterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
