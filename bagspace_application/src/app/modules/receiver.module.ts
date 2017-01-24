import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule} from '@angular/common';
import { CategoryPage } from '../../pages/receiver_group/category/category';
import { GoodsRegistrationPage } from '../../pages/receiver_group/goods-registration/goods-registration';
import { GoodsRegistration2Page } from '../../pages/receiver_group/goods-registration2/goods-registration2';
import { ReceiverDatePage } from '../../pages/receiver_group/receiver-date/receiver-date';
import { ReceiverPlacePage } from '../../pages/receiver_group/receiver-place/receiver-place';


@NgModule({
  declarations: [
    CategoryPage,
    GoodsRegistrationPage, GoodsRegistration2Page,
    ReceiverDatePage, ReceiverPlacePage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
    CategoryPage,
    GoodsRegistrationPage, GoodsRegistration2Page,
    ReceiverDatePage, ReceiverPlacePage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ReceiverModule {}
