import { Component, OnInit } from '@angular/core';
import { TeamSortService } from 'src/app/shared/services/team-sort.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
      roster: ['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy'],
    },
    {
      name: 'Unassigned',
      roster: ['AirRovker', 'Luckey', 'Iridyne', 'Birdz'],
    },
    {
      name: 'Team 2',
      roster: ['Blondeman', 'ZJTom', 'Tom_Bomb'],
    },
  ];

  constructor(private teamSortService: TeamSortService) {}

  ngOnInit(): void {
    this.userCanEdit = true;
  }

  onAutoShuffle() {
    let newTeams = this.teamSortService.autoShuffle(this.teams[0].roster,this.teams[2].roster,this.teams[1].roster);

    //update the teams
    this.teams[0].roster = newTeams[0];
    this.teams[1].roster = [];
    this.teams[2].roster = newTeams[1];

    //update the database
  }

  onAutoSortRemaining() {
    let newTeams = this.teamSortService.autoSortRemaining(this.teams[0].roster,this.teams[2].roster,this.teams[1].roster);

    //update the teams
    this.teams[0].roster = newTeams[0];
    this.teams[1].roster = [];
    this.teams[2].roster = newTeams[1];

    //update the database
  }

  onAllToUnassigned() {
    this.teams[1].roster.push(...this.teams[0].roster, ...this.teams[2].roster)
    this.teams[0].roster = [];
    this.teams[2].roster = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
