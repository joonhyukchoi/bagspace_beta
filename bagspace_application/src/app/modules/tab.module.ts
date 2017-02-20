import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { UpperTabsPage } from '../../pages/tabs_group/upper-tabs/upper-tabs';
import { IconPage } from '../../pages/tabs_group/tabs/tabs';
import { SearchPlacePage } from '../../pages/tabs_group/search-place/search-place';
import { Reverse } from '../../pipes/reverse';
import { MyListPage } from '../../pages/myList/my-list';
import { WaiterDetailPage } from '../../pages/myList/waiter-detail/waiter-detail';
import { MessagePage } from '../../pages/message/message';

@NgModule({
  declarations: [UpperTabsPage,  IconPage, SearchPlacePage, Reverse, MyListPage, WaiterDetailPage, MessagePage],
  imports: [IonicModule, CommonModule],
  entryComponents: [UpperTabsPage,  IconPage, SearchPlacePage, MyListPage, WaiterDetailPage, MessagePage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class TabModule {}
