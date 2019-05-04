import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CheckModule } from './core/common/components/check/check.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CheckModule
  ],
  exports: [CoreComponent,CheckModule]
})
export class CoreModule { }
