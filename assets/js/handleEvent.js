$(document).ready(function () {
    $("a[href*=#]").bind("click", function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior
      var target = $(this).attr("href"); // Set the target as variable
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          200,
          function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
          }
        );
      return false;
    });
  });
  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".nav-item__link.active").removeClass("active");
          $(".nav-item__link").eq(i).addClass("active");
        }
      });
    })
    .scroll();
  // event click old
  // var buttons = document.getElementsByClassName("nav-item__link");
  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener("click", function () {
  //     for (var i = 0; i < buttons.length; i++) {
  //       buttons[i].classList.remove("active");
  //     }
  //     this.className += " active";
  //   });
  // }