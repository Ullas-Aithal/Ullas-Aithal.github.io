M.AutoInit();

$(document).ready(function(){
    $('.modal').modal({
        startingTop: '20%', // Starting top style attribute
        opacity: 0.6,
        inDuration: 100,
        outDuration: 100
    })

    $('.tabs').tabs({
        duration: 250,
    });

    $('.scrollspy').scrollSpy();
    $('#nav-bar-title').hide();
    $('.sidenav').sidenav();
    $('.chips').chips();
      

    var now = moment();
    var joinDate = moment("2021-04-05");

    var years = now.diff(joinDate, 'year');
    joinDate.add(years, 'years');

    var months = now.diff(joinDate, 'months');
    joinDate.add(months, 'months');

    var days = now.diff(joinDate, 'days');

    var tenure = "";
    if(years != 0){
        if(years == 1){
            tenure = tenure + years + " Year ";    
        } else {
            tenure = tenure + years + " Years ";
        }
    }
    if(months != 0){
        if(months == 1){
            tenure = tenure + months + " Month ";    
        } else {
            tenure = tenure + months + " Months ";
        }
    }
    if(days != 0){
        if(days == 1){
            tenure = tenure + days + " Day";    
        } else {
            tenure = tenure + days + " Days";
        }
    }
    document.getElementById("current-tenure").innerHTML = tenure;

    document.getElementById("copyright-year").innerHTML = now.year();
  });

  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#experience-header').position().top) {
        $("#skill1").css("width", "90%");
        $("#skill2").css("width", "85%");
        $("#skill3").css("width", "70%");
        $("#skill4").css("width", "90%");
        $("#skill5").css("width", "70%");
        $("#skill6").css("width", "60%");
        $("#skill7").css("width", "70%");
        $("#skill8").css("width", "70%");
        $("#skill9").css("width", "50%");
    }
    if ( $(this).scrollTop() > 100 ) {
        $('#nav-bar-title').show();
       /// $('header').slideDown();
       } else if ( $(this).scrollTop() <= 200 ) {
        $('#nav-bar-title').hide();
       // $('header').slideUp();
      }
  })
