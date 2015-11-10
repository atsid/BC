(function() {
  /*
   * Cycles hero subtitle text
   */
  var hero = $('header');

  var titles = ['leader', 'professional', 'manager', 'problem solver', 'communicator'];
  var idx = 0;
  var swapEl = $('.swap');
  var stagingEl = $('<strong style="top: 25px; opacity: 0;" class="swap"></strong>');
  setInterval(function () {
    if ($(document).scrollTop() <= hero[0].offsetHeight) {
      idx = ++idx % titles.length;
      var t = titles[idx];
      stagingEl.css({top: '25px', opacity: 0});
      swapEl.animate({opacity: 0, top: '-25px'}, 200, function () {
        stagingEl.text(t);
        stagingEl.insertAfter(swapEl);
        swapEl.remove();
        var tmp = swapEl;
        swapEl = stagingEl;
        stagingEl = tmp;
        swapEl.animate({opacity: 1, top: '0px'}, 200);
      });
    }
  }, 2000);
})();