import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Poll} from "../types";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like dogs or cats?',
        thumbnail: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?cs=srgb&dl=pexels-snapwire-46024.jpg&fm=jpg',
        results: [10, 50, 20],
        options: ["Cats", "Dogs", "Nome"],
        voted: true,
      },
      {
        id: 2,
        question: 'Do you like dogs or cats?',
        thumbnail: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        results: [1, 6, 4],
        options: ["June", "July", "August"],
        voted: false,
      },

    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId,voteNumber);
  };

  createPoll(question: string, thumbnail: string, options: string[]) {
    console.log(question, thumbnail, options);
  };


}
