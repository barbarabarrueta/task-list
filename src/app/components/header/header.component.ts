import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'lista de tareas 2';

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log("toggleAddTask")
  }

}
