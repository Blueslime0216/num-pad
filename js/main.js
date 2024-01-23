// ========================================
// 메인 코드
// ========================================


let set = ["<span class='pass'>","</span>",rn(),rn(),rn(),rn(),rn(),rn()];
let nowStep = 1;
const num = document.getElementById('num');    

// 사이트가 열리면 랜덤한 6자리숫자를 띄운다
window.onload = function() {
    num.innerHTML = set.join('');
}

function reset() {
    set = ["<span class='pass'>","</span>",rn(),rn(),rn(),rn(),rn(),rn()];
    nowStep = 1;
    num.innerHTML = set.join('');
}

// 0~9까지 랜덤한 숫자를 반환하는 함수
function rn() {
    return Math.floor(Math.random() * 10);
}

function test(inputNumber){
    if (set[nowStep + 1] == inputNumber){
        //set[nowStep]와 set[nowStep + 1] 위치 변경
        let temp = set[nowStep];
        set[nowStep] = set[nowStep + 1];
        set[nowStep + 1] = temp;
        
        num.innerHTML = set.join('');
        // inputEffect();
        if(nowStep == 6){
            new Audio('res/clear.wav').play();
            document.body.style.backgroundColor = 'hsl(0, 0%, 10%)';
            // 0.5초 후 리셋
            setTimeout(function() {
                document.body.style.backgroundColor = 'hsl(0, 0%, 5%)';
                reset();
            }, 100);
            // 흔들림 효과
            document.getElementById('clear').classList.add('clear');
            setTimeout(function() {
                document.getElementById('clear').classList.remove('clear');
            }, 1000);
        } else {
            new Audio('res/keydown.wav').play();
            nowStep++;
        }
    } else {
        new Audio('res/keydown_wrong.wav').play();
    }
}
