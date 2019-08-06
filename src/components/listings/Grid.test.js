import data from '../../data/courses.json';

const numItems = data.length;

// numbers
test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// strings
const dataTest = data[0].title;

test('There is JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title comtains React', () => {
  expect(dataTest).toContain('React');
});

// arrays

const dataArrays = ['React Native', 'MeteorJs'];

test('The list of mentions of React Native and MeteorJS', () => {
  expect(['React Native', 'MeteorJs', 'React'])
    .toEqual(expect.arrayContaining(dataArrays));
});

// Objects
test('The first course to have a proprety of Title', () => {
  expect(data[0]).toHaveProperty('title');
});

test('The first course to have a proprety of views with value 31266', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
});
