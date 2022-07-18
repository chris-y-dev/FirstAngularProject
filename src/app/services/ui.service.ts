import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //For the Task Form
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //call this method when clicked
  toggleAddTask() : void {
    console.log("Toggle form clicked")
    this.showAddTask = !this.showAddTask //opposite value
    this.subject.next(this.showAddTask); //feed value to subject
  }

  //subscribe to this
  onToggle(): Observable<any> {
    return this.subject.asObservable(); //observes the values fed to Subject
  }
}
