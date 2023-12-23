var filter = function(arr, fn) {
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i],i)){
      arr[] = arr[i] ;
    }
  }
  return arr;
};

fn = function greaterThan10(n) { return n > 10; };
arr = [0,10,20,30];

const newArray = filter(arr, fn); 
console.log(newArray);