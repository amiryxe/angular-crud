import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() {
    const data = [
      {
        id: 1,
        title: 'title test 1',
        description: 'description test 1',
        date: '2022-01-14'
      }
    ]

    console.log(data);
   }

  ngOnInit(): void {
    
  }

}
