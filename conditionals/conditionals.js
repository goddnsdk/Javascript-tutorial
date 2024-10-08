/**
 * 제어문(control flow)
 * 1. 조건문
 * 2. 반복문
 */


// var a = 2;

// 1. if...else
// else : 조건문 if에 포함되지 않는 모든 상황
// if (a > 2) {
//     console.log('a > 2');  
// } else {
//     console.log('a <= 2');
// }

// 2. if...else if... else
// var a = 2;

// if (a > 2) {
//     console.log('a > 2');  
// } 
// else if (a == 2) {
//     console.log('a = 2'); 
// }
// else if (a == 0) {
//     console.log('a = 0');
// }
// else if (a < 2) {
//     console.log('a < 2');
// }

// 순차적으로 조건식을 따른다.
// true인 조건식이 두 개일때 첫 번째 조건식을 따른다는 뜻.
// 뒤에 있는 조건식 따르지 x

// 3. switch
var mbti = 'INFP';
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;
    default: val = '유효한 값이 아닙니다.';
    // default : 매치되는 값이 없을 때 실행되는 값
}

console.log(val);

// break 조건문을 시행하지 않으면 끝까지 로직을 실행한다.
