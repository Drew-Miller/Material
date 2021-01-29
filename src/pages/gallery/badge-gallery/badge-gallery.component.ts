import { Component } from '@angular/core';

@Component({
  selector: `badge-gallery`,
  templateUrl: `./badge-gallery.component.html`,
  styleUrls: [`./badge-gallery.component.sass`]
})
export class BadgeGalleryComponent {
  public textHidden = false;
  public buttonHidden = false;
  public iconHidden = false;
}
