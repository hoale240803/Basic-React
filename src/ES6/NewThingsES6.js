import React from "react";
/*===== REFERENCE: http://es6-features.org =====*/
/*===== LANGUAGE CODE: http://www.lingoes.net/en/translator/langcode.htm =====*/
/*===== CURRENCY CODE: https://www.xe.com/iso4217.php =====*/
/*===== ES6 DEFAULT PARAMETERS =====*/
/*===== Gán mặc định tại vị trí khai báo =====*/
function multiply(a, b = 1) {
  return a * b;
}

/*===== Gán bên trong function =====*/
function Welcome(name) {
  //   const personName = name ? name : "Guess";
  console.log("Value of PersonName:::: ", "sdfsd" || "guess");
  const temp = (name = name || "Guess");
  console.log(`welcome ${temp} to my world `);
}

/*===== 2.  SPREAD SYNTAX =====*/
/*===== Spread syntax với Array =====*/
function SpreadSyntax() {
  const arrOne = [1, 2, 3];
  const b = [...arrOne, 4, 5];
  console.log("spread syntax>>>>>>>>", b);
}
/*===== Spread syntax với Object =====*/
function SpreadSyntaxObject() {
  const spreadObject = {
    id: "01",
    name: "hoa",
    date: "12/12/2020",
    address: {
      city: "da nang",
      district: "ngu hanh son",
      street: "191 nguyen duy trinh",
    },
    education: {
      frontEnd: {
        react: {
          basic: {
            es6: {
              defaultParameters: "khong truyen doi so van chay",
              spreadSyntax: "viet ... cho no gon",
            },
          },
        },
      },
    },
  };
  const spreadObjectNew = {
    ...spreadObject,
    name: "trung",
  };
  const spreadObjectNewTwo = {
    ...spreadObject,
    address: {
      ...spreadObject.address,
      city: "hue",
    },
  };
  const spreadObjectNewThree = {
    ...spreadObject,
    education: {
      ...spreadObject.education.frontEnd.react.basic.es6,
      defaultParameters: "cho phep khai bao gia tri mac dinh",
    },
  };
  console.log("Spread syntax với Object One>>>>>>>>", spreadObjectNew);
  console.log("Spread syntax với Object Two>>>>>>>>", spreadObjectNewTwo);
  console.log("Spread syntax với Object Three>>>>>>>>", spreadObjectNewThree);
}
/*=====3. Rest Parameter =====*/
function RestParameter(param1, param2, ...otherParam) {
  console.log("param1>>>>>", param1);
  console.log("param2>>>>>", param2);
  console.log("otherParam>>>>>>", otherParam);
}

/*===== 4.    Destructuring =====*/
function DestructuringWithArray() {
  const array = [1, 2, 3];
  const [a, b] = array;
  console.log(a); /* output: 1 */
  console.log(b); /* output: 2 */
  console.log(array); /* output: [1, 2, 3] */
}
function DestructuringWithObject() {
  const myObject = {
    name: "Dương Minh Trí",
    age: 4,
  };
  const { name, age } = myObject;
  console.log(name); /* output: "Dương Minh Trí" */
  console.log(age); /* output: 4 */
  console.log(myObject); /* output: {name: "Dương Minh Trí", age: 4} */
}
/*===== 5.    Arrow function  =====*/
/*===== cơ bản về arrow function =====*/
function ArrowFunction() {
  var member = (name, age) => {
    console.log(name, age);
  };
  member("Dương Minh Trí", 4); /* output: "Dương Minh Trí" 4 */
}
/*===== arrow function return =====*/
var ArrowFunctionHaveReturn = (name, age) => {
  name = "hoa";
  return name + ", minh chi co: " + age + " tuoi";
};

/*===== 6. CLASSES =====*/

class Person {
  constructor() {
    this.name = "hoa";
    this.age = 2;
  }
  getNamePerson() {
    return this.name;
  }
}
class Student extends Person {
  constructor(name, age) {
    super(name, age);
    this.subject = "math";
    this.name = `name: ${this.name},\n age: ${this.age} \n subject:${this.subject}`;
  }
  getInfo() {
    return this.name;
  }
}
/*===== 7. Promise  =====*/

function PlusTwoPositiveNumber(num1, num2) {
  var result = new Promise(function (resolve, reject) {
    if (num1 >= 0 && num2 >= 0) {
      resolve({
        name: "phep cong",
        total: num1 + num2,
      });
    } else {
      reject("not positive numbers");
    }
  });
  return result;
}
function successHandle(result) {
  console.log(result);
  console.log("total of two positive number>>>>", result.name + result.total);
}
function errorHandle(err) {
  console.log(err);
}
/*=====*** không phải cái mới của es6: Understanding Callback =====*/
function notifyAll(fnSms, fnEmail) {
  setTimeout(function () {
    console.log("starting notification process");
    fnSms();
    fnEmail();
  }, 2000);
}

/*===== Currency Formatting =====*/
function CurrencyFormatting() {
  var l10nUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var l10nGBP = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  var l10nVnd = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  // l10nUSD.format(100200300.4) === "$100,200,300.40";
  // l10nGBP.format(100200300.4) === "£100,200,300.40";
  // l10nVnd.format(100200300.4) === "100.200.300,40 €";
  console.log("viet nam dong>>>>", l10nVnd.format(100200300.4));
}
function NewThingsES6() {
  /*===== 1. ES6 DEFAULT PARAMETERS =====*/
  /*===== Gán mặc định tại vị trí khai báo =====*/
  console.log(multiply(5, 2)); /* ouput: 10 */
  console.log(multiply(5)); /* ouput: 5 nó sẽ lấy giá trị mặt định là 1*/
  /*===== Gán bên trong function =====*/
  console.log(" /*===== 1. ES6 DEFAULT PARAMETERS =====*/");
  Welcome(0);
  Welcome("Hoa Le");
  /*===== 2.  SPREAD SYNTAX =====*/
  console.log(" /*===== 2.  SPREAD SYNTAX =====*/");
  SpreadSyntax();
  SpreadSyntaxObject();
  /*=====3.     Rest Parameter =====*/
  console.log("/*=====3. Rest Parameter =====*/");
  RestParameter(1, 2, 3, 4, 5, 6, 7, 8, 9);

  /*===== 4.    Destructuring =====*/
  console.log("/*===== 4.    Destructuring =====*/");
  console.log(" Destructuring with array");
  DestructuringWithArray();
  console.log(" Destructuring with object");
  DestructuringWithObject();

  /*===== 5.    Arrow function  =====*/
  /*===== Arrow function basic =====*/
  console.log("/*===== 5.    Arrow function  =====*/");
  ArrowFunction();
  /*===== Arrow function have return =====*/
  console.log(ArrowFunctionHaveReturn("Hoa", 22));

  /*===== 6.    CLASS  =====*/
  console.log("/*===== 6. CLASSES =====*/");

  var person = new Person();
  console.log("get name of person>>>>", person.getNamePerson());
  var student = new Student();
  console.log("get info of student>>>>>>>", student.getInfo());

  console.log("/*===== 7. Promise  =====*/");
  PlusTwoPositiveNumber(2, -3).then(successHandle).catch(errorHandle);
  PlusTwoPositiveNumber(2, 3).then(successHandle).catch(errorHandle);

  notifyAll(
    function () {
      console.log("Sms send ..");
    },
    function () {
      console.log("email send ..");
    }
  );
  console.log("End of script"); //executes first or not blocked by others
  //executes last or blocked by other methods
  CurrencyFormatting();
  return (
    <div style={{ color: "red", fontSize: "24px" }}>
      Result diplay in console
    </div>
  );
}

export default NewThingsES6;
