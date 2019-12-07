const memoize = (fn) =>{

  let cache = {};
  
  return (...args) => {
    
    //Create hash.
    const n = btoa(args);

    //Find in cache or store new values.
    if (n in cache)      
      return cache[n];
    else {    
      let result = fn(n);
      cache[n] = result;

      return result;
    }

  }

}
