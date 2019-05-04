import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CheckModule } from './core/common/components/check/check.module';
import { TabsModule } from './core/common/components/reusable-ui-components/tabs-component/tabs.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CheckModule,
    TabsModule,
    CommonModule
  ],
  exports: [CoreComponent,CheckModule,TabsModule]
})
export class CoreModule { }
