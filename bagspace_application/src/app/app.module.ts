import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';

import { ProfileModule } from './modules/profile.module';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';

import { ConnectivityService } from '../providers/connectivity-service';
import { Reverse } from '../pipes/reverse';


@NgModule({
  declarations: [MyApp, HomePage, IntroPage, LoginPage, DatePicker],
  imports: [IonicModule.forRoot(MyApp), ProfileModule, TabModule, ReceiverModule],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ConnectivityService],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, DatePicker, IntroPage],
})
export class AppModule {}
