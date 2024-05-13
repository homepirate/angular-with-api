import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { CounterComponent } from '../counter/counter.component';
import { CatComponent } from '../cat/cat.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DataDisplayComponent, CounterComponent, CatComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
