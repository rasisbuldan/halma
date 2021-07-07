class Color {
  private _primary: string;
  private _secondary: string;

  public constructor(
    private primaryColor: string,
    private secondaryColor: string
  ) {
    this._primary = primaryColor;
    this._secondary = secondaryColor;
  }

  public get primary() {
    return this._primary;
  }

  public get secondary() {
    return this._secondary;
  }
}

export class BackgroundColor extends Color {
  static readonly GREY = new BackgroundColor("#f5f6fa", "#dcdde1");

  private constructor(primary: string, secondary: string) {
    super(primary, secondary);
  }
}

export class PieceColor extends Color {
  static readonly NO_COLOR = new PieceColor("", "");
  static readonly BLUE = new PieceColor("#00a8ff", "#008ed8");
  static readonly YELLOW = new PieceColor("#fbc531", "#fab804");

  private constructor(primary: string, border: string) {
    super(primary, border);
  }
}
