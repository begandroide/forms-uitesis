import { Component, OnInit } from '@angular/core';
import { KissControlOption } from './shared/kiss-control-types';
import { KissSurveyItem } from './shared/kiss-survey-item';

@Component({
  selector: 'app-kiss-survey-creator',
  templateUrl: './kiss-survey-creator.component.html',
  styleUrls: ['./kiss-survey-creator.component.scss']
})
export class KissSurveyCreatorComponent implements OnInit {

  questionList: KissSurveyItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onOptionChanged(event: KissControlOption) {
    console.log(event);
    const newItem = new KissSurveyItem(this.questionList.length + 1, event);
    // IF event value is not contained in questionList, add it
    if (this.questionList.indexOf(newItem) === -1) {
      this.questionList.push(newItem);
    }
  }
}
