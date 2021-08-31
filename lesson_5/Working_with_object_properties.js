// 1

function objectHasProperty(obj, str) {
  return obj[str] !== undefined;
}

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// 2

function incrementProperty(obj, str) {
  let keys = Object.keys(obj);
  return keys.indexOf(str) !== -1 ? obj[str] += 1 : obj[str] = 1;
}

// 3

function copyProperties(obj1, obj2) {
  Object.assign(obj2, obj1);
  return Object.keys(obj2).length;
}

function copyProperties(obj1, obj2) {
  for (key in obj1) obj2[key] = obj1[key];
  return Object.keys(obj2).length;
}

// 4

function wordCount(str) {
  let keyArr = str.split(' ');
  let obj = {};
  for (key of keyArr) {
    obj[key] !== undefined ? obj[key] += 1 : obj[key] = 1
  }
  return obj;
}
