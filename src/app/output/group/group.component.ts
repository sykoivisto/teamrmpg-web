import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../shared/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  currentGroup!: Group;

  @Input()
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
