import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, interval, map, mergeMap, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent implements OnInit, OnDestroy{

  key = 'live_1Yvqrk9AzZ85icidjcbnev32N5ZTrBTGAm8n2SFpMGYMalNk57b1VDr0mO36FtYQ';
  url = `https://api.thecatapi.com/v1/images/search?api_key=${this.key}`;
  
  httpClient = inject(HttpClient);
  imageUrl?: string
  private subscription: Subscription = new Subscription();


  constructor(private ngZone: NgZone) {}

//   ngOnInit() {

//   this.ngZone.runOutsideAngular(() => {
//         interval(60000)
//       .pipe(
//         startWith(0),
//         mergeMap(() => this.httpClient.get<any>(this.url)),
//       )
//       .subscribe((any) => {
//         this.ngZone.run(() => {
//           console.log(any);
//           this.imageUrl = any[0].url;
//         });
//       });
//   })
// }


ngOnInit() {
  this.ngZone.runOutsideAngular(() => {
      const sub = interval(15000)
          .pipe(
              startWith(0),
              mergeMap(() => this.httpClient.get<any>(this.url)),
          )
          .subscribe((data) => {
              this.ngZone.run(() => {
                  this.imageUrl = data[0].url;
              });
          });

      this.subscription.add(sub);
  });
}

ngOnDestroy() {
  if (this.subscription) {
      this.subscription.unsubscribe();
  }
}
}
