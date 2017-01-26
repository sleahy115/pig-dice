// back end
var turnOption = "";
var turnScore = [];
var roundOver = "Your turn is over";
var roundPlay = "Would you like to hold or roll again?";

function Player (playerName, score) {
  this.pName = name;
  this.score = 0;
}

// Player.prototype.updateScore = function() {
//   this.score +  this.score  = this.ongoingScore;
// }


// Player.prototype.
//
var pOne = new Player("pOne",0)
var pTwo = new Player("pTwo",0)


function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rollReturn(roll) {
  if (roll === 1) {
    // alert(roundOver);
    return roundOver;
  } else {
    return roundPlay;
  }

}


// front end
$(function () {
  $(".nameInputs").submit(function(event) {
    event.preventDefault();
    var pOneNameInput = $("input#p-one-name").val();
    var pTwoNameInput = $("input#p-two-name").val();
    $(".p-one-name").text(pOneNameInput);
    $(".p-two-name").text(pTwoNameInput);
  });

  $("#roll").click(function() {
    var rollResult = roll(1, 6);
    $("#showroll").text(rollResult);
    turnScore.push(rollResult);
    // alert(turnScore);

    var turnOutput = rollReturn(rollResult);
    $("#hold").removeClass("btn disabled");
    $("#hold").addClass("btn active");
    $("#showResult").text(turnOutput);

    $("#hold").click(function() {
      var turnSum = 0;
      for (var index = 0; index < turnScore.length; index += 1) {
      turnSum += turnScore[index];
      }

      if ($(".p-one-show").is(':visible')) {
        $(".p-one-score").text(turnSum);
        pOne.score += turnSum;
        $(".p-one-total").text(pOne.score);
        console.log(pOne.score);

      } else if ($(".p-two-show").is(':visible')) {
        $(".p-two-score").text(turnSum);
        pTwo.score += turnSum;
        $(".p-two-total").text(pTwo.score);
        console.log(pTwo.score);
      }

      // var player1scoretotal = turnSum + player1.score;
      // player1.score = player1scoretotal;
      // for (i=0; Player.score<=100; i++) {
      //   if ($(".player1show").is(':visible')) {
      //     turnSum +  Player1.score
      //   }
      // }
    });
  });
    $("#switch").click(function() {
      turnScore = [];
      // player1.score.push(turnSum);
      if ($(".p-one-show").is(':visible')) {
      $("#showroll").empty();
      $("#showResult").empty();
      $(".p-two-show").toggle();
      $(".p-one-show").toggle();
    } else if ($(".p-two-show").is(':visible')) {
      turnScore = [];
      // player2.score.push(turnSum);
      $("#showroll").empty();
      $("#showResult").empty();
      $(".p-one-show").toggle();
      $(".p-two-show").toggle();
      }
    });
});
//parseInt(input and ongoing score)
  // $("#rollAgain").click(function() {
  //   var rollResult = roll(1, 6);
  //   $("#showroll").text(rollResult);

// });
