$(document).ready(function(){
  $("#wordForm").submit(function(event){
    event.preventDefault();
    var words = $("input#entry").val().split(" ")
    var three = words.map(function(word){
      if(word.length >= 3){
        console.log(word);
      }
    })
    // var splitWords = words.map(function(){
    //
    // })
    console.log(words, three);
  });


});
