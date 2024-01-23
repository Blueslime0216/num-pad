// ========================================
// 키를 눌렀을 때 해당하는 버튼이 눌린 것처럼 효과를 주는 스크립트
// ========================================



// 버튼 요소들을 가져옵니다.
const buttons = document.querySelectorAll('button');

// 키가 눌렸을 때 해당하는 요소를 클릭하고 있는 것과 같은 효과 주기
document.addEventListener('keydown', function(e) {
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
});
document.addEventListener('keyup', function(e) {
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
    if(e.key === whatKey) {
        test(whatKey);
        buttons[whatBtn].classList.add('active');
    }
}
function addKeyup(e, whatKey, whatBtn) {
    if(e.key === whatKey) {
        buttons[whatBtn].classList.remove('active');
    }
}