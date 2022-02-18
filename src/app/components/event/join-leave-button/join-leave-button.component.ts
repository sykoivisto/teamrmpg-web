import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-leave-button',
  templateUrl: './join-leave-button.component.html',
  styleUrls: ['./join-leave-button.component.scss']
})
export class JoinLeaveButtonComponent implements OnInit {

  action = 'Join' // set to join or leave

  @Input() eventType = 'Custom' // should be dynamically set to whichever event type is received from the database

  @Input() eventId = 0;

  joinButtonDisabled = false;

  constructor() { }

  ngOnInit(): void {
    if (this.eventId === 0) {
      this.joinButtonDisabled = true;
    }
  }

  onClick() {

    this.action === 'Join' ? this.action = 'Leave' : this.action = 'Join'  //later move this statement to be run only after the player has been added to the list.

  }

}
