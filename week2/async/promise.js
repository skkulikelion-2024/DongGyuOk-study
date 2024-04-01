'use strict';

//Promise is a JavaScript object for asynchronous operation. (콜백 대신에 쓸 수 있는 비동기를 위한 것 )
//state: pending -> fulfilled or rejected
//Producer(원하는 기능을 수행해서 데이터를 만들어낸다.) vs Consumer(원하는 데이터를 소비한다.)

//1. Producer
//when new Promise is created, the executor runs automatically (중요)
const promise = new Promise((resolve, reject) => {  //resolve(마지막에 최종 데이터 전달), reject(중간에 문제가 생기면 전달)
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=> {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

//2. Consumers: then, catch, finally
promise // then ~된다면 (promise가 정상적으로 잘 수행이 된다면)
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { //성공 실패와 상관없이 무조건 마지막에 수행된다.
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2) 
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried`), 1000);
});

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);