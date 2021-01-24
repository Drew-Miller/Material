import { Component } from '@angular/core';
import { ModelBase } from 'core/base.bundle';
import { LoremIpsomService } from 'core/services/lorem-ipsom.service';
import { SearchResult } from 'core/models.bundle';

@Component({
  selector: `header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.sass`],
  inputs: ModelBase.Inputs,
  outputs: ModelBase.Outputs
})
export class HeaderComponent extends ModelBase<boolean> {
  public results: SearchResult[] = [];

  public constructor(private loremService: LoremIpsomService) {
    super();
  }

  public UpdateResults(v: string): void {
    let i = 0;
    this.loremService.Get(v.length).subscribe({
      next: (x: string[]) => this.results = x.map(y => new SearchResult(i++, null, y))
    });
  }
}
