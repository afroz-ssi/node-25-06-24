// Passowrd-Eye

$(function () {
  $("#eye").click(function () {
    if ($(this).hasClass("fa-eye-slash")) {
      $(this).removeClass("fa-eye-slash");

      $(this).addClass("fa-eye");

      $("#password").attr("type", "text");
    } else {
      $(this).removeClass("fa-eye");

      $(this).addClass("fa-eye-slash");

      $("#password").attr("type", "password");
    }
  });
});

// Passowrd-Eye

// Number-section

// function enforceMinMax(el) {
//   if (el.value != "") {
//     if (parseInt(el.value) < parseInt(el.min)) {
//       el.value = el.min;
//     }
//     if (parseInt(el.value) > parseInt(el.max)) {
//       el.value = el.max;
//     }
//   }
// }

// Number-section

// SIDE-MENU
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// SIDE-MENU

// FAQ-Section

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// FAQ-Tabs

$(document).ready(function () {
  $("#infocontent section:not(:first)").hide();
  var $allContentDivs = $("#infocontent section"); // Hide All Content Divs

  $("#linkwrapper a").click(function () {
    var $contentDiv = $("#" + this.id + "content");

    if ($contentDiv.is(":visible")) {
      $contentDiv.hide(); // Hide Div
    } else {
      $allContentDivs.hide(); // Hide All Divs
      $contentDiv.show(); // Show Div
    }

    return false;
  });
});

// FAQ-Tabs

// FAQ-Active

$(document).ready(function () {
  $("#accordion ul li a").click(function () {
    $("#accordion ul li a").removeClass("active");
    $(this).addClass("active");
  });
});
// FAQ-Active

// search-dropdown

$("#search_quote").on("keyup", function () {
  var search = $(this).val().toLowerCase();
  $("#search-value").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
  });
});

$("#dropdown-btn").on("click", function () {
  $("#dropdown").slideToggle().toggleClass("open");
  $(this).toggleClass("opened");
});

$("body").on("click", function (event) {
  if ($(event.target).closest(".quotes").length != 0) {
    return;
  } else {
    $("#dropdown.open").slideToggle().toggleClass("open");
    $("#dropdown-btn.opened").toggleClass("opened");
  }
});

// search-dropdown

// search-dropdown-1

$("#search_quote-1").on("keyup", function () {
  var search = $(this).val().toLowerCase();
  $("#search-value-1").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
  });
});

$("#dropdown-btn-1").on("click", function () {
  $("#dropdown-1").slideToggle().toggleClass("open");
  $(this).toggleClass("opened");
});

$("body").on("click", function (event) {
  if ($(event.target).closest(".quotes").length != 0) {
    return;
  } else {
    $("#dropdown-1.open").slideToggle().toggleClass("open");
    $("#dropdown-btn-1.opened").toggleClass("opened");
  }
});

// search-dropdown-1

// search-dropdown-2

$("#search_quote-2").on("keyup", function () {
  var search = $(this).val().toLowerCase();
  $("#search-value-2").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
  });
});

$("#dropdown-btn-2").on("click", function () {
  $("#dropdown-2").slideToggle().toggleClass("open");
  $(this).toggleClass("opened");
});

$("body").on("click", function (event) {
  if ($(event.target).closest(".quotes").length != 0) {
    return;
  } else {
    $("#dropdown-2.open").slideToggle().toggleClass("open");
    $("#dropdown-btn-2.opened").toggleClass("opened");
  }
});

// search-dropdown-2

// search-dropdown-3

$("#search_quote-3").on("keyup", function () {
  var search = $(this).val().toLowerCase();
  $("#search-value-3").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
  });
});

$("#dropdown-btn-3").on("click", function () {
  $("#dropdown-3").slideToggle().toggleClass("open");
  $(this).toggleClass("opened");
});

$("body").on("click", function (event) {
  if ($(event.target).closest(".quotes").length != 0) {
    return;
  } else {
    $("#dropdown-3.open").slideToggle().toggleClass("open");
    $("#dropdown-btn-3.opened").toggleClass("opened");
  }
});

// search-dropdown-3

// search-dropdown-4

$("#search_quote-4").on("keyup", function () {
  var search = $(this).val().toLowerCase();
  $("#search-value-4").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
  });
});

$("#dropdown-btn-4").on("click", function () {
  $("#dropdown-4").slideToggle().toggleClass("open");
  $(this).toggleClass("opened");
});

$("body").on("click", function (event) {
  if ($(event.target).closest(".quotes").length != 0) {
    return;
  } else {
    $("#dropdown-4.open").slideToggle().toggleClass("open");
    $("#dropdown-btn-4.opened").toggleClass("opened");
  }
});

// search-dropdown-4

// Multi-Modal-Open-Close
$("#myModal-3").on("show.bs.modal", function (e) {
  $("#myModal-2").modal("hide");
});

// Multi-Modal-Open-Close

// all-filters

$(document).on("click", "#mydiv a", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// all-filters
// scroll

// jQuery(function($) {
//     $.fn.hScroll = function(amount) {
//         amount = amount || 120;
//         $(this).bind("DOMMouseScroll mousewheel", function(event) {
//             var oEvent = event.originalEvent,
//                 direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
//                 position = $(this).scrollLeft();
//             position += direction > 0 ? -amount : amount;
//             $(this).scrollLeft(position);
//             event.preventDefault();
//         })
//     };
// });
// $(document).ready(function() {
//     $('#table-responsive-1').hScroll(60); // You can pass (optionally) scrolling amount
// });

// scroll

// custum-select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
        create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
            and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
    except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// custum-select

//starts verification code
function moveFocus(currentInput) {
  const value = currentInput.value;

  if (value.length === 1) {
    // Move to the next input if the current one is filled
    const nextInput = currentInput.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  } else if (value.length === 0) {
    // Move to the previous input if the current one is empty
    const prevInput = currentInput.previousElementSibling;
    if (prevInput) {
      prevInput.focus();
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".otp-code input");

  function handleKeydown(event) {
    const currentInput = event.target;
    const key = event.key;

    if (key === "Backspace") {
      // Clear the value and move to the previous input if empty
      if (currentInput.value.length === 0) {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
          prevInput.value = ""; // Clear previous input
        }
      }
    } else if (key === "ArrowLeft") {
      // Move focus to the previous input
      const prevInput = currentInput.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    } else if (key === "ArrowRight") {
      // Move focus to the next input if current input is empty
      if (currentInput.value.length === 0) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("keydown", handleKeydown);
    input.addEventListener("input", () => moveFocus(input));
  });
});

// end verification code
