$(function() {

$.ajax({
    url: 'https://www.codeschool.com/users/mrsdanosako.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
    }
  });
});
