$('#login-btn').on('click', function () {
  $('.black-bg').toggle();
});
$('#close').on('click', function () {
  $('.black-bg').toggle();
});

// $('.black-bg').on('click', function (e) {
//   if (e.target != e.currentTarget) {
//     e.preventDefault();
//   } else {
//     $('.black-bg').toggle();
//   }
// });

// this를 써도 잘 됨
$('.black-bg').on('click', function (e) {
  if (e.target != this) {
    e.preventDefault();
  } else {
    $('.black-bg').toggle();
  }
});

// jQruery 문법으로 하면
// 혹은 this 부분에 $('.black-bg')를 넣어도 무방함
$('.black-bg').on('click', function (e) {
  if ($(e.target).is(this)) {
    e.preventDefault();
  } else {
    $('.black-bg').toggle();
  }
});

// jQeruy로 할와 자바랑 값이 다르다.
console.log($('body'));
console.log(document.querySelector('body'));

// jQeruy로 찾은 애는 ==같은 비교가 불가함 -> .is가능.

// 즉, jQeruy랑 자바스크립이랑 비교하지 말 것.
