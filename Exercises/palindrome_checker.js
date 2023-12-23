function palindrome(val){

  let forward = "";
  let reversed = "";;
  let val_length = val.length -1;

  for (let i = 0; i < val.length; i++){
  if (/^[a-zA-Z\d]+$/.test(val[i])) {
    forward += val[i].toLowerCase();
  }
}
  for (let i = (forward.length - 1);i >= 0; i--){
    reversed += forward[i].toLowerCase();
  }
  return forward === reversed;
  // console.log(forward);
  // console.log(reversed);
}

console.log(palindrome("1 eye for of 1 eye."));
