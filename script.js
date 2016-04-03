SC.initialize({
  client_id: '7b9c5b47c81e949b866695aaee59f001'
});

// Loop through tradck data and append SC embed.
function makeCenterFromTracks(tracks) {
  var repContainer, track, trackDiv, button;
  var container = document.querySelector('#results');

	for (var i = 0; i <= 10; i++) {
    repContainer = document.createElement('div');
    repContainer.className = 'rep-container';

    trackDiv = document.createElement('div');
    trackDiv.className = 'track';
		trackDiv.id = 'track' + i;

    repContainer.appendChild(trackDiv);

    button = document.createElement('button');
    button.className = 'rep-button';

    repContainer.appendChild(button);

		track=tracks[i];
		SC.oEmbed(track.permalink_url,{color:'ff0066',
				  width: '80%', maxheight: 81},trackDiv);

		container.appendChild(repContainer);


	}
}

$(document).ready(function() {
	$('#search').click(function() {
		var user = $('input[name=Soundcloud]').val();
		SC.get('/users/'+user+'/tracks', {limit: 10}, function(tracks) {
			$('#results').append(makeCenterFromTracks(tracks));
		});
	});

  $('body').on('click', 'button.rep-button', function() {
    console.log('clicked');
    $('#rep-menu').css('display', 'flex');
  });

  $('#fan').on('click', function() {
    $('#rep-menu').fadeOut('slow');
  });
});
