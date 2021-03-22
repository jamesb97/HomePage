$(document).ready(function () {
  // MODAL
  var modalText = {
    discover: {
      title: "Memories",
      tag: "MEMORIES APPLICATION.",
      detail:
        "MERN Stack Social Media Application with Google & Facebook Sign-In.",
      link: "https://jovial-joliot-7b1729.netlify.app/",
    },
    ordering: {
      title: "Beach Resort",
      tag: "REACT BEACH RESORT.",
      detail:
        "React Beach Resort uses React Router, React Hooks, React Redux and Styled Components.",
      link: "https://reactbeachresort17.netlify.app/",
    },
    pizza: {
      title: "React Pizza",
      tag: "PIZZA ONLINE ORDERING.",
      detail:
        "Pizza ordering web application built with React and Styled Components.",
      link: "https://amazing-panini-542d59.netlify.app/",
    },
    stripe: {
      title: "E-Shop",
      tag: "ECOMMERCE APPLICATION.",
      detail:
        "Technology store that sells a wide variety of products including gaming headset, gaming mouse, keyboard, etc. The Checkout Experience is created using commerce.js and stripe.",
      link: "https://condescending-hopper-350f83.netlify.app/",
    },
    newrelic: {
      title: "COVID-19 Tracker",
      tag: "COVID-19 LIVE TRACKER.",
      detail:
        "Application that displays important information about the COVID-19 Pandemic.",
      link: "https://angry-shirley-9c8e73.netlify.app/",
    },
    roambi: {
      title: "Gatsby Travel",
      tag: "TRAVEL ADVISOR.",
      detail:
        "Travel website built to help guide users in finding their next vacation spot.",
      link: "https://gatsbytravel-46db7.web.app/",
    },
    walker: {
      title: "WaveSound",
      tag: "WAVESOUND PRODUCTIONS.",
      detail:
        "WaveSound is a music streaming web application that lets users listen to the latest music catalog charts, albums and more.",
      link: "https://upbeat-mirzakhani-c122ad.netlify.app/",
    },
    powur: {
      title: "ACME Storefront",
      tag: "SHOPIFY APPLICATION.",
      detail:
        "This demo landing page is created using Shopify API and Next.JS framework and provides clothing components and checkout process.",
      link: "https://nextjs-shopify-gvzp1nzsz-jamesb97.vercel.app/",
    },
    mystand: {
      title: "News Application",
      tag: "ALAN AI SPEECH-TO-TEXT.",
      detail:
        "React application powered by Alan AI in providing the latest news and features on demand by pressing the voice logo in the bottom-right corner.",
      link: "https://kind-brahmagupta-6cbefe.netlify.app/",
    },
    never: {
      title: "Exotic Houses",
      tag: "EXOTIC ATTRACTIONS.",
      detail:
        "GSAP JavaScript carousel animation featuring several housing attractions across the globe.",
      link: "https://vigorous-nightingale-e9b612.netlify.app/",
    },
    themall: {
      title: "Expense Tracker",
      tag: "SPEECHLY AI.",
      detail:
        "Expense Tracker user interface application build for users that want to manage their budgets. Database is powered by Firebase.",
      link: "https://expense-tracker-46c00.firebaseapp.com/",
    },
    fitness: {
      title: "Fitness",
      tag: "FITNESS PRODUCTION.",
      detail:
        "GSAP rendered JavaScript application with several components each of which provide information about a certain fitness aspect.",
      link: "https://hungry-perlman-db6714.netlify.app/",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".PNG') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
