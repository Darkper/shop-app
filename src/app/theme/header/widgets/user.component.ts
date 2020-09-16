import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService, SettingsService, TokenService} from '@core';

@Component({
  selector: 'app-user',
  template: `
    <button
      mat-button
      class="matero-toolbar-button matero-avatar-button"
      href="javascript:void(0)"
      [matMenuTriggerFor]="menu"
    >
      <mat-icon>account_circle</mat-icon>
      <span class="matero-username" fxHide.lt-sm>Darkper</span>
    </button>

    <mat-menu #menu="matMenu">
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>{{ 'user.profile' | translate }}</span>
      </button>
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>{{ 'user.settings' | translate }}</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'user.logout' | translate }}</span>
      </button>
    </mat-menu>
  `,
})
export class UserComponent {
  constructor(
    private router: Router,
    private settings: SettingsService,
    private token: TokenService,
    private menu: MenuService
  ) {}

  logout() {
    this.token.clear();
    this.settings.removeUser();
    this.menu.reset();
    this.router.navigateByUrl('/auth/login');
  }
}
