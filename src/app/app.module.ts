import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';
import { DayThumbnailComponent } from './day-thumbnail/day-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    CalendarGridComponent,
    DayThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
