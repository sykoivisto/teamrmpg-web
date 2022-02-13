import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  currentGroup!: Group;

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
