import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-zoom';
  public myThumbnail = "../assets/dp-small.jpg";
  public myFullresImage = "../assets/dp-large.jpg";
}
