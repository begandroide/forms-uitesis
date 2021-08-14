import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VisibilityMode } from '../kiss-components/kiss-visibility-modes';
import { KissControlOption } from '../kiss-components/kiss-control-types';
import { KissSurveyItem } from './shared/kiss-survey-item';

@Component({
  selector: 'app-kiss-survey-creator',
  templateUrl: './kiss-survey-creator.component.html',
  styleUrls: ['./kiss-survey-creator.component.scss']
})
export class KissSurveyCreatorComponent implements OnInit {

  visibilityMode$: BehaviorSubject<VisibilityMode> = new BehaviorSubject<VisibilityMode>(VisibilityMode.Editor);

  questionList: KissSurveyItem[] = [];
  toggleActive = false;

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
  toggleVisibilityMode() {
    this.toggleActive = !this.toggleActive;
    if (this.toggleActive) {
      this.visibilityMode$.next(VisibilityMode.Preview);
    } else {
      this.visibilityMode$.next(VisibilityMode.Editor);
    }
  }
}
