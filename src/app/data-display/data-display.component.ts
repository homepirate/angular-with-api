import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { FormsModule } from '@angular/forms';
import { Subscription, debounceTime, interval, startWith, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule, WeatherDisplayComponent, FormsModule, CommonModule ],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit{
  httpClient = inject(HttpClient);
  key = '849dd7e006d24ff4ba695754241005';
  city = 'Москва';
  data: any;
  subscription: Subscription | undefined;


  ngOnInit(): void {
    this.fetchData();
  }


  
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
