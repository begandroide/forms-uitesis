export class AddColors {
  public static readonly type = '[FormTheme] Add Colors';
  constructor(public payload: string[]) {}
}

export class AppendColor {
  public static readonly type = '[FormTheme] Append Colors';
  constructor(public payload: string) {}
}

export class SetPrimaryColor {
  public static readonly type = '[FormTheme] Set Primary Color';
  constructor(public payload: number) {}
}

export class SetBackgroundColor {
  public static readonly type = '[FormTheme] Set Background Color';
  constructor(public payload: number) {}
}

export class SetVariants {
  public static readonly type = '[FormTheme] Set Variants Color';
  constructor(public payload: string[]) {}
}