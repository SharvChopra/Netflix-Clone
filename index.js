const replySection = document.querySelectorAll('.question-section-1-content');

const plusBtn_1 = document.querySelector('.section-1')
const plusBtn_2 = document.querySelector('.section-2')
const plusBtn_3 = document.querySelector('.section-3')
const plusBtn_4 = document.querySelector('.section-4')
const plusBtn_5 = document.querySelector('.section-5')
const plusBtn_6= document.querySelector('.section-6')

const quesDisplay_1 = document.querySelector('.question-section-1-content');
const quesDisplay_2 = document.querySelector('.question-section-2-content');
const quesDisplay_3 = document.querySelector('.question-section-3-content');
const quesDisplay_4 = document.querySelector('.question-section-4-content');
const quesDisplay_5 = document.querySelector('.question-section-5-content');
const quesDisplay_6 = document.querySelector('.question-section-6-content');

const questionSection = document.querySelector('.question-section-form')
const inputLabel = document.querySelector('.content-label');

const conditionBtn1 = function(){
    if(plusBtn_1.classList.contains('section-anim')){
        plusBtn_1.classList.remove('section-anim');
        quesDisplay_1.classList.add('section-hide')
        questionSection.style.height = "30vh"
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_1.classList.add('section-anim');
        quesDisplay_1.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }
}
const conditionBtn2 = function(){
    if(plusBtn_2.classList.contains('section-anim')){
        plusBtn_2.classList.remove('section-anim');
        quesDisplay_2.classList.add('section-hide')
        questionSection.style.height = "30vh"
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_2.classList.add('section-anim');
        quesDisplay_2.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }

}
const conditionBtn3 = function(){
    if(plusBtn_3.classList.contains('section-anim')){
        plusBtn_3.classList.remove('section-anim');
        quesDisplay_3.classList.add('section-hide');
        questionSection.style.height = "30vh";
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_3.classList.add('section-anim');
        quesDisplay_3.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }
}
const conditionBtn4 = function(){
    if(plusBtn_4.classList.contains('section-anim')){
        plusBtn_4.classList.remove('section-anim');
        quesDisplay_4.classList.add('section-hide')
        questionSection.style.height = "30vh";
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_4.classList.add('section-anim');
        quesDisplay_4.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }
}
const conditionBtn5 = function(){
    if(plusBtn_5.classList.contains('section-anim')){
        plusBtn_5.classList.remove('section-anim');
        quesDisplay_5.classList.add('section-hide');
        questionSection.style.height = "30vh";
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_5.classList.add('section-anim');
        quesDisplay_5.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }
}
const conditionBtn6 = function(){
    if(plusBtn_6.classList.contains('section-anim')){
        plusBtn_6.classList.remove('section-anim');
        quesDisplay_6.classList.add('section-hide')
        questionSection.style.height = "30vh";
        inputLabel.classList.remove('label-anim-3')
    }else{
        plusBtn_6.classList.add('section-anim');
        quesDisplay_6.classList.remove('section-hide')
        questionSection.style.height = "100vh";
        inputLabel.classList.add('label-anim-3')
    }

}

plusBtn_1.addEventListener('click',conditionBtn1);
plusBtn_2.addEventListener('click',conditionBtn2);
plusBtn_3.addEventListener('click',conditionBtn3);
plusBtn_4.addEventListener('click',conditionBtn4);
plusBtn_5.addEventListener('click',conditionBtn5);
plusBtn_6.addEventListener('click',conditionBtn6);

