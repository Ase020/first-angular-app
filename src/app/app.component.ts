import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aseDesign-first-angular-app';
  description = 'Welcome to the aseDesign universe!';
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get some coffee', true),
    new WishItem('Find grass that cuts itself', false),
  ];
}
