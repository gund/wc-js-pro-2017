import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ComponentsModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    ComponentsModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

}
