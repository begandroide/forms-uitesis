import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    
  }

}

/**
 * Idea del componente:
 * _______________________
 * TíTULO                 |
 * descripción            |
 * _______________________|
 *                        |
 *                        |
 *                        |
 * _______________________|
 */