import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-display-vote',
  templateUrl: './display-vote.component.html',
  styleUrls: ['./display-vote.component.css']
})
export class DisplayVoteComponent {
  question:string="Are you Zimbabwean";
  noAnswer:string="no";
  yesAnswer:string="yes";
  output:boolean|undefined;

  receiveVote(vote:boolean){
    this.output=vote;
  }

}