import { Component, OnInit } from '@angular/core';
import { takeLast } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService : TaskService) { 
    
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => 
      {this.tasks = data});
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe( () => {
      this.tasks = this.tasks.filter( (existingTasks) => existingTasks.id !== task.id)
    }
    )
  }
}
