import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss'],
  imports: [NgIf, ],
  standalone: true
})
export class WeatherDisplayComponent implements OnChanges {
  @Input() weatherData: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherData']) {
      console.log('Weather data updated:', this.weatherData);
    }
  }

  formatDate(dateTime: string): { date: string, time: string } {
    const dateArray = dateTime.split(' ');
    const dateParts = dateArray[0].split('-');
    const time = dateArray[1];
    const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
    
    return { date: formattedDate, time: time };
  }
  
}
