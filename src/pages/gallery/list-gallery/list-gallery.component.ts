import { Component } from '@angular/core';

@Component({
  selector: `list-gallery`,
  templateUrl: `./list-gallery.component.html`,
  styleUrls: [`./list-gallery.component.sass`]
})
export class ListGalleryComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}

interface Section {
  name: string;
  updated: Date;
}
