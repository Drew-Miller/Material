import {Output, EventEmitter, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export abstract class FormBaseComponent<T> implements OnInit {
  public static Inputs = ['model'];
  public static Outputs = ['saved'];
  public Form: FormGroup;
  public submitted = false;
  @Input() model: T;
  @Output() saved = new EventEmitter();

  public constructor(protected fb: FormBuilder) { }

  public ngOnInit() {
    this.Form = this.CreateForm();
  }

  /**
   * Submits the form and handles the observable events.
   */
  public Submit(): void {
    this.submitted = true;
    this.OnSubmit().subscribe({
      next: (x) => { if (x) { return this.saved.emit(this.model); }},
      error: (error) => this.Error(error),
      complete: () => this.Complete()
    });
  }

  /**
   * Uses the FormBuilder to create an appropriate FormGroup
   */
  protected abstract CreateForm(): FormGroup;

  /**
   * Handles the Submission of the form.
   * Check if the form is valid, create the model from user input,
   * and return true to complete the submission process,
   * or false to continue allowing user input.
   */
  protected abstract OnSubmit(): Observable<boolean>;

  /**
   * Gets called on submission error.
   * @param error Error to handle.
   */
  protected Error(error: Error): void {
    console.log(error);
  }

  /**
   * Gets called on submission complete.
   */
  protected Complete(): void {
    console.log('Form Completed');
  }
}
