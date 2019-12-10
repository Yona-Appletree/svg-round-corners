import { roundPathCorners } from '../index';

test('Non-fractional rounding ', () => {
  expect(roundPathCorners('M10,10 L110,10 L110,110 L10,110', 10, false)).toBe(
    'M 10 10 L 100 10 C 105 10 110 15 110 20 L 110 100 C 110 105 105 110 100 110 L 10 110',
  );
});

test('Fractional rounding ', () => {
  expect(roundPathCorners('M10,10 L110,10 L110,110 L10,110', 0.1, true)).toBe(
    'M 10 10 L 100 10 C 105 10 110 15 110 20 L 110 100 C 110 105 105 110 100 110 L 10 110',
  );
});
