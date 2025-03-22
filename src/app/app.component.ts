import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //  Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Import FormsModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = "";
  logo: string = 'https://cdn.dribbble.com/users/246068/screenshots/15294543/hi_1_4x.gif?compress=1&resize=400x300';
  url: string = 'https://a-z-animals.com/media/2023/04/shutterstock_716019169.jpg';

  openLogo(): void {
    window.open(this.url, '_blank');
  }
}
