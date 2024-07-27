import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonViewerComponent } from './json-viewer/json-viewer.component'; // Make sure to import your component

const routes: Routes = [
  // Route to the JSON Viewer component (if needed for other purposes)
  { path: 'json-viewer', component: JsonViewerComponent }, 

  // Wildcard route to catch requests for JSON files and redirect to the actual file
  { path: 'assets/my-data.json', redirectTo: '/assets/my-data.json', pathMatch: 'full' },

  // Optional: Redirect to the JSON Viewer by default (if desired)
  { path: '', redirectTo: '/json-viewer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
