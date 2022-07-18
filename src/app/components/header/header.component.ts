import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Angular Crash Course - Task Tracker';

  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService : UiService, private router : Router) {
    //Subscript to the Observable function from UIService
    //return the value (true/false) that was fed to subject
    this.subscription = this.uiService.onToggle().subscribe((value)=>{
      this.showAddTask = value;
    })

  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    ///compare strings
    return this.router.url === route
  }
}
