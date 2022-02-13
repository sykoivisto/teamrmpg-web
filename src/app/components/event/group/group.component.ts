import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  currentGroup!: string[];

  @Input()
  index = 0;

  @Input()
  teamName!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.teamName) {
      return;
    } else {
      this.teamName = 'Team ' + (this.index+1);
    }
  }

}
