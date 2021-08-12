import { Component, OnInit } from '@angular/core';
import { KissControlOption } from './shared/kiss-control-types';

@Component({
  selector: 'app-kiss-survey-creator',
  templateUrl: './kiss-survey-creator.component.html',
  styleUrls: ['./kiss-survey-creator.component.scss']
})
export class KissSurveyCreatorComponent implements OnInit {

  questionList: KissControlOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onOptionChanged(event: KissControlOption) {
    console.log(event);
    // IF event value is not contained in questionList, add it
    if (this.questionList.indexOf(event) === -1) {
      this.questionList.push(event);
    }
  }
}
