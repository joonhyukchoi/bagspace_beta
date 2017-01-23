import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'datepicker-ionic2';
import { UpperTabsPage } from '../../pages/tabs_group/upper-tabs/upper-tabs';
import { TabsPage, IconPage } from '../../pages/tabs_group/tabs/tabs';


@NgModule({
  declarations: [UpperTabsPage, TabsPage, IconPage],
  imports: [IonicModule, CommonModule, DatePickerModule],
  entryComponents: [UpperTabsPage, TabsPage, IconPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class TabModule {}
