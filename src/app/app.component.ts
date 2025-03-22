import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = "Hello from Diksha !";
  logo: string = 'https://cdn.dribbble.com/users/246068/screenshots/15294543/hi_1_4x.gif?compress=1&resize=400x300';

}
