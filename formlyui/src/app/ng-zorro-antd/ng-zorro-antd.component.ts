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
      focusedIndex: 0
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'questions',
      type: 'repeat',
      // expressionProperties: {
      //   focus: 'console.log(field) && field.parent.key === questions'
      // },
      fieldArray: {
        wrappers: ['container'],
        fieldGroupClassName: 'row',
        // focus: true,
        templateOptions: {
          label: 'hola',
          btnText: 'Add another investment',
        },
        focus: true,
        // hooks: {
        //   onInit: (field) => {
        //     window.scrollTo;
        //   }
        // },
        fieldGroup: [
          {
            defaultValue: '',
            className: 'col-sm-4',
            type: 'input',
            key: 'name',
            expressionProperties: {
              focus: 'field.parent.key == formState.focusedIndex',
              blur: 'field.parent.key != formState.focusedIndex'
            },
            templateOptions: {
              label: 'Name of Investment:',
              // required: true,
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
    this.dynamicFormsService.onAddField.subscribe((index) => {
      console.log(index);
      this.options.formState.focusedIndex = index;
    });
    this.dynamicFormsService.onDeleteField.subscribe((index) => {
      this.options.formState.focusedIndex = index - 1;
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
