// var tabmenuLi = document.querySelectorAll('.cs_board .tabmenu li')
// var contentDiv = document.querySelectorAll('.cs_board .contents > div')
// for (let i=0; i<2; i++) {
//     tabmenuLi[i].addEventListener('click', function(){
//         for (let j=0; j<2; j++) {
//             tabmenuLi[j].classList.remove('active')
//             contentDiv[j].classList.remove('active')
//         }
//         this.classList.add('active')
//         contentDiv[i].classList.add('active')
//     })
// }
$('.cs_board .tabmenu li').on('click', function(){
    var num = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('.contents > div').eq(num).addClass('active').siblings().removeClass('active')
})


// var elDt = document.querySelectorAll('.article6 dt')
// var elIcon = document.querySelectorAll('.article6 i')
// for (let i=0; i<4; i++) {
//     elDt[i].addEventListener('click', function(){
//         for (let j=0; j<4; j++) {
//             if (j!==i) {
//                 elDt[j].classList.remove('on')
//                 elIcon[j].classList.remove('fa-minus')
//                 elIcon[j].classList.add('fa-plus')
//             }
//         }
//         if ( elDt[i].classList.contains('on') ) {
//             elDt[i].classList.remove('on')
//             elIcon[i].classList.add('fa-plus')
//             elIcon[i].classList.remove('fa-minus')
//         } else {
//             elDt[i].classList.add('on')
//             elIcon[i].classList.remove('fa-plus')
//             elIcon[i].classList.add('fa-minus')
//         }
//     })
// }


// a태그 클릭했을 때 링크주소로 이동하는 기본이벤트를 막아줌
// var elArticle6A = document.querySelectorAll('.article6 a')
// for (let i=0; i<4; i++) {
//     elArticle6A[i].addEventListener('click', function(e){
//         e.preventDefault()
//     })
// }
$('.article6 dt').eq(0).next().slideDown()
$('.article6 dt').on('click', function(){
    // $(this).toggleClass('on')
    $(this).next().slideToggle(500)
    if ( $(this).find('i').hasClass('fa-plus') ) {
        $(this).find('i').addClass('fa-minus').removeClass('fa-plus')
    } else {
        $(this).find('i').addClass('fa-plus').removeClass('fa-minus')
    }
    // $(this).siblings('dt').removeClass('on')
    $(this).siblings('dt').next().slideUp(500)
    $(this).siblings('dt').find('i').removeClass('fa-minus').addClass('fa-plus')
})

$('.article6 dt a').on('click', function(e){
    e.preventDefault()
    // e.stopPropagation()
    
})

//슬릭 슬라이더 플러그인 연결하기 
$('.slideInner').slick({
    autoplay : true,        //자동재생
    autoplaySpeed : 3000,   //머무리는 시간(ms)
    dots : true,            //번호버튼
    pauseOnHover : false,   //마우스오버시 멈춤 여부
    arrow : false,         // 좌우  화살표
    prevArrow : '<button><i class="fas fa-angle-left"></i></button>',
    nextArrow : '<button><i class="fas fa-angle-right"></i></button>'

    
    // speed : 2000,            //사라지는 시간
    // slidesToShow : 1,       //무대에 보여지는 슬라이드 수
    // slidesToScroll : 1,     //무대에서 사라지는 슬라이드 수
    // fade : false,            //fadeIn, fadeOut 효과(true로 설정했을때) 생략가능 
})