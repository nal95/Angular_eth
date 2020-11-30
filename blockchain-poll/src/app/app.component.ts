import { Component } from '@angular/core';
import {Poll} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null ;

  polls: Poll[] = [
    {
      id: 1,
      question: 'Do you like dogs or cats?',
      thumbnail: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?cs=srgb&dl=pexels-snapwire-46024.jpg&fm=jpg',
      results: [10,50,20],
      options: ["Cats" ,"Dogs" ,"Nome"],
      voted: true,
    },
    {
      id: 2,
      question: 'Do you like dogs or cats?',
      thumbnail: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      results: [1,6,4],
      options: ["June" ,"July" ,"August"],
      voted: false,
    },

  ];

  setActivePoll(poll){
    this.activePoll = null;
    setTimeout(()=>{
      this.activePoll = poll;
    },100);
  }
}
