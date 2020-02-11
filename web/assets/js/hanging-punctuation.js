// Author: Eugene Zolotarev
// https://github.com/eugzol/jquery-hanging-punctuation
// MIT License

(function ($) {
  $.fn.hangPunctuation = function () {
    return this.each(function(){
      var current = $(this);
      var html = current.html();
      var open_symbols = {
        '«': 'quote',
        "\\(": 'bracket',
        '“': 'double-ears',
        '‘': 'single-ear',
        '„': 'double-low-ears',
        '‚': 'single-low-ear'
      };
      $.each(open_symbols, function(k,v){
        html = html.replace(
          new RegExp("(^|<br>|<p>|<blockquote>)[\s\n\r\f]*" + k, 'g'),
          "$1<span class='left-" + v + "'>" + k.replace(/\\/,'') + "</span>"
        );
        html = html.replace(
          new RegExp("(<i>|<b>|<s>|<span>|<u>|<em>)" + k, 'g'),
          "$1<span class='before-" + v + "'></span><span class='left-" + v + "'>" + k.replace(/\\/,'') + "</span>"
        );
        html = html.replace(
          new RegExp(" " + k, 'g'),
          "<span class='before-" + v + "'> </span><span class='left-" + v + "'>" + k.replace(/\\/,'') + "</span>"
        );
      });
      current.html(html);
      return current;
    });
  };
  $.fn.hangingPunctuation = $.fn.hangPunctuation;
}(jQuery));
