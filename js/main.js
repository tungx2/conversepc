$(document).ready(function(){

    const searchEl= document.getElementById('searchicon');
    let searchboxEl=document.getElementById('searchbox');
    let jjim= $('.product .fa-regular');
    const familyEl= document.querySelector('#familysite');
    const familySubEl= document.querySelector('#family_sub');
    const timesEl = document.querySelector('i.fa-times');
    const spyEls = document.querySelectorAll('article.scroll-spy');

    searchEl.addEventListener('click',function(){
        // alert('searchicon')
        searchboxEl.focus();

    });

    jjim.click(function(){
        if($(this).hasClass('fa-regular')===true){
            $(this).attr('class','fas fa-heart').css({'color':'#e41f1f'});
        }else{
            $(this).attr('class','fa-regular fa-heart').css({'color':'#1c1c1e'});
        }
    });

    familyEl.addEventListener('click',function(){
        if(familySubEl.hasAttribute('class')==false){
            familySubEl.setAttribute('class','show')
        }else{
            familySubEl.removeAttribute('class')
        }
    });

    timesEl.addEventListener('click',function(){
        badgeEl.style.right='-100px'
        badgeEl.style.dispalay='none'
    });

    spyEls.forEach(function(spyEl){
        new ScrollMagic
        .Scene({ //감시할 장면 추가
            triggerElement:spyEl, //보여질 여부를 감시할 요소를 지정
            triggerHook:0.8 //화면의 80%지점에서 동작
        })
        .setClassToggle(spyEl,'show') //show 클랙스를 적용하거나 해제하기
        .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다. 
    });
})