import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CheckModule } from './core/common/components/check/check.module';
import { TabsModule } from './core/common/components/reusable-ui-components/tabs-component/tabs.module';
import { CommonModule } from '@angular/common';
import { CardComponent } from './core/common/components/reusable-ui-components/card-component/card.component';
import { CardModule } from './core/common/components/reusable-ui-components/card-component/card.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CheckModule,
    TabsModule,
    CommonModule,
    CardModule
  ],
  exports: [CoreComponent,CheckModule,TabsModule,CardModule]
})
export class CoreModule { }
