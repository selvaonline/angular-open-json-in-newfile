import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json-viewer',
  template: '',
  styles: []
})
export class JsonViewerComponent implements OnInit {
  jsonFilePath: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.jsonFilePath = params['filePath'] || '/assets/data.json';

      this.http.get<any>(this.jsonFilePath).subscribe({
        next: (data) => {
          this.openInNewWindow(data);
        },
        error: (error) => {
          console.error('Error loading JSON:', error);
        }
      });
    });
  }

  openInNewWindow(data: any) {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
      newWindow.document.close(); 
    }
  }
}
