import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule} from '@angular/common';
import { CategoryPage } from '../../pages/receiver_group/category/category';
import { GoodsRegistrationPage } from '../../pages/receiver_group/goods-registration/goods-registration';
import { GoodsRegistration2Page } from '../../pages/receiver_group/goods-registration2/goods-registration2';
import { ReceiverDatePage } from '../../pages/receiver_group/receiver-date/receiver-date';
import { ReceiverPlacePage } from '../../pages/receiver_group/receiver-place/receiver-place';
import { ReceiverDetailPage } from '../../pages/receiver_group/receiver-detail/receiver-detail';
import { ChatRoomPage } from '../../pages/receiver_group/chat-room/chat-room';
import { MoverApplyPage } from '../../pages/receiver_group/mover-apply/mover-apply';
import { MapPage } from '../../pages/receiver_group/map/map';

@NgModule({
  declarations: [
    CategoryPage, ChatRoomPage, MoverApplyPage,
    GoodsRegistrationPage, GoodsRegistration2Page,
    ReceiverDatePage, ReceiverPlacePage, ReceiverDetailPage,MapPage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
    CategoryPage, ChatRoomPage, MoverApplyPage,
    GoodsRegistrationPage, GoodsRegistration2Page,
    ReceiverDatePage, ReceiverPlacePage, ReceiverDetailPage,MapPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ReceiverModule {}
