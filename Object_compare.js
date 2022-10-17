let obj1 = { name: "Nithish", age: 32, height: "5.9ft" };
let obj2 = { name: "Nithish", age: 32, height: "5.9ft" };

const isEqual = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  //   for (let objKey of obj1Keys) {
  //     if (obj1[objKey] !== obj2[objKey]) {
  //       return false;
  //     }
  //   }
  return true;
};

console.log(isEqual(obj1, obj2));
