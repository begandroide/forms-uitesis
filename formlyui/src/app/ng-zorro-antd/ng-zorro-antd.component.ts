import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

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
      key: 'test1',
      fieldGroupClassName: 'grid grid-cols-3 gap-4',
      fieldGroup: [
        {
          key: 'nombre2',
          type: 'input',
          className: "col-span-3 md:col-span-1",
          templateOptions: {
            label: 'Título',
            placeholder: 'Ingresa el título de la sección',
            required: true,
            type: 'text',
          }
        },
        {
          key: 'nombre1',
          type: 'input',
          className: "col-span-3 md:col-span-1",
          templateOptions: {
            label: 'Título',
            placeholder: 'Ingresa el título de la sección',
            required: true,
            type: 'text',
          }
        },
        {
          key: 'nombre3',
          type: 'input',
          className: "col-span-3 md:col-span-1",
          templateOptions: {
            label: 'Título',
            placeholder: 'Ingresa el título de la sección',
            required: true,
            type: 'text',
          }
        },
        {
          key: 'nombre4',
          type: 'input',
          className: 'col-span-3 md:col-span-1',
          templateOptions: {
            label: 'Título',
            placeholder: 'Ingresa el título de la sección',
            required: true,
            type: 'text',
          }
        },
      ]
    },
    {
      type: 'header',
      key: '1'
    },
    {
      key: 'investments',
      type: 'formarray',
      templateOptions: {
        addText: 'Add another investment',
      },
      fieldArray: {
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
    },
    {
      key: 'address',
      templateOptions: { label: 'Address' },
      fieldGroup: [
        {
          key: 'nombre',
          type: 'input',
          className: 'col-span-3',
          templateOptions: {
            label: 'Título',
            placeholder: 'Ingresa el título de la sección',
            required: true,
            type: 'text',
          }
        },
        {
          key: 'descripcion',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Descripción de la sección'
          }
        },
      ]
    },
    {
      type: 'section',
      key: 'section1',
      templateOptions: {
        sectionName: 'Nombre de la sección',
        sectionDescription: 'Nombre de la sección'
      }
    },
    {
      key: 'text',
      type: 'textarea',
      templateOptions: {
        label: 'Texto',
        placeholder: 'Formly is terrific!',
        required: true,
        cols: 3,
        rows: 4,
        description: 'Descripción',
      },
      validation: {
        messages: {
          required: (error, field: FormlyFieldConfig) => `Texto es un campo requerido`,
        },
      }
    },
    {
      key: 'nested.story',
      type: 'textarea',
      templateOptions: {
        label: 'Some sweet story',
        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: '',
      },
      expressionProperties: {
        focus: 'formState.awesomeIsForced',
        'templateOptions.description': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }
          return null;
        },
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: { label: '' },
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
        'templateOptions.label': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        },
      },
    },
    {
      key: 'date1',
      type: 'input',
      templateOptions: {
        label: 'Date (using default validator options declared in ngModule)',
        type: 'date',
      }
    },
    {
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },{
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'select_multi',
      type: 'select',
      templateOptions: {
        label: 'Select Multiple',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        multiple: true,
        selectAllOption: 'Select All',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'Slider',
      type: 'slider',
      templateOptions: {
        label: 'Slider label',
        // placeholder: 'Slider Placeholder',
        // thumbLabel: true,
        description: 'Slider Description',
        required: true,
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.placeholder': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'Too bad... It really is awesome! Wasn\'t that cool?';
          } else {
            return 'Type in here... I dare you';
          }
        },
        'templateOptions.disabled': 'formState.awesomeIsForced',
      },
      hideExpression: 'model.awesome',
      templateOptions: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
    }
  ];
  
  constructor() { }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }


  ngOnInit(): void {
    setTimeout(()=>{
      this.fields = [
        ...this.fields,
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            label: 'Name (required)',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            label: 'Age (min= 18, max= 40)',
            type: 'number',
            min: 18,
            max: 40,
            required: true,
          },
        } 
      ];
    }, 1000);
  }
}
