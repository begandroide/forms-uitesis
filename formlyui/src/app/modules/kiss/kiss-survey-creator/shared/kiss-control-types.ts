
export interface KissControlDefinition {
    label: string;
    controls: KissControlOption[];
}

export interface KissControlOption {
    value: KissControlType;
    label: string;
    icon: string;
}

export enum KissControlType {
    Radio = 'radio',
    Checkbox = 'checkbox',
    Text = 'text',
    Textarea = 'textarea',
    Number = 'number',
    Likert3 = 'likert3',
    Likert5 = 'likert5',
}

export const KISS_CONTROL_TYPES: KissControlDefinition[] = [
    {
        label: 'Texto libre',
        controls: [
            { value: KissControlType.Text, label: 'Text', icon: 'text' },
            { value: KissControlType.Textarea, label: 'Textarea', icon: 'textarea' }
        ]
    },
    {
        label: 'Número/cantidad',
        controls: [
            { value: KissControlType.Number, label: 'Number', icon: 'number' },
        ]
    },
    {
        label: 'Alternativas',
        controls: [
            { value: KissControlType.Radio, label: 'Radio', icon: 'radio' },
            { value: KissControlType.Checkbox, label: 'Checkbox', icon: 'checkbox' },
        ]
    },
    {
        label: 'Número',
        controls: [
        ]
    },
    {
        label: 'Likert',
        controls: [
            { value: KissControlType.Likert3, label: '3-Likert', icon: 'select' },
            { value: KissControlType.Likert5, label: '5-Likert', icon: 'select' },
        ]
    }
];
