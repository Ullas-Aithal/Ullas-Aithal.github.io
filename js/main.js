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
        //swipeable: true
    });

    $('.scrollspy').scrollSpy();

    // $("#exp1").click(function(){
    //     $('#exp-modal1').modal('open')
    //   });
    // $("#exp3").click(function(){
    //     $('#exp-modal2').modal('open')
    //   });
      

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
    console.log(years + ' years ' + months + ' months ' + days + ' days');
    console.log(tenure);
    document.getElementById("current-tenure").innerHTML = tenure;
  });

  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#experience-header').position().top) {
        $("#skill2").css("width", "90%");
        $("#skill2").css("width", "85%");
        $("#skill3").css("width", "70%");
        $("#skill4").css("width", "90%");
        $("#skill5").css("width", "70%");
        $("#skill6").css("width", "70%");
    }
  })
