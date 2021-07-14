import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicFormsService } from './services/dynamic-forms.service';

@Component({
  selector: 'app-ng-zorro-antd',
  templateUrl: './ng-zorro-antd.component.html',
  styleUrls: ['./ng-zorro-antd.component.scss']
})
export class NgZorroAntdComponent implements OnInit {

  title = 'formlyui';

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'questions',
      type: 'repeat',
      fieldArray: {
        wrappers: ['container'],
        fieldGroupClassName: 'row',
        templateOptions: {
          label: 'hola',
          btnText: 'Add another investment',
        },
        fieldGroup: [
          {
            // hooks: {
            //   onInit: (field) => {
            //     field?.formControl?.reset();
            //   }
            // },
            defaultValue: '',
            className: 'col-sm-4',
            type: 'input',
            key: 'name',
            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },
          },
        ],
      },
    },
    {
      key: 'investments',
      type: 'formarray',
      templateOptions: {
        addText: 'Add another investment',
      },
      fieldArray: {
        wrappers: ['container'],
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'investmentDate',
            className: 'col-sm-4',
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
        ],
      }
    }
  ];

  constructor(
    private dynamicFormsService: DynamicFormsService
  ) { }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }


  ngOnInit(): void {
    this.dynamicFormsService.onUpdateFields.subscribe((model) => {
      console.log(model);
      // this.fields = {
      //   ...this.fields,

      // }
    });
    // setTimeout(()=>{
    //   this.fields = [
    //     ...this.fields,
    //     {
    //       key: 'name',
    //       type: 'input',
    //       templateOptions: {
    //         label: 'Name (required)',
    //         required: true,
    //       },
    //     },
    //     {
    //       key: 'age',
    //       type: 'input',
    //       templateOptions: {
    //         label: 'Age (min= 18, max= 40)',
    //         type: 'number',
    //         min: 18,
    //         max: 40,
    //         required: true,
    //       },
    //     } 
    //   ];
    // }, 1000);
  }
}
