import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import {Task} from '../../Task';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder : boolean = false;

  //show/hide form
  showAddTask : boolean;
  subscription : Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> {
      this.showAddTask = value;
    })
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return;
    }
    if (!this.day) {
      alert('Please add a day')
      return;
    }

    const newTask : Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

     //emit event
    this.onAddTask.emit(newTask)

    ///reset text to empty
    this.text = '';
    this.day = '';
    this.reminder = false;

   
  }

}
