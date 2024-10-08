/**
 * 배열(Array)\
 * - 복수의 데이터를 순서대로 담고 있는 자료구조
 * - 배열의 순서는 1이 아니라 0부터 시작
 * - 배열은 객체 !
 * - 키 => 인덱스, 값 => 요소
 */

// var mbti = ['INFP', 'ENFJ', 'INTJ'];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = 'ESFP';
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = 'ISTJ';
// console.log(mbti[2]);

// push()
// 객체 뒤에 더 추가하는 것
// var mbti = ['INFP', 'ENFJ', 'INTJ'];
// console.log(mbti.push('ESFT', 'ISTJ'));

// 스프레드 문법
// 원래 있던 거 훼손하지 않고 추가하는 방법
// var newMbti = [...mbti, 'ESFT', 'ISTJ'];
// console.log(mbti);
// console.log(newMbti);

// pop()
// 원본에서 마지막 것을 꺼낸 다음에 
// 꺼낸 결과물을 다시 원본에다가 대입하여 
// 원본 수정하는 문법
// var mbti = ['INFP', 'ENFJ', 'INTJ'];
// console.log(mbti.pop());
// console.log(mbti);

// unshift()
// console.log(mbti.unshift('ESFP', 'ISTJ'));
// console.log(mbti);


// 스프레드문법
// var newMbti = ['ESFP', 'ISTJ', ...mbti]
// console.log(mbti);
// console.log(newMbti);

// shift()
// 원본에서 첫번째 것을 꺼낸 다음에 
// 꺼낸 결과물을 다시 원본에다가 대입하여 
// 원본 수정하는 문법
// console.log(mbti.shift());
// console.log(mbti);


var mbti = ['INFP', 'ENFJ', 'INTJ'];

//slice()
// console.log(mbti.slice(0, 2));
// console.log(mbti.slice());
// console.log(mbti.slice(-1));
// 끝에서부터 세아리는 경우 마이너스 붙이깅
 
// join()
// 문자로 출력
// console.log(mbti.join());
// console.log(mbti.join('-'));
// console.log(mbti.join(' '));

// sort()
// 알파벳 순서대로 정렬
// console.log(mbti.sort());

// reverse()
// 반대로 정렬
console.log(mbti.sort().reverse());
