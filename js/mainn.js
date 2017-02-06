$(function(){
  var display= $("#displayDetails");
  $('.submit').on('click',function(){
     movie=$('#movie_name').val();
      movie1='http://www.omdbapi.com/?s='+movie;
        var i = 0;
  $.ajax({
         type:'GET',
          url:movie1,
  success:function(movie1){
  $.each(movie1,function(i,movies){
     $.each(movies,function(index,value){
              display.append('<img src="'+value.Poster+'">'+'<p> Title:'+value.Title+'</p>'+'<p> Year:'+value.Year+'</p>')
          });  });
  }
   });
  });

});
