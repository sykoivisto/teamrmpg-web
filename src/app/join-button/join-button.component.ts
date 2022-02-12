import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-button',
  templateUrl: './join-button.component.html',
  styleUrls: ['./join-button.component.scss']
})
export class JoinButtonComponent implements OnInit {


  @Input() eventType = 'Custom';
  @Input() eventId = 0;

  joinButtonDisabled = false;

  constructor() { }

  ngOnInit(): void {
    if (this.eventId === 0) {
      this.joinButtonDisabled = true;
    }
  }

  onJoin() {
    return true;
  }

}
