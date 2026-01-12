var button = $('.tab-button');
var content = $('.tab-content');

for (let i = 0; i < button.length; i++) {
  button.eq(i).on('click', function () {
    button.removeClass('orange');
    content.removeClass('show');
    button.eq(i).addClass('orange');
    content.eq(i).addClass('show');
  });
}
