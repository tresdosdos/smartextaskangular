import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {NullComponentComponent} from './components/null-component/null-component.component';

const appRoutes: Routes = [
  { path: '', component: NullComponentComponent},
  { path: 'modal/:id', component: ModalWindowComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
