const power = base => {
    var pow = 1
    while(base < 3){
        pow = pow*base;
    }
    return  pow;
  };
  
  for (let i = 1; i <= 30; i++) {
    if (power(i)) {
      console.log('2nd power of ', i, '=', power(i));
    }
  }