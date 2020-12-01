import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Poll, PollForm} from "../types";
import { Web3Service } from '../blockchain/web3.service';
import {delay} from "rxjs/operators";
import { fromAscii, toAscii } from 'web3-utils';


@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private web3: Web3Service) { }

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
        thumbnail: 'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?cs=srgb&dl=pexels-pixabay-38238.jpg&fm=jpg',
        results: [1, 6, 4],
        options: ["June", "July", "August"],
        voted: false,
      },

    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    this.web3.executeTransaction('vote', pollId,voteNumber);
    //console.log(pollId,voteNumber);
  };

  createPoll(poll: PollForm) {
    this.web3.executeTransaction(
      'createPoll',
      poll.question,
      poll.thumbnail || '',
      poll.options.map((opt) => fromAscii(opt))
    );
   // console.log(poll);
  };


}
