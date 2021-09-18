
const getMessage = (date)=> new Promise((resolve, reject)=> {
   
    if(date=="Aug_15"){
      resolve("Todays date is Aug 15") 
      setTimeout(()=> {      
      setTimeout(()=> { 
          setTimeout(()=> {  
              setTimeout(()=> {  
                  setTimeout(()=> { 
                      setTimeout(()=> {  
                          setTimeout(()=> { 
                              setTimeout(()=> {  
                                  setTimeout(()=> {  
                                      setTimeout(()=> { 
                                          setTimeout(()=> { 
                                          
                                       document.body.innerText="Happy Independence Day ";}, 1000);
                        
                                      document.body.innerText="1";}, 1000);
                      
                                  document.body.innerText="2";}, 1000);
                    
                              document.body.innerText="3";}, 1000);
                  
                          document.body.innerText="4"; }, 1000);
                
                      document.body.innerText="5";}, 1000);
          
                  document.body.innerText="6";}, 1000);
            
              document.body.innerText="7";}, 1000);
          
          document.body.innerText="8";}, 1000);
        
      document.body.innerText="9";}, 1000);
      
  document.body.innerText="10";}, 1000);
  
  document.body.setAttribute("style", "text-align:center; height:100vh; display: flex; font-size: 3em; height: 100vh; flex-direction: column; align-items: center; justify-content: space-around;"); 
  
}
    else
      {
      reject("Todays date is not Aug 15")
      }
   
  });
  
console.log("-----Please update the Date field value in JS for Resolved/Reject message---");

  Date = "Aug_15";
  getMessage(Date)
  .then(msg => console.log("Resolved message: "+msg))
  .catch(errMsg => console.log("Reject message: "+errMsg))
  
  
  
  