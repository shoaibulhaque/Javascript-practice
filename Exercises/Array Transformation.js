var map = function(arr, fn) {
  returnedArray = [];
  for (let i = 0; i < arr.length; i++){
    returnedArray[i] = fn(arr[i],i);
  }
  return returnedArray;
}

fn = function plusone(n){ 
  return n + 1; 
};
arr = [1,2,3];

const newArray = map(arr, fn);
console.log(newArray);