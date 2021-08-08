import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { filter } from 'rxjs/operators';
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
        focus: false,
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
              // focus: 'field.parent.key == formState.focusedIndex',
              // blur: 'field.parent.key != formState.focusedIndex'
            },
            templateOptions: {
              label: 'Título',
              required: true,
            },
          },
        ],
      },
    },
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
    this.dynamicFormsService.onAddSubfield.pipe(filter(p => p.index !== -1)).subscribe(({index, field}) => {
      this.fields[0].fieldGroup![index].fieldGroup = [
        ...this.fields[0].fieldGroup![index].fieldGroup!,
        field
      ]
      this.fields = [...this.fields];
    });
    this.dynamicFormsService.onAddField.subscribe((index) => {
      console.log(index);
      console.log(this.model);
      this.options.formState.focusedIndex = index;
      setTimeout(() => {
        // console.log(this.model);
        // this.fields[0].fieldGroup![0].fieldGroup = [
        //   ...this.fields[0].fieldGroup![0].fieldGroup!,
        //   {
        //     className: 'col-sm-4',
        //     type: 'input',
        //     key: 'investmentName',
        //     templateOptions: {
        //       label: 'Name of Investment:',
        //       required: true,
        //     },
        //   }
        // ];

        // this.fields[0].fieldArray!.fieldGroup = 
        // [
        //   ...this.fields[0].fieldArray!.fieldGroup!,
        //   {
        //     className: 'col-sm-4',
        //     type: 'input',
        //     key: 'investmentName',
        //     templateOptions: {
        //       label: 'Name of Investment:',
        //       required: true,
        //     },
        //   }
        // ];
        // this.fields![0].fieldArray!.fieldGroup?[0] = {
        //   ...this.fields![0].fieldArray!.fieldGroup.splice(0),
        //   {
        //     className: 'col-sm-4',
        //     type: 'input',
        //     key: 'investmentName',
        //     templateOptions: {
        //       label: 'Name of Investment:',
        //       required: true,
        //     },
        //   },
        // } as FormlyFieldConfig;
        this.fields = [
          ...this.fields,
        ];
      }, 10000);
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
