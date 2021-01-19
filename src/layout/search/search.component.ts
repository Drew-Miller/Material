import { Component, HostListener, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: `search`,
  templateUrl: `./search.component.html`,
  styleUrls: [`./search.component.sass`]
})
export class SearchComponent {
  @Input() queryMethod: (v: string) => Observable<string[]>;
  @Output() searchSubmit = new Subject<string>();
  public show = false;
  public search = 'Hello World!';
  public results: string[] = ['Result 1', 'Result 2', 'Result 3'];

  public OnSubmit(v: string = ''): void {
    if (v) {
      this.search = v;
    }
    if (this.search) {
      this.searchSubmit.next(this.search);
    }
  }

  public QuerySearch(v: string): void {
    this.search = v;
    if (!this.search) {
      this.results = [];
      return;
    }

    if (this.queryMethod) {
      this.queryMethod(this.search)
        .subscribe(x => this.results = x as string[]);
    }
  }

  public Remove(i: number): void {
    this.results.splice(i, 1);
  }
}
