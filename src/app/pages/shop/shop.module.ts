import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Shop } from './shop.component'

const routes = [
  {
    path: '',
    component: Shop,
  },
]

@NgModule({
  declarations: [Shop],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Shop],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {}
