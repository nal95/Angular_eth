import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import ApexCharts from 'apexcharts';
import {PollVote} from "../types";

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  @Input() id: number;

  @Output() pollVoted: EventEmitter<PollVote>=new EventEmitter();

  //options = ["Monday", "Tuesday", "Wednesday"];
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    if(this.voted){
      this.generateChart();
    }

  }

  submitForm() {
    //console.log(this.voteForm.value);
    const pollVoted: PollVote = {
      id: this.id,
      vote: this.voteForm.get("selected").value
    }

    this.pollVoted.emit(pollVoted);
  }


  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: this.results, //[10,50,20],
          // data: ["Mondays","Tuesdays","Wednesdays"],
      chart: {
        type: 'donut'
      },
      labels: this.options, // ["Mondays","Tuesdays","Wednesdays"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%"
        },
      }
    };

    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }


}
