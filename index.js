// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
};

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter((driver) => {
    const charCount = letters.length;
    return driver.substring(0, charCount) === letters;
  });
};

const matchName = (drivers, name) => {
  return drivers.filter((driver) => driver.name === name);
};
