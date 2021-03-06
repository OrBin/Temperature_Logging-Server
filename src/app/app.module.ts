import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgMathPipesModule } from 'angular-pipes';

import { LoggersComponent } from './loggers.component';

@NgModule({
  declarations: [
    LoggersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgMathPipesModule
  ],
  providers: [],
  bootstrap: [LoggersComponent]
})
export class AppModule { }
