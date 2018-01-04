// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const collection = [];

  for (const driver of drivers ) {
    collection.push(driver.toLowerCase())
  }

  return collection
}

function nameToAttributes(drivers) {
  const collection = [];

  for (const driver of drivers ) {
    names = driver.match(/\S+/g);
    collection.push(Object.assign({}, { firstName: names[0], lastName: names[1]}))
  }

  return collection
}
