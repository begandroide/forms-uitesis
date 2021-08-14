import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { KissControlBaseComponent } from '../kiss-control-base/kiss-control-base.component';

@Component({
  selector: 'app-kiss-input',
  templateUrl: './kiss-input.component.html',
  styleUrls: ['./kiss-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissInputComponent extends KissControlBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
