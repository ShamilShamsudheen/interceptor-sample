import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptor-concept';
  http = inject(HttpClient);


  
  trueSubmit(){
    this.http.get('https://jsonplaceholder.org/users').subscribe((res) => {
      console.log(res);
      
    })
  }
  falseSubmit(){
    this.http.get('https://jsonplaceholder.org/usersjhskahfdkjkashfsjkld').subscribe((res) => {
      console.log(res);
      
    })
  }
}
