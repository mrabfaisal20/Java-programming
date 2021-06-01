const divisiblNum = (num) => {
  if (num % 4 === 0) {
    return num;
  }
};

for (let i = 0; i <= 100; i++) {
  if (divisiblNum(i)) {
    console.log(i, "is divisible by 4");
  }
}
