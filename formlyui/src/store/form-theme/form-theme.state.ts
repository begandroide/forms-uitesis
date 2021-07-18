import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddColors, AppendColor, SetBackgroundColor, SetPrimaryColor, SetVariants } from './form-theme.actions';
import { patch, append } from '@ngxs/store/operators';

export interface FormThemeStateModel {
  primaryColor: string;
  primaryColorIndex: number;
  backgroundColor: string;
  backgroundColorIndex: number;
  colors: string[];
  variants: string[];
}
@State<FormThemeStateModel>({
  name: 'formTheme',
  defaults: {
    primaryColor: '',
    primaryColorIndex: -1,
    backgroundColor: '',
    backgroundColorIndex: -1,
    colors: [],
    variants: []
  }
})
@Injectable()
export class FormThemeState {

  @Selector()
  public static getColors({colors}: FormThemeStateModel) {
    return colors;
  }

  @Selector()
  public static getVariants({variants}: FormThemeStateModel) {
    return variants;
  }
  
  @Selector()
  public static getPrimaryColor({primaryColor}: FormThemeStateModel) {
    return primaryColor;
  }

  @Selector()
  public static getIndexPrimaryColor({primaryColorIndex}: FormThemeStateModel) {
    return primaryColorIndex;
  }
    
  @Selector()
  public static getBackgroundColor({backgroundColor}: FormThemeStateModel) {
    return backgroundColor;
  }

  @Selector()
  public static getIndexBackgroundColor({backgroundColorIndex}: FormThemeStateModel) {
    return backgroundColorIndex;
  }

  @Selector()
  public static getState(state: FormThemeStateModel) {
    return state;
  }

  @Action(AddColors)
  public addColor(ctx: StateContext<FormThemeStateModel>, { payload }: AddColors) {
    let { colors, primaryColorIndex } = ctx.getState();
    ctx.setState(
      patch({
        colors: append([...payload]),
        primaryColorIndex: 0
      }));
      // stateModel);
  }

  @Action(AppendColor)
  public appendColor(ctx: StateContext<FormThemeStateModel>, { payload }: AppendColor) {
    let { colors } = ctx.getState();
    ctx.setState(
      patch({
        colors: append([payload]),
        primaryColor: payload,
        primaryColorIndex: colors.length
      }));
      // stateModel);
  }

  @Action(SetPrimaryColor)
  public setPrimaryColor({getState, patchState}: StateContext<FormThemeStateModel>, { payload }: SetPrimaryColor) {
    const { colors } = getState();
    patchState({primaryColor: colors[payload], primaryColorIndex: payload});
  }
  
  @Action(SetBackgroundColor)
  public setBackgroundColor({getState, patchState}: StateContext<FormThemeStateModel>, { payload }: SetBackgroundColor) {
    const { variants } = getState();
    patchState({backgroundColor: variants[payload], backgroundColorIndex: payload});
  }
  
  @Action(SetVariants)
  public setVariants({getState, patchState}: StateContext<FormThemeStateModel>, { payload }: SetVariants) {
    const backgroundColorIndex = 0;
    const backgroundColor = payload[backgroundColorIndex];
    patchState({variants: payload, backgroundColor, backgroundColorIndex });
  }

}
