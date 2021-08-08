import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LikertOptions } from '../const';

@Component({
  selector: 'app-likert-picker',
  templateUrl: './likert-picker.component.html',
  styleUrls: ['./likert-picker.component.scss']
})
export class LikertPickerComponent implements OnInit {
  option: FormControl = new FormControl('default');

  likertOptions = LikertOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
