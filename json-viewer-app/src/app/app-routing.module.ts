import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';


const routes: Routes = [
  { path: 'json-viewer', component: JsonViewerComponent },
  { path: '', redirectTo: '/json-viewer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
