// carrega videos assincronamente
setTimeout(function(){

	console.log('video.js')
	var iframe = '<iframe class="elasticMedia" src="https://player.vimeo.com/video/99185150" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

	document.querySelector('.elasticMedia-container').innerHTML = iframe;

}, 3000);