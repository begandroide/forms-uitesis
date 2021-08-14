import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisibilityMode } from '../kiss-visibility-modes';

@Component({
  selector: 'app-kiss-control-base',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissControlBaseComponent implements OnInit {

  visibilityMode!: VisibilityMode; 
  form: FormGroup;

  protected formBuilder: FormBuilder;
  protected cdRef: ChangeDetectorRef;

  constructor(injector: Injector) { 
    this.formBuilder = injector.get(FormBuilder);
    this.cdRef = injector.get(ChangeDetectorRef);
    this.form  = this.buildForm();
  }

  ngOnInit(): void {
    this.switchVisibilityMode();
  }

  changeVisibilityMode(changes: VisibilityMode): void {
    this.visibilityMode = changes;
    this.switchVisibilityMode();
  }
  /** 
   * switch over the visibility mode
   **/
  private switchVisibilityMode(): void {
    switch (this.visibilityMode) {
      case VisibilityMode.Editor:
        this.form.disable();
        this.cdRef.detectChanges();
        break;
        case VisibilityMode.Preview:
          this.form.enable();
          this.cdRef.detectChanges();
        break;
      case VisibilityMode.Answering:
      case VisibilityMode.Closed:
      case VisibilityMode.Hidding:
        break;
      default:
        throw new Error('Unknown visibility mode: ' + this.visibilityMode);
    }
  }

  protected buildForm(): FormGroup {
    return this.formBuilder.group({
      input: ['', [
        Validators.required
      ]]
    });
  }

}
