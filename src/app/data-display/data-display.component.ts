import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { FormsModule } from '@angular/forms';

import { interval } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule, WeatherDisplayComponent,FormsModule ],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit{
  httpClient = inject(HttpClient);
  key = '849dd7e006d24ff4ba695754241005';
  city = 'Москва';
  data: any;
  intervalId: any;


  ngOnInit(): void {
    this.fetchData();
    // this.scheduleRecurringFetch();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // scheduleRecurringFetch() {
  //   this.intervalId = setInterval(() => {
  //     this.fetchData();
  //   }, 60000);  // 60000 мс = 1 минута
  // }



  // scheduleRecurringFetch() {
  //   this.intervalId = interval(60000)
  //     .pipe(
  //       debounceTime(500), // Ограничиваем частоту выполнения запросов
  //       switchMap(() =>
  //         this.httpClient.get(`https://api.weatherapi.com/v1/current.json?q=${this.city}&key=${this.key}&lang=ru`)
  //       )
  //     )
  //     .subscribe({
  //       next: (data: any) => {
  //         console.log('Data fetched:', data);
  //         this.data = data;
  //       },
  //       error: (error) => {
  //         console.error('Error fetching weather data:', error);
  //       }
  //     });
  // }
  
  


  fetchData(){
    this.httpClient.get(`https://api.weatherapi.com/v1/current.json?q=${this.city}&key=${this.key}&lang=ru`).subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  updateCity(newCity: string) {
    this.city = newCity || 'Москва'; 
    this.fetchData();
  }


}
