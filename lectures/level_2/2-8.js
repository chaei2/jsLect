var button = $('.tab-button');
var content = $('.tab-content');

// button.eq(0).on('click', function () {
//   // console.log('클릭');
//   button.removeClass('orange');
//   button.eq(0).addClass('orange');

//   content.removeClass('show');
//   content.eq(0).addClass('show');
// });

// button.eq(1).on('click', function () {
//   // console.log('클릭');
//   button.removeClass('orange');
//   button.eq(1).addClass('orange');

//   content.removeClass('show');
//   content.eq(1).addClass('show');
// });

// button.eq(2).on('click', function () {
//   // console.log('클릭');
//   button.removeClass('orange');
//   button.eq(2).addClass('orange');

//   content.removeClass('show');
//   content.eq(2).addClass('show');
// });

for (let num = 0; num < button.length; num++) {
  button.eq(num).on('click', function () {
    // console.log('클릭');
    button.removeClass('orange');
    button.eq(num).addClass('orange');

    content.removeClass('show');
    content.eq(num).addClass('show');
  });
}
