import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TeamSortService {

  //shuffle() accepts an array of strings, and returns an array comprised of the same items in a different order
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

  //autoShuffle() dumps all players into a single array, shuffles, and distributes players evenly into teams 1 and 2
  autoShuffle(team1: string[], team2: string[], unassigned: string[]) {
    let players = [...team1, ...team2, ...unassigned];
    this.shuffle(players);
    let teams = this.splitArr(players);
    return teams; //returns an array containing two arrays of strings. string[][]
  }

  //autoSortRemaining() distributes players from the unassigned array as evenly as possible to team1 and team2.
  autoSortRemaining(team1: string[], team2: string[], unassigned: string[]) {

    let teams = [
      team1,
      team2
    ];

    this.shuffle(unassigned);

    while (unassigned.length > 0) {
      if (teams[0].length <= teams[1].length) {
        let player = unassigned.splice(0,1);
        teams[0].push(player[0]);
      } else {
        let player = unassigned.splice(0,1);
        teams[1].push(player[0]);
      }
    }

    return teams; //returns an array containing two arrays of strings. string[][]
  }

  //splits an array into two equal arrays. returns an array containing both arrays. string[][]
  splitArr(players: string[]) {
    let teams = 2;
    let len = players.length;
    let result = [];
    let i = 0;
    let size;

    if (len % teams === 0) {
      size = Math.floor(len / teams);
      while (i < len) {
        result.push(players.slice(i, (i += size)));
      }
    } else {
      while (i < len) {
        size = Math.ceil((len - i) / teams--);
        result.push(players.slice(i, (i += size)));
      }
    }
    return result;
  }
}
