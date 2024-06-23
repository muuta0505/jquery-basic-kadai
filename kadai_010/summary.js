$('#change-color').click(function() {
  $('#target').css('color', 'red');
});

$('#change-text').click(function() {
  $('#target').text('Hello!');
});

$('#fade-out').click(function() {
  $('#target').fadeOut('slow');
});

$('#fade-in').click(function() {
  $('#target').fadeIn('slow');
});