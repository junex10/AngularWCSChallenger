import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HouseComponent } from './views/house/house.component';
import { RequestNewStudentsComponent } from './views/students/request-new-students/request-new-students.component';
import { StudentsComponent } from './views/students/students.component';
import { TeachersComponent } from './views/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  /**
  * @Component Home
  */
  {
    path: 'home',
    component: HomeComponent
  },

  /**
  * @Component Students 
  */

  {
    path: 'students',
    component: StudentsComponent,
  },

  /**
  * @Component request Students 
  */

  {
    path: 'students/request-students',
    component: RequestNewStudentsComponent
  },

  /**
  * @Component Professor 
  */

   {
    path: 'teachers',
    component: TeachersComponent
  },

  /**
  * @Component House 
  */

   {
    path: 'house/:house',
    component: HouseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
