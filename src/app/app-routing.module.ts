import { ErrorComponent } from './pages/error/error.component';
import { AddNewComponent } from './pages/add-new/add-new.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"addNew", component: AddNewComponent},
  {path:"**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
