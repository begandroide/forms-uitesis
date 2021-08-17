export interface OptionModel {
    label: string;
    value: string | number;
    extraProperties?: ExtraPropertie;
}
export type ExtraPropertie = {[key: string]: string | number | boolean | object};
