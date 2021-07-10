import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl, Form, FormControl } from "@angular/forms";

@Pipe({
    name: 'cast',
    pure: true
})
export class CastPipe implements PipeTransform {
    transform(value: AbstractControl, args?: any): FormControl {
        return value as FormControl;
    }
}