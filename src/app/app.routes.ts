import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent}
];


@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      RouterModule,
      RouterTestingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
