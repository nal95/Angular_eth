import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;

  //options = ["Monday", "Tuesday", "Wednesday"];
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if(this.voted){
      this.generateChart();
    }

  }

  submitForm() {
    console.log(this.voteForm.value);
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
