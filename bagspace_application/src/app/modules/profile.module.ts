import { NgModule , ErrorHandler} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePickerModule } from 'datepicker-ionic2';
import { ProfilePage } from '../../pages/profile_group/profile/profile';
import { HelperPage } from '../../pages/profile_group/helper/helper';
import { SettingPage } from '../../pages/profile_group/setting/setting';
import { InvitePage } from '../../pages/profile_group/invite/invite';
import { FeedbackPage } from '../../pages/profile_group/feedback/feedback';
import { RulePage } from '../../pages/profile_group/setting_group/rule/rule';


@NgModule({
  declarations: [ProfilePage, HelperPage, SettingPage, InvitePage, FeedbackPage, RulePage],
  imports: [IonicModule, CommonModule, DatePickerModule],
  entryComponents: [ProfilePage, HelperPage, SettingPage, InvitePage, FeedbackPage, RulePage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ProfileModule {}
