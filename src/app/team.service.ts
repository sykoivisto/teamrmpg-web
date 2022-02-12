import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Group } from "./shared/group.model";

@Injectable({providedIn: 'root'})

export class TeamService {

  private groups: Group[] = [
    new Group(['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy']),
    new Group(['Blondeman', 'ZJTom', 'Tom_Bomb']),
  ];

  groupsUpdated = new Subject<Group[]>();

  submitSettings(teams: number, players: string) {

    let playersArr = players.split('\n');

    this.shuffle(playersArr);

    let allGroups = this.splitArr(teams, playersArr);

    this.groups = [];

    for (let i = 0; i < allGroups.length; i++) {
      let newGroup = new Group(allGroups[i]);
      this.groups.push(newGroup);
    }

    this.groupsUpdated.next(this.groups);
  }

  shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  splitArr(teams: number, players: string[]) {
    if (teams < 2) {
      return [players];
    }

    let len = players.length;
    let result = [];
    let i = 0;
    let size;

    if (len % teams === 0) {
      size = Math.floor(len / teams);
      while (i < len) {
          result.push(players.slice(i, i += size));
      }
    } else {
        while (i < len) {
            size = Math.ceil((len - i) / teams--);
            result.push(players.slice(i, i += size));
        }
    }
    return result;
  }

}
