import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FormThemeState, FormThemeStateModel } from './form-theme.state';
import { FormThemeAction } from './form-theme.actions';

describe('FormTheme store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FormThemeState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: FormThemeStateModel = {
      items: ['item-1']
    };
    store.dispatch(new FormThemeAction('item-1'));
    const actual = store.selectSnapshot(FormThemeState.getState);
    expect(actual).toEqual(expected);
  });

});
