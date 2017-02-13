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
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '281230f2',
  },
  'push': {
    'sender_id': '156866190196',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};


@NgModule({

  declarations: [MyApp, HomePage, IntroPage, LoginPage, DatePicker],
  imports: [IonicModule.forRoot(MyApp), ProfileModule, TabModule, ReceiverModule,CloudModule.forRoot(cloudSettings)],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ConnectivityService],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, DatePicker, IntroPage],
})
export class AppModule {}
