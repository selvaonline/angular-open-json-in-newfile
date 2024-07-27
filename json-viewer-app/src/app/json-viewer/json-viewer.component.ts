import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {
  jsonData: any;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.loadJson();
  }

  loadJson() {
    const filePath = 'assets/your-json-file.json'; // Adjust the path to your JSON file
    this.jsonService.getJsonFile(filePath).subscribe(data => {
      this.jsonData = data;
    });
  }
}