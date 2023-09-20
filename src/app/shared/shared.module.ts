import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollspyDirective } from './scrollspy.directive';


import { FeatherModule } from 'angular-feather';
import { Menu, ArrowUp, User, Facebook, Instagram, Twitter, Linkedin } from 'angular-feather/icons';

const icons = {
  Menu, ArrowUp, User, Facebook,  Instagram, Twitter, Linkedin
};

@NgModule({
  declarations: [
    ServicesComponent,
    AboutComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    ServicesComponent,
    AboutComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
    // FeatherModule.pick(icons)
  ]
})
export class SharedModule { }
