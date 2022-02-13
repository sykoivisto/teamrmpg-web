import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-leave-button',
  templateUrl: './join-leave-button.component.html',
  styleUrls: ['./join-leave-button.component.css']
})
export class JoinLeaveButtonComponent implements OnInit {

  action = 'Join' // set to join or leave

  eventType = 'Custom' // should be dynamically set to whichever event type is received from the database

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {

    this.action === 'Join' ? this.action = 'Leave' : this.action = 'Join'  //later move this statement to be run only after the player has been added to the list.

  }

}
