import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title comtains React', () => {
  expect(dataTest).toContain('React');
});