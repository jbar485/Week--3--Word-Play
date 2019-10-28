var sentence = [];
var three;
$(document).ready(function(){
  $("#wordForm").submit(function(event){
    event.preventDefault();
    var words = $("input#entry").val().split(" ")
    var three = words.map(function(word){
      if(word.length >= 3){
        $("p#final-sentence").append(word + " ");
        console.log(word);
      }else {
        word.replace("")
        // console.log(three);
      }
    })
    // var splitWords = words.map(function(){
    //
    // })
  });


});
