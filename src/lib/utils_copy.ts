/** Linear [interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** Clamp value between min and max */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
