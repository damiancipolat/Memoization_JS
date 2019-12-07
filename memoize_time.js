const memoizeTimeout = (fn,time) => {

  let cache = {};
  let timeId;

  return (...args) => {

    timeId = setTimeOut(()=>{

      //Create hash.
      const n = btoa(args);

      //Find in cache or store new values.      
      if (n in cache){
        clearInterval(timeId);
        return cache[n];
      } else {    
        let result = fn(n);        
        cache[n] = result;
        clearInterval(timeId);
        
        return result;
      }

    },time);    

  }

}
