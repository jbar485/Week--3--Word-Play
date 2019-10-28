var sentence = [];
var three;
var words;
$(document).ready(function(){
  $("#wordForm").submit(function(event){
    event.preventDefault();
    words = $("input#entry").val().split(" ");
    var wordMap = words.map(function(word){
      // console.log("type of 1: ", typeof(word));
      if(word.length >= 3){
        // console.log(word);
        var reversedString = word.split("").reverse().join("");
        $("p#final-sentence").append(reversedString + " ");
        // console.log("type of 2: ", typeof(word));
        // console.log("Wordmap: ", wordMap);
      }else {
        word.replace("");
        // console.log(three);
      }
    })
    // three.join().reverse();
  });


});
