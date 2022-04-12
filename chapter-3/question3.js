class Color {
  constructor(r = 0, g = 0, b = 0, hex = "#000000", opacity) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.hex = hex;
    this.opacity = opacity;
  }

  getColorRGB = () =>
    `rgb(${this.r},${this.g},${this.b}${
      this.opacity ? `, ${this.opacity}` : ""
    })`;

  getColorShortHex = () => {
    const regexShortHex = /^#[A-Fa-f0-9]{3}$/;
    return regexShortHex.test(this.hex)
      ? `"${this.hex}"`
      : "Insert valid short hex value";
  };

  getColorLongHex = () => {
    const regexLongHex = /^#[A-Fa-f0-9]{6}$/;
    return regexLongHex.test(this.hex)
      ? `"${this.hex}"`
      : "Insert valid long hex value";
  };
}

const color = new Color(0, 255, 50, "#001");
console.log(color.getColorRGB());
console.log(color.getColorShortHex());
