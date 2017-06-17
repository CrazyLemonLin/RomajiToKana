import { AnalysisService } from './analysis.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConverterService } from './converter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ConverterComponent } from './converter/converter.component';
import { routing } from "./app.route.config";
@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [ConverterService, AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
