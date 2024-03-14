import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Question1 } from './question1/question1.component'
import { GalleryCard11 } from './gallery-card11/gallery-card11.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { GalleryCard1 } from './gallery-card1/gallery-card1.component'

@NgModule({
  declarations: [
    Question1,
    GalleryCard11,
    FeatureCard,
    GalleryCard3,
    GalleryCard1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [Question1, GalleryCard11, FeatureCard, GalleryCard3, GalleryCard1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
