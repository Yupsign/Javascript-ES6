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
