/** Linear [interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
