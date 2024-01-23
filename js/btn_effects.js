// ========================================
// 키를 눌렀을 때 해당하는 버튼이 눌린 것처럼 효과를 주는 스크립트
// ========================================


// 요소들 가져오기
const buttons = document.querySelectorAll('button');
const pad = document.querySelectorAll('.pad');
let keyState = {}; // 키의 상태를 기록하는 객체

document.addEventListener('keydown', function(e) {
    if (!keyState[e.key]) { // 키가 처음 눌렸을 때만 동작
        keyState[e.key] = true;
        addKeydown(e, '7', 0);
        addKeydown(e, '8', 1);
        addKeydown(e, '9', 2);
        addKeydown(e, '4', 3);
        addKeydown(e, '5', 4);
        addKeydown(e, '6', 5);
        addKeydown(e, '1', 6);
        addKeydown(e, '2', 7);
        addKeydown(e, '3', 8);
        addKeydown(e, '0', 9);
        addKeydown(e, '.', 10);
    }
});

document.addEventListener('keyup', function(e) {
    keyState[e.key] = false; // 키를 떼었을 때 상태 초기화
    addKeyup(e, '7', 0);
    addKeyup(e, '8', 1);
    addKeyup(e, '9', 2);
    addKeyup(e, '4', 3);
    addKeyup(e, '5', 4);
    addKeyup(e, '6', 5);
    addKeyup(e, '1', 6);
    addKeyup(e, '2', 7);
    addKeyup(e, '3', 8);
    addKeyup(e, '0', 9);
    addKeyup(e, '.', 10);
});

function addKeydown(e, whatKey, whatBtn) {
    if (keyState[whatKey]) { // 해당 키가 눌린 상태일 때만 동작
        buttons[whatBtn].classList.add('active');
        pad[0].classList.add('keydown');
        test(whatKey);
    }
}

function addKeyup(e, whatKey, whatBtn) {
    if (!keyState[whatKey]) { // 해당 키가 떼어진 상태일 때만 동작
        buttons[whatBtn].classList.remove('active');
        pad[0].classList.remove('keydown');
    }
}
