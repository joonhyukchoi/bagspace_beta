import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.module';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { ChatRoomPage } from '../pages/mover-apply/chat-room/chat-room';
import { MoverApplyPage } from '../pages/mover-apply/mover-apply';

@NgModule({
  declarations: [
    MyApp, HomePage,
    LoginPage,
    DatePicker,
    ChatRoomPage,
    MoverApplyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    ProfileModule, TabModule, ReceiverModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DatePicker,
    ChatRoomPage,
    MoverApplyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
