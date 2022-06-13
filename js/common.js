// 선택자.classList.contains('class명') : class 유무 판단해서 있으면 true, 없으면 false
// 선택자.classList.add('class명') : class 추가
// 선택자.classList.remove('class명') : class 삭제
// var fam = document.querySelector('.fam')
// fam.addEventListener('click', function(){
//     if ( this.classList.contains('on') ) {
//         this.classList.remove('on')
//     } else {
//         this.classList.add('on')
//     }
// })


// $('선택자').hasClass('class명') 
// $('선택자').addClass('class명')
// $('선택자').removeClass('class명')
$('#footer .fam').on('click', function(){
    // if ( $(this).hasClass('on') ) {
    //     $(this).removeClass('on')
    // } else {
    //     $(this).addClass('on')
    // }
    // $(this).toggleClass('on')
    $(this).find('ul').slideToggle(500)
})

// 1단계 메뉴에 마우스오버 이벤트 발생시 2단계 메뉴 표시하기
// 1단계 메뉴에 마우스아웃 이벤트 발생시 2단계 메뉴 숨기기
// var elLi = document.querySelectorAll('#header #nav .depth1 > li')
// for (let i=0; i<5; i++) {
//     elLi[i].addEventListener('mouseover', function(){
//         this.classList.add('on')
//     })
//     elLi[i].addEventListener('mouseout', function(){
//         this.classList.remove('on')
//     })
// }

$('#header #nav .depth1 > li').on('mouseenter', function(){
    // $(this).addClass('on')
    $(this).find('.depth2').stop().slideDown(200)
})
$('#header #nav .depth1 > li').on('mouseleave', function(){
    // $(this).removeClass('on')
    $(this).find('.depth2').stop().slideUp(200)
})