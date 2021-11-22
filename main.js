// 초급 자바스크립트
/*--------------------------------------------------
// null = 존재하지 않는 값
let user = null;
// undefined = 할당되지 않은 값
let age;
console.log(age);
*/

/*--------------------------------------------------
// alert 알려줌
// prompt 입력 받음
// confirm 확인 받음
const name = prompt("이름을 입력하세요.");
const name = prompt("예약일을 입력하세요.", "defalt값");
alert(`환영합니다, ${name} 님`);
alert("환영합니다, " + name + "님");
const delete1 = confirm("정말 삭제 하시겠습니까?");
console.log(delete1)
단점 : 스크립트 일시정지, 스타일링 X

const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2;
console.log(result); // prompt는 문자형으로 받는다.
*/

/*--------------------------------------------------
// 증가 연산자 
let num1 = 10;
let result = ++num1;
console.log(result)

// 감소 연산자
let num2 = 10;
let result1 = --num2;
console.log(result1)

// 비교 연산자 (<, >, <=, >=, ==, !=)
const a = 1;
const b = '1';

console.log(a==b); // 동등 연산자
console.log(a===b); // 일치 연산자 type까지 비교 
console.log(10!=5);

// 조건문 : if문 / else문
const age = 28;
if(age > 28) {
  console.log('29세 이상입니다.');
} else if(age === 28) {
  console.log('얼릉 취업하자!');
} else {
  console.log('27세 이하입니다');
}

// switch문 : case가 다양할 경우 보다 간결하게 작성 가능.
switch(평가) {           if(평가 == A) {
  case A :                 //
    //                   } else if(평가 ==  B)
  case B :                 //
    //                   }
}

let fruit = prompt("무슨 과일을 사고싶나요?");
switch(fruit) {
  case '사과' :
    console.log("100원 입니다.");
    break;
  case '바나나' :
    console.log("400원 입니다.");
    break;
  case '포도' :
    console.log("600원 입니다.");
    break;
  case '파인애플' :
  case '수박' :
    console.log("1000원 입니다.");
    break;
  default :
  console.log('그런 과일은 없습니다.');
}

// 논리 연산자 (tip: 많은 조건을 걸때, 적은 확률부터 작성 = 코드 최적화)
|| (OR) 하나라도 ture면 true
&& (AND) 하나라도 false면 false
! (NOT) true면 false, false면 true
const name = "TOM";
const age = 28;
if(name === "TOM" && age === 28) {
  console.log("통과");
}  else{
  console.log("실패");
}

const age = prompt("나이를 입력하세요.");
const isAdult = age > 19;
if(isAdult) {
  console.log("환영합니다");
} else {
  console.log("돌아가세요");
}

const gender = 'M';
const name = 'Jane';
const isAdult = true;
//if(gender === 'M' && name === 'Mike' || isAdult) {
if(gender === 'M' && (name === 'Mike' || isAdult)) {
  console.log('통과')
} else {
  console.log('실패')
}
*/

/*
// for문 
for(let i = 0; i < 10; i++) {
  console.log(i)
}

// while문
let i = 0;
while(i<10) {
  console.log(i);
  i++;
}

// do..while문
let i = 0;
do {
  console.log(i);
  i++;
} while(i<10)

// break : 멈추고 빠져나옴
while(true) {
  let answer = confirm("계속 할까요?");
  if(!answer) {
    break; 
  }
}

// continue : 멈추고 다음 반복으로 진행
for(let i = 0; i < 10; i++) {
  if(i%2){
    continue; //홀수일때만 continue문을 만나서 다시 처음 조건문으로 돌아감 
    continue; //홀수일때만 continue문을 만나서 다시 처음 조건문으로 돌아감 
  }
  console.log(i)
}

// function : 네이밍이 중요 (showError, getName, createUserData, cheakLogin 등)
function sayHello(name = 'friend') {
  let msg = `Hello, ${name}`; //'msg=지역 변수',  함수 밖으로 빼면 '전역 변수'
  console.log(msg)
}
sayHello();
sayHello('Mike');

function add(num1,num2) {
  return num1 + num2;
}
const result = add(4,5);
console.log(result)

// 화살표 함수 ES6 사용 
let add = (num1 , num2) => {
 return num1 + num2;
 console.log(add)
}
add(1+2);

// 객체 Object
const superman = {
  name : 'clark',
  age : 28,
}

superman.hairColor = 'blue';
superman.hobby = 'develope';
console.log(superman)

// 접근 : superman.name
// 추가 : superman.hairColor; = 'blue';
// 삭제 : delete superman.hairColor;
// 존재 여부 확인 : 'age'in superman; //true

function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'develope'
  };
}
const Mike = makeObject("Mike", 30);
console.log(Mike);
console.log('age'in Mike);

//
let boy = {
  name : 'Mike',
  showName : function(){
    console.log(this.name)
  }
};
let man = boy;
boy = null;
man.showName();

//
let boy = {
  name : 'Mike',
  sayThis : () => {  // 화살표 함수를 사용하면 boy가 아니라 window전역개체를 가르키게됨
    console.log(this);  
  }
};
boy.sayThis();

//
let days = ["mon", "tue", "wed"];
days.push("thu");
days.unshift("sun");

for (let index=0; index < days.length; index++) {
// for(let day of days) {
  console.log(day);
}
*/





//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 중급 자바스크립트

// 호이스팅 
 // Temporal Dead Zone      console.log(name) 
 // 함수 선언 및 할당        const name = 'Mike' 
 // 사용 가능               console.log(name) 


// 변수 생성과정
 // 1. 선언 단계
 // 2. 초기화 단계
 // 3. 할당 단계
 // (var : 선언+초기화 -> 할당) , (let : 선언 -> 초기화 -> 할당) , (const : 선언+초기화+할당)

// 스코프
 // var : 함수 스코프 (최근 사용 X)
 // let,const : 블록 스코프 (예측 가능범위를 넓이고 에러를 줄여줌으로서 최근 사용 O)

//생성자 함수 (첫 글자는 대문자로) : 비슷한 객체를 여러개 만들때 사용
/*function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 28);
let user3 = new User('Sara', 27);
*/
/*function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name);
  }
}
let user5 = new User('Kang', 28);
user5.sayName(); //Kang
*/
/*function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`가격은 ${price}원 입니다`);
  };
  // return this;
}

const item1 = new Item('인형' , 8000);
const item2 = Item('로보트' , 4500); // new를 주지 않으면 Item그 자체로 쓰이기 때문에 리턴하는 값이 없어 undefined가 나온다.
const item3 = new Item('드론' , 120000);

console.log(item1, item2, item3);
item3.showPrice();
*/

// 객체 메소드
/*let a = 'age'
const user = {
  name : 'Mike',
  [a] : 30 // 계산된 프로퍼티
}
*/
/*const user = {
  [1 + 4] : 5,
  ['안녕'+'하세요'] : 'Hello'
}
console.log(user);
*/

// Object.assign() : 객체 복제
/*const user = {
  name : 'Mike',
  age : 28
}
const newUser = Object.assign({},user);
newUser.name = 'Tom'
console.log(user); // 'Mike' (newUser != user)
console.log(newUser); // 'Tom' (newUser != user)
*/
/*
//Object.keys() : 키 배열 변환
const user = {
  name : 'Mike',
  age : 30, 
  gender : 'male',
}
Object.keys(user); // ['Mike', 30, 'male'] 키 배열 반환

//Object.valuse() : 값 배열 변환
const user1 = {
  name : 'Mike',
  age : 30, 
  gender : 'male',
}
Object.values(user1); // ['name', 'age', 'gender'] 값 배열 반환

//Object.entries() : 키/값 배열 변환
const user2 = {
  name : 'Mike',
  age : 30, 
  gender : 'male',
}
Object.entries(user2); // [['name','Mike'], ['age',30], ['gender','male']] 키/값 배열 반환

//Object.fromEntries() : 키/값 배열 -> 객체
const arr =
[
  ['name','Mike'],
  ['age',30],
  ['gender','male']
];
Object.fromEntries(arr); // {name:'Mike, age:30, gender:'male'} 객체로 반환
*/

/* 예제 1번
let n = 'name';
let a = 'age';

const user = {
  [n] : 'Mike',
  [a] : 30,
};
console.log(user);
*/
/* 예제 2번 
function makeObj(key, val){
  return {
    [key] : val,
  };
}
const obj = makeObj('성별', 'male');
console.log(obj);
*/
/* 예제 3번 (객체 복제)
const user = {
  name: 'Mike',
  age: 30,
};
const user2 = Object.assign({},user);
user2.name = 'Tom'
console.log(user2)
console.log(user)
*/
/* 예제 4번 (객체 -> 키/값 배열)
const user = {
  name: 'Mike',
  age: 30,
};
const result = Object.entries(user);
console.log(result);
*/
/* 예제 5번 (배열 -> 객체)
let arr = [
  ['mon', '월'],
  ['tue', '화'],
];
const result = Object.fromEntries(arr);
console.log(result);
*/

// Symbol (유일한 식별자)
/*const a = Symbol();
const b = Symbol();
console.log(a);
console.log(b);
console.log(a===b); //false
*/

// Symbol.for() : 전역 심볼
 // 1. 하나의 심볼만 보장받을 수 있음
 // 2. 없으면 만들고, 있으면 가져오기 때문
 // 3. Symbol 함수는 매번 다른 Symbol 값이 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
 // const id1 = Symbol.for('id');
 // const id2 = Symbol.for('id'); // id1 === id2  (true)

// ex)다른 개발자가 만들어 놓은 객체
/*const user = {
  name: 'Mike',
  age: 30,
};
// 나의 작업
// user.showName = function () {};
const showName = Symbol('show name');
user[showName] = function() {
  console.log(this.name);
};
user[showName]();
// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]},`);
}
*/

// toString() : 숫자 -> 문자열 /  10진수 -> 2,16진수 
/*let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(16)); // "a"
*/

/*
// Math method
  // 1. Math.ceil() : 올림
  let num = 1.1;
  Math.ceil(num); // 6

  // 2. Math.floor() : 내림
  let num2 = 1.8;
  Math.floor(num2); // 2

  // 3. Math.round() : 반올림
  let num3 = 5.1;
  let num4 = 5.7;
  Math.round(num3); // 5
  Math.round(num4); // 6
    //요구사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림)
    let userRate = 30.1234;
    Math.round(userRate*100)/100 // 1번 방법
    Number(userRate.toFixed(2)); // 2번 방법 (통계, 지표작업에 많이 사용) 단, 문자열을 반환하기 때문에 Number()를 이용해 숫자로 바꿔줌

  // 4. Math.random() : 0~1 사이 무작위 숫자 생성
    //요구사항 : 1 ~ 100 사이 임의의 숫자를 뽑아라
    const a = Math.floor(Math.random()*100)+1

  // 5. Math.max() : 최대값 / Math.min() : 최소값
  Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
  Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1
  
  // 6. Math.abs() : 절대값
  Math.abs(-1); // 1
  
  // 7. Math.pow(n,m) : n의 m승 값 (제곱)
  Math.pow(2, 10); // 1024

  // 8. Math.sqrt() : 제곱근
  Math.sqrt(16); // 4

  // 9. isNaN() : NaN인지 아닌지 판단함
  let x = Number('x'); //NaN
  NaN == NaN // false
  isNaN(x) // true
  isNaN(3) // false

  // 10. parseint() : 문자열을 숫자로 바꿔줌
  let margin = '10px';
  parseInt(margin); // 10
  Number(margin); // NaN
  let redColor = 'f3';
  parseInt(redColor); // NaN
  parseInt(redColor, 16); // 16진수 : 243

  // 11. parseFloat()
  let padding = '18.5%';
  parseFlnt(padding); // 18
  parseFloat(padding); // 18.5
*/




  


















