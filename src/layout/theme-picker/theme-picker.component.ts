import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from 'environments/environment';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.sass']
})
export class ThemePickerComponent {
  public body: HTMLElement;
  public cookie = environment.cookie_prefix;
  public theme = false;

  public constructor(private overlay: OverlayContainer) {
    this.body = document.getElementById('body');
    const cookie = localStorage.getItem(this.GetCookie);
    if (cookie) {
      this.Toggle(cookie === 'true');
    }
  }

  public Toggle(theme: boolean) {
    this.theme = theme;
    if (theme) {
      localStorage.setItem(this.GetCookie, 'true');
      this.AddAppStyles('dark-theme');
      this.RemoveAppStyles('light-theme');
    } else {
      localStorage.setItem(this.GetCookie, 'false');
      this.RemoveAppStyles('dark-theme');
      this.AddAppStyles('light-theme');
    }
  }

  private get GetCookie(): string {
    return `${this.cookie}-theme`;
  }

  public AddAppStyles(style: string) {
    this.body.classList.add(style);
    this.overlay.getContainerElement().classList.add(style);
  }

  public RemoveAppStyles(style: string) {
    this.body.classList.remove(style);
      this.overlay.getContainerElement().classList.remove(style);
  }
}
