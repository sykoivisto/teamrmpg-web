import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Group } from '../shared/group.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit, OnDestroy {
  private updateGroupsSubscription!: Subscription;

  groups: Group[] = [
    new Group(['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy']),
    new Group(['Blondeman', 'ZJTom', 'Tom_Bomb']),
  ];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.updateGroupsSubscription =
      this.teamService.groupsUpdated.subscribe((groups) => {
        this.groups = [];
        this.groups = groups;
      });
  }

  ngOnDestroy(): void {
    this.updateGroupsSubscription.unsubscribe();
  }

}
