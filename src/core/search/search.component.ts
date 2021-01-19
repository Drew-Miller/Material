import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResult } from 'core/models.bundle';

@Component({
  selector: `search`,
  templateUrl: `./search.component.html`,
  styleUrls: [`./search.component.sass`]
})
export class SearchComponent implements OnInit {
  @Input() results: SearchResult[];
  @Output() query = new Subject<string>();
  @Output() searchSubmit = new Subject<SearchResult>();
  public show = false;
  public search = 'Hello World!';

  public ngOnInit() {
    this.query.next(this.search);
  }

  public OnSubmit(v: SearchResult = null): void {
    // the result is selected from the queried results.
    if (v) {
      this.searchSubmit.next(v);
      this.query.next(v.text);
      this.search = v.text;
      return;
    }
    // the result is created by user input.
    if (this.search) {
      // return an id of -1 to show it was user entered
      const result = new SearchResult(-1, null, this.search);
      this.searchSubmit.next(result);
    }
  }

  public Query(v: string): void {
    this.search = v;
    if (!this.search) {
      this.results = [];
      return;
    } else {
      this.query.next(this.search);
    }
  }

  public Remove(i: number): void {
    this.results.splice(i, 1);
  }
}
