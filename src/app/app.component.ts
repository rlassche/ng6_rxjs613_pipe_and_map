import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack';

  constructor(private http: HttpClient) {
    this.simple1().subscribe(
      (response:HttpResponse<any>) => { console.log(response)},
      (error:HttpErrorResponse) => { console.log("error", error)},
      () => { console.log( 'finish')}
    )
  }
  simple1(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((res:[any]) => {
        let newArray:[any] = <any>[] ;
        res.forEach( (e) => {
          if( e['title'][0] == 'a') {
              newArray.push( res[0])
          }
        })
        return newArray
      })
    )
  }
}
