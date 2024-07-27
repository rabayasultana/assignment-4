// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketNumber) {
  const ticketPrice = ticketNumber * 120;
  const gatekeeperCost = 500;
  const staffLunch = 50 * 8;
  if (ticketNumber < 0) {
    return "Invalid Number";
  } 
  else {
    const result = ticketPrice - (gatekeeperCost + staffLunch);
    return result;
  }
}
// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(0));
// console.log(calculateMoney(-10));

// Problem-02: Good Name , Bad Name
function checkName(strings) {
  let size = strings.length - 1;

  if (typeof strings === "string") {
    let name = parseInt(strings);
    if (isNaN(name)) {
      if (strings[size] === "A" ||
        strings[size] === "a" ||
        strings[size] === "E" ||
        strings[size] === "e" ||
        strings[size] === "I" ||
        strings[size] === "i" ||
        strings[size] === "O" ||
        strings[size] === "o" ||
        strings[size] === "U" ||
        strings[size] === "u" ||
        strings[size] === "Y" ||
        strings[size] === "y" ||
        strings[size] === "W" ||
        strings[size] === "w") {
        return "Good Name";
      }
       else return "Bad Name";
    }
    else return "invalid";
  }
  else return "invalid";
}

// console.log(checkName("Jhankar"));
// console.log(checkName("Tonmoy"));
// console.log(checkName("RoiDE"));
// console.log(checkName(123));
// console.log(checkName(["Rashed"]));
// console.log(checkName("123"));

// Problem 03 : Virus in my Array

function deleteInvalids(arr){
  if (Array.isArray(arr)) {
   let newArray = [];
   
   for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && !isNaN(arr[i])){
      newArray.push(arr[i]);
    }
    
   }
   return newArray;
  }
  else 
    return "Invalid Array";
}

// let array = [ NaN, 1,12,0 ,-1 , undefined ];
// let array1 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// let array2 = ["1" , {num:2} , NaN ];
// let array3 = [ 1 , 2 , -3 ];
// let array4 = {num: [ 1 , 2 , 3 ]};

// console.log(deleteInvalids(array));
// console.log(deleteInvalids(array1));
// console.log(deleteInvalids(array2));
// console.log(deleteInvalids(array3));
// console.log(deleteInvalids(array4));

// Problem 04 : Make A Great Password

function password(obj){
  let keys = Object.keys(obj);
  let year = (obj.birthYear).toString();
  let size = year.length;
  if (keys.length < 3 || size != 4){
    return "invalid";
  }
  else {
    let siteArray = obj.siteName.split('');
    siteArray[0] = siteArray[0].toUpperCase();
    obj.siteName = siteArray.join('');
    let result = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
    return result;
  }
}

// const about = {
//   name: "kolimuddin" ,
//   birthYear: 1999 ,
//   siteName: "google"
// }
// const about1 = {
//    name: "rahat",
//    birthYear: 2002,
//    siteName: "facebook" 
//   }

// const about2 = {
//   name: "toky", 
//   birthYear: 200, 
//   siteName: "Facebook" 
// }
// const about3 = { 
//   name: "maisha", 
//   birthYear: 2002 
// }

// console.log(password(about));
// console.log(password(about1));
// console.log(password(about2));
// console.log(password(about3));

// Problem 05 : Monthly Savings of a Freelancer

function monthlySavings(arr , livingCost) {
  if(Array.isArray(arr) && typeof livingCost === 'number' && !isNaN(livingCost)){
    let income = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]>=3000){
        arr[i] = arr[i] - arr[i] * 0.20;
      }
      income = income + arr[i];
    }
    let savings = income - livingCost;
    if(savings >= 0){
      return savings;
    }
    else return "earn more";
  }
  else return "invalid input";
  }
  // let payments = [1000 , 2000 , 3000];
  // let payments1 = [1000 , 2000 , 2500];
  // let payments2 = [900 , 2700 , 3400];
  // let payments3 = 100;
  // console.log(monthlySavings(payments , 5400));
  // console.log(monthlySavings(payments1 , 5000));
  // console.log(monthlySavings(payments2 , 10000));
  // console.log(monthlySavings(payments2 , [ 900 , 2700 , 3400]));