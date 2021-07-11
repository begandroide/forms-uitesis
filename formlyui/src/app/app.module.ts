import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormlyModule.forRoot({ extras: { lazyRender: true }, validationMessages: [
      { name: 'required', message: 'This field is required' },
    ]}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
