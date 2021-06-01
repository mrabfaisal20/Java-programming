const factNum = num => {
    let i,fact=1;     
    for(i=1;i<=num;i++){    
        fact=fact*i;    
    }    
    return  fact;
  };
  
  for (let n = 1; n <= 5; n++) {

    if (factNum(n)) {
      console.log('factorial of ', n, '=', factNum(n));
    }
  }