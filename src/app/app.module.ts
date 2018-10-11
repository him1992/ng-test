import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {SampleComponent} from './components/sample/sample.component';
import { BhaviniComponent } from './components/bhavini/bhavini.component';
import { BhaviniSearchComponent } from './components/bhavini/bhavini-search/bhavini-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BhaviniComponent,
    BhaviniSearchComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
