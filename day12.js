try {
    const a=2+2;
    throw("Error");
} catch (error) {
    console.log(error);
    

}
function addtwonums(a,b){
   try {
    if(b===0){
        throw("cant divide by zero");
    }
    else{
        return a/b;
    }

    
   } catch (error) {
    console.log(error)
   }
}
addtwonums(3,0);
// Task5
function validates(a){
try{
    if(a===""){
        throw("cant be empty");
    }
}catch(error){
    console.log(error)
}
}
validates("");

// Create a custom error class that extends the built-in Error class
class ApiError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  // Function that throws an instance of the custom error
  function fetchData(url) {
    if (url === 'https://api.example.com/error') {
      throw new ApiError('API returned an error', 500);
    } else {
      return 'Data from ' + url;
    }
  }
  
  // Try-catch block to handle the custom error
  try {
    const data = fetchData('https://api.example.com/error');
    console.log(data);
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`API Error: ${error.message} (Status Code: ${error.statusCode})`);
    } else {
      console.error(`Unknown Error: ${error.message}`);
    }
  }


  const randomPromise = new Promise((resolve, reject) => {
    const randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
      resolve('Promise resolved!');
    } else {
      reject(new Error('Promise rejected!'));
    }
  });
  
  // Use.catch() to handle the rejection
  randomPromise
   .then((result) => {
      console.log(result);
    })
   .catch((error) => {
      console.error(`Error: ${error.message}`);
    });

    // Create a promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
    const randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
      resolve('Promise resolved!');
    } else {
      reject(new Error('Promise rejected!'));
    }
  });
  
  // Use try-catch within an async function to handle errors
  async function handlePromise() {
    try {
      const result = await randomPromise;
      console.log(result);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  handlePromise();
