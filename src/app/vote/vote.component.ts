import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-vote',
  templateUrl:'./vote.component.html',
  styles:['']
})
export class VoteComponent{
  @Input() question:string|undefined;
  @Input() yesAnswer:string|undefined;
  @Input() noAnswer:string|undefined;
  @Output() output = new EventEmitter<boolean>();

  displayVote(vote:boolean){
    this.output.emit(vote);
  }
}