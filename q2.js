const power = (num) => {
  let pow = 1;
  for (let n = 0; n < 3; n++) {
    pow = pow * num;
    console.log("in while", pow);
  }
  return pow;
};

for (let i = 2; i <= 5; i++) {
  console.log("in loop");
  console.log("2nd power of ", i, "=", power(i));
}
