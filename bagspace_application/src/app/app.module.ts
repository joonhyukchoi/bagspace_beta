import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePickerModule } from 'datepicker-ionic2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.module';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DatePicker
  ],
  imports: [
    IonicModule.forRoot(MyApp), DatePickerModule,
    ProfileModule, TabModule,ReceiverModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DatePicker
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
