import { describe, expect, test } from 'vitest';
import { getTypeIdFromTypeName, isEmpty } from '@utils';

describe('isEmpty', () => {
  test('nullish value', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});

describe('getTypeIdFromTypeName', () => {
  test('maps request types whose Socrata name matches the app type name', () => {
    expect(getTypeIdFromTypeName('Bulky Items')).toBe(4);
    expect(getTypeIdFromTypeName('Feedback')).toBe(12);
  });

  test('maps Socrata request-type names that differ from the app type name', () => {
    // These are the official names Socrata returns for the app's
    // "Animal Remains", "Metal Appliances", "Multiple Streetlights",
    // and "Illegal Dumping" request types.
    expect(getTypeIdFromTypeName('Dead Animal Removal')).toBe(3);
    expect(getTypeIdFromTypeName('Metal/Household Appliances')).toBe(7);
    expect(getTypeIdFromTypeName('Multiple Streetlight Issue')).toBe(9);
    expect(getTypeIdFromTypeName('Illegal Dumping Pickup')).toBe(6);
    expect(getTypeIdFromTypeName('Single Streetlight Issue')).toBe(8);
    expect(getTypeIdFromTypeName('Report Water Waste')).toBe(10);
    expect(getTypeIdFromTypeName('Graffiti Removal')).toBe(1);
  });

  test('returns null for empty or non-string input', () => {
    expect(getTypeIdFromTypeName('')).toBe(null);
    expect(getTypeIdFromTypeName(undefined)).toBe(null);
    expect(getTypeIdFromTypeName(null)).toBe(null);
    expect(getTypeIdFromTypeName(42)).toBe(null);
  });
});
