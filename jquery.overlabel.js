/*
Overlabel.
Version: 0.1
https://github.com/trolev/overlabel/

Example:
          HTML:
              <div class="input">
                <label>Поиск</label>
                <input type="text">
              </div>
          JavaScript:
              $(".input label").overlabel();
*/
(function($) {
  function testvalue(input){
    if (input.attr('value') == '') {
      return true;
    } else {
      return false;
    }
  }
  jQuery.fn.overlabel = function() {
    this.each(function() {
      var $this = $(this);
      var $parent = $this.parent();
      var $field = $parent.find('input');
      if ($field.length) {
        if ($field.attr('value') !== '') {
          $this.hide();
        }
      }
      $field.focus(function() {
        $this.addClass('focus');
      });

      $field.blur(function() {
        $this.removeClass('focus');
        if (testvalue($field)) {
          $this.show();
        }
      });
      $field.keypress(function() {
        $this.hide();
      });
    });
  }
})(jQuery);
