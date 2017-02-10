import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { UpperTabsPage } from '../../pages/tabs_group/upper-tabs/upper-tabs';
import {  IconPage } from '../../pages/tabs_group/tabs/tabs';
import { SearchPlacePage } from '../../pages/tabs_group/search-place/search-place';


@NgModule({
  declarations: [UpperTabsPage,  IconPage, SearchPlacePage],
  imports: [IonicModule, CommonModule],
  entryComponents: [UpperTabsPage,  IconPage, SearchPlacePage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class TabModule {}
