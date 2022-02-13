import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  eventName = "theLegend27's Scrim"; //get this from the database

  userCanEdit = false; //set dynamically, should be false by default

  teams = [ //gather these teams from the database later
    {
      name: 'Team 1',
      group: new Group(['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy']),
    },
    {
      name: 'Unassigned',
      group: new Group(['AirRovker', 'Luckey', 'Iridyne', 'Birdz']),
    },
    {
      name: 'Team 2',
      group: new Group(['Blondeman', 'ZJTom', 'Tom_Bomb']),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.userCanEdit = true;
  }
}
