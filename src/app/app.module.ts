import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AdditionPipe } from './custom-pipes/addition.pipe';
import { MultiplyPipe } from './custom-pipes/multiply.pipe';
import { SubtractPipe } from './custom-pipes/subtract.pipe';
import { DivisionPipe } from './custom-pipes/division.pipe';
import { ModulusPipe } from './custom-pipes/module.pipe';
import { ExponentPipe } from './custom-pipes/exponent.pipe';

@NgModule({
  declarations: [
    AppComponent, MultiplyPipe, AdditionPipe, SubtractPipe, DivisionPipe, ModulusPipe, ExponentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
