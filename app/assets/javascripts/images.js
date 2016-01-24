$(document).ready(function() {
      setTimeout(function(){pushPosition()}, 5000);
      setInterval(function(){pushPosition()}, 30000);
      setInterval(function(){auto_push()}, 2000);
      $('#photo').hide();
});

var position = navigator.geolocation.watchPosition(update_location, update_location_error, position_options);

var position_options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
};	

function update_location(position) {
      $('#image_latitude').val(position.coords.latitude);
      $('#image_longitude').val(position.coords.longitude);      
      $('.position').text(Math.round(position.coords.accuracy));
}

function update_location_error(err) {
	console.warn(err.message);
}

function auto_push() {
    if ($('#image_photo').val() != "") {
	$("#tag").submit();
        $("#photo").hide();
        $("#loader").show();
	$('#image_photo').val("");
    } else {
        //console.log('no photo');   
    }
}

function pushPosition() {
      $('#loader').hide();
      $('#photo').show();
      var lon = $('#image_longitude').val();
      var lat = $('#image_latitude').val();
      $.ajax('location.js', {
          format: 'js',
          data: { latitude: lat, longitude: lon }
      });
}

function colorCode() {
	var time = new Date().getTime(); 
        time = time / 1000;
	$('.timestamp').each(function( i ) { 
		if ((time - $( this ).text()) < 6000) {
		    $( this ).closest('.square').css({"border-color" : "#ffffff", "background-color" : "#ffffff"});
		}else if ((time - $( this ).text()) < 60000) {
		    $( this ).closest('.square').css({"border-color" : "#e5e5e5", "background-color" : "#e5e5e5"});
		}else if ((time - $( this ).text()) < 360000) {
		    $( this ).closest('.square').css({"border-color" : "#cccccc", "background-color" : "#cccccc"});
		}else if ((time - $( this ).text()) < 1440000) {
		    $( this ).closest('.square').css({"border-color" : "#b2b2b2", "background-color" : "#b2b2b2"});
		}else if ((time - $( this ).text()) < 2880000) {
		    $( this ).closest('.square').css({"border-color" : "#999999", "background-color" : "#999999"});
		}else {
		    $( this ).closest('.square').css({"border-color" : "#7f7f7f", "background-color" : "#7f7f7f"});
		}
	})
}
