import { AnalysisService } from './analysis.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConverterService } from './converter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ConverterService,AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
