(function() {
  $(function() {
    $(".login--container").removeClass("preload");
    this.timer = window.setTimeout((function(_this) {
      return function() {
        return $(".login--container").toggleClass("login--active");
      };
    })(this), 2000);
    return $(".js-toggle-login").click((function(_this) {
      return function() {
        window.clearTimeout(_this.timer);
        $(".login--container").toggleClass("login--aactive");
        return $(".login--username-container input").focus();
      };
    })(this));
  });

}).call(this);