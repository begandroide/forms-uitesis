import { KissControlOption } from "./kiss-control-types";

export class KissSurveyItem {
    id: string;
    index: number;
    title?: string;
    type: KissControlOption;

    constructor(index: number, type: KissControlOption, title?: string, id?: string) {
        this.index = index;
        this.title = title;
        this.type = type;
        this.id = id ?? this.generateGUID();
    }

    /** Generate random GUID */
    generateGUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
    }
}