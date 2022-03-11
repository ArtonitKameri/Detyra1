import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'DETYRA1';
  data: string = 'Password was succesfully changed';
  paragraph: string =
    '  Please use the new password the next time you login in Travelonio';
}
