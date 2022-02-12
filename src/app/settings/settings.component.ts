import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  teamsDefault = '2'
  playersDefault = 'R0v3r\nCooloJenkins\nZedAyEnDeeAreAy\nBlondeman\nZJTom\nTom_Bomb'

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const teams = form.value.teams;
    const players = form.value.players
    this.teamService.submitSettings(teams, players);
  }

}
