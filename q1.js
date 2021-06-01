const divisibleOfThree = num => {
    const div = parseInt(num / 3);
  
    return  div;
  };
  
  for (let i = 0; i <= 30; i++) {
    if (divisibleOfThree(i)) {
      console.log(i,'%', 3, '=', divisibleOfThree(i));
    }
  }