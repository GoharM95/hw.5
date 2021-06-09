// ex. 1
function isObject(item) {
  if (typeof item === 'object' && item !== null) {
    return true;
  }
  return false;
}

function getObjDeepCopy(source) {
  if (Array.isArray(source)) {
    const newArr = [];
    for (let value of source) {
      const newVal = getObjDeepCopy(value);
      newArr.push(newVal);
    }
    return newArr;
  } 
  else if (isObject(source)) {
    const newObj = {};
    for (let key in source) {
      const value = source[key];
      newObj[key] = getObjDeepCopy(value);
    }
    return newObj;
  } 
 
  return source;
}

getObjDeepCopy({a:'1', c:{a:2}, b:[1, 2]});

var a = {a:'1', c:{a:2}, b:[1, 2]};
var b = getObjDeepCopy(a)
a.b.a = 123;
console.log(b.b.a !== 123)

// ex. 2
function range(x, y) {
    if (x === y - 1) {
        return [];
    }

    const nextElem = x + 1;
    const numbers = range(nextElem, y);
    numbers.unshift(nextElem);
    return numbers;
}

range(5, 10); 

// ex. 3
function sortArr(arr, x, y) {
  const newArr = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  
  for (let i = x + 1; i < y; i++) {
    if (obj[i]) {
      for (let j = 0; j < obj[i]; j++) {
        newArr.push(i);
      } 
    }
  }
  return newArr;
}

sortArr([8, 6, 9, 8, 8], 5, 10);