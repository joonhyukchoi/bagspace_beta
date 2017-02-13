import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { UpperTabsPage } from '../../pages/tabs_group/upper-tabs/upper-tabs';
import { IconPage } from '../../pages/tabs_group/tabs/tabs';
import { MyInfoPage } from '../../pages/my-info/my-info';

@NgModule({
  declarations: [UpperTabsPage,  IconPage, MyInfoPage],
  imports: [IonicModule, CommonModule],
  entryComponents: [UpperTabsPage,  IconPage, MyInfoPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class TabModule {}
