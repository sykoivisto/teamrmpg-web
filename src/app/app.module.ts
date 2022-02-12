import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './output/group/group.component';
import { OutputComponent } from './output/output.component';
import { SettingsComponent } from './settings/settings.component';
import { JoinButtonComponent } from './join-button/join-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    OutputComponent,
    GroupComponent,
    JoinButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
