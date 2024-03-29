import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';


const routes : Routes = [
    {
      path:'home',
      component:HomeComponent
    }
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
