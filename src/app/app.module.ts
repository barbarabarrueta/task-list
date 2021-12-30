import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
<<<<<<< HEAD

=======
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
>>>>>>> task_list

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
<<<<<<< HEAD
    TaskComponent
=======
    TasksComponent,
    TasksItemComponent
>>>>>>> task_list
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
