
export interface KissControlOption {
    value: KissControlType;
    label: string;
    icon: string;
}

export enum KissControlType {
    Radio = 'radio',
    Checkbox = 'checkbox',
    Select = 'select',
    Text = 'text',
    Textarea = 'textarea',
    Date = 'date',
    Time = 'time',
    DateTime = 'datetime',
    Email = 'email',
    Number = 'number',
    Url = 'url',
    Image = 'image',
    File = 'file'
}

export const KISS_CONTROL_TYPES: KissControlOption[] = [
    { value: KissControlType.Radio, label: 'Radio', icon: 'radio' },
    { value: KissControlType.Checkbox, label: 'Checkbox', icon: 'checkbox' },
    { value: KissControlType.Select, label: 'Select', icon: 'select' },
    { value: KissControlType.Text, label: 'Text', icon: 'text' },
    { value: KissControlType.Textarea, label: 'Textarea', icon: 'textarea' },
    { value: KissControlType.Date, label: 'Date', icon: 'date' },
    { value: KissControlType.Time, label: 'Time', icon: 'time' },
    { value: KissControlType.DateTime, label: 'DateTime', icon: 'datetime' },
    { value: KissControlType.Email, label: 'Email', icon: 'email' },
    { value: KissControlType.Number, label: 'Number', icon: 'number' },
    { value: KissControlType.Url, label: 'URL', icon: 'url' },
    { value: KissControlType.Image, label: 'Image', icon: 'image' },
    { value: KissControlType.File, label: 'File', icon: 'file' }
];

