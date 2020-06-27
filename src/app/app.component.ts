import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Richard Starkey';
  updatedName = false;
  fontWeight = 'default';
  // wasHeABeatle = true;
  profilePic = './../assets/images/ringo-Keystone-hutton-archives-getty.jpg';

  updateName(name: string) {
    this.name = name;
    this.updatedName = true;
    this.fontWeight = '900';
  }
}
