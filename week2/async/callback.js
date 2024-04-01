 'use strict';

 /*
 JavaScript is synchronous.(동기적이다.)
 Execute the code block by order after hoisting. (hoisting 된 이후부터 순서대로 실행된다.)
 hoisting : var, funciton declaration(선언들이 자동으로 위로 올라가는 것)
 */

 //async(<->sync)
console.log('1'); 
/*
setTimeout(function() {             //Callback
    console.log('22');
}, 1000);
*/
setTimeout(() => console.log('22'),1000) //arrow function
console.log('2');
console.log('3'); 

//function name([param[, param,[..., param]]]) { [statements] }

/*
const add = (a, b) => {
    return a + b;
};

console.log(add(3, 5)); // 출력: 8
상수에 함수를 할당하는 것은 함수를 재할당할 수 없게 하여 코드를 안정화시키고, 함수의 의도를 명확히 드러내기 위한 것입니다. 그러나 주의할 점은 함수 내부에서 변수를 변경하는 것은 여전히 가능하므로 완전한 불변성을 보장하지는 않습니다.
*/

//함수의 선언이기에 hoisting 됨.
//Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout); //timeout 가능하게
}

printWithDelay(()=> console.log('async callback'),2000);
// console.log가 print에 해당
// setTImeout 때문에 print 부분에 문자열이 아닌 arrow function 이용??

//Callback Hell example
class UserStroage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }

        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const UserStroage = new UserStroage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStroage.loginUser(
    id,
    password,
    user => {
        UserStroage.getRoles(
            user, 
            userWithRole => {
                alrert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

/* 콜백 지옥 문제점
- 가독성 떨어짐
- 디버깅 어려움
- 유지, 보수 어렵다
*/