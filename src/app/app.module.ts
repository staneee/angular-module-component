import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [AppComponent, AdBannerComponent, AdDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
