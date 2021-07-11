import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastPipe } from './pipes/cast.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CastPipe
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CastPipe,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedModule { }
