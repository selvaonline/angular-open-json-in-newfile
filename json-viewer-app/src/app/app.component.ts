import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openJsonFile(filePath: string) {
    window.open(filePath, '_blank');
  }
}
