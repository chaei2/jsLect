var button = $('.tab-button');
var content = $('.tab-content');

// for (let i = 0; i < button.length; i++) {
//   button.eq(i).on('click', function () {
//     tabs(i);
//   });
// }

function tabs(i) {
  button.removeClass('orange');
  content.removeClass('show');
  button.eq(i).addClass('orange');
  content.eq(i).addClass('show');
}

// for를 계속 사용하면 성능이 좀 안 좋아서, 성능 차이로 아래가 더 좋음
// 하지만 이거보다 더 줄일 수 있음 그건 바로 데이터셋을 사용하는 거임.
// data-이름을 쓰는게 좋음
$('.list').on('click', function (e) {
  // 이 긴 문장이
  // if (e.target == document.querySelectorAll('.tab-button')[0]) {
  //   tabs(0);
  // }

  // if (e.target == document.querySelectorAll('.tab-button')[1]) {
  //   tabs(1);
  // }

  // if (e.target == document.querySelectorAll('.tab-button')[2]) {
  //   tabs(2);
  // }

  // 이걸로 줄여짐. 이래서 dataset을 써야함
  // 다만, dataset은 문자열만 가능해서, 쓰고 싶으면
  // tabs(Number(e.target.dataset.button));을 쓰면됨.
  tabs(e.target.dataset.button);
});
