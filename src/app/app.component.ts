import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  message: string = "Hello from Diksha !";
  logo: string = 'https://cdn.dribbble.com/users/246068/screenshots/15294543/hi_1_4x.gif?compress=1&resize=400x300';
  url : string = 'https://a-z-animals.com/media/2023/04/shutterstock_716019169.jpg';
  openLogo() : void {
    window.open(this.url, '_blank');
  }
}
