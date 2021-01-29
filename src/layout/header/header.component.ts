import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  public Title = 'Header';

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe({
      next: (x: NavigationEnd) => {
        this.Title = x.urlAfterRedirects.split('/')
            .filter(y => y)
            .map(z => z.toUpperCase())[0];
      }
    });
  }
}
