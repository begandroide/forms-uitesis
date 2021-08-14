import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { KissControlBaseComponent } from '../kiss-control-base/kiss-control-base.component';

@Component({
  selector: 'app-kiss-textarea',
  templateUrl: './kiss-textarea.component.html',
  styleUrls: ['./kiss-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissTextareaComponent extends KissControlBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
