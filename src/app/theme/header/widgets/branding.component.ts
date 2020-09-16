import {Component} from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="#/">
      <img src="./assets/images/store.png" class="matero-branding-logo-expanded" alt="logo"/>
      <span class="matero-branding-name">SHOP</span>
    </a>
  `,
})
export class BrandingComponent {}
