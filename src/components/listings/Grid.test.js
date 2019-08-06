import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
  // numbers
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});


// strings
const dataTest = data[0].title;

describe('Strings test', () => {
  test('There is JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});


// arrays

const dataArrays = ['React Native', 'MeteorJs'];

describe('Array tests', () => {
  test('The list of mentions of React Native and MeteorJS', () => {
    expect(['React Native', 'MeteorJs', 'React'])
      .toEqual(expect.arrayContaining(dataArrays));
  });
});


// Objects

describe('Object tests', () => {
  test('The first course to have a proprety of Title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a proprety of views with value 31266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
