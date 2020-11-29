import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: 'Do you like dogs or cats?',
      image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?cs=srgb&dl=pexels-snapwire-46024.jpg&fm=jpg',
      votes: [0,5,7],
      voted: true,
    },
    {
      question: 'Do you like dogs or cats?',
      image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      votes: [1,6,4],
      voted: false,
    },

  ];
}
