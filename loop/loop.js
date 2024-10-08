// 반복문(loop)

// 1. for

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (var i=0; i<10; i++) {
//     for (var j=0; j<10; j++) {
//         console.log(`${i}-${j}`);
//     }
// }

// 2. while

// var flag = 10;

// while(flag > 0) {
//     console.log(flag);
//     flag--;
// }
// while문 사용할 때는 조건식이 무한히 참으로 
// 평가되는 상황을 막을 수 있는 code block이 무조건 있어야한다.

// 3. do...while

var flag = 10;

do {
    console.log(flag); 
    flag--;
} while (flag < 0);

// >> 일단 (조건과 상관없이) 무조건 do를 실행, 그 다음에 whild문에 따라서,
