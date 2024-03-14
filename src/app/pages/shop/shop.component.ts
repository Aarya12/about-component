import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],
})
export class Shop {
  rawnibr: string = ' '
  rawatp3: string = ' '
  raw2200: string = ' '
  rawodgo: string = ' '
  raw82re: string = ' '
  raw0wb1: string = ' '
  rawlwxz: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('bulk shop')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'bulk shop',
      },
    ])
  }
}
