import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./user/list/list.component";
import {CreateComponent} from "./user/create/create.component";
import {EditComponent} from "./user/edit/edit.component";
import {DeleteComponent} from "./user/delete/delete.component";

const routes: Routes = [
  {
    path: 'users/list',
    component: ListComponent
  }, {
    path: 'users/create',
    component: CreateComponent
  }, {
    path: 'users/edit/:id',
    component: EditComponent
  }, {
    path: 'users/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
