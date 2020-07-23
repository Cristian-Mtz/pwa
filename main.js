//Service worker

if('serviceWorker' in navigator){
	console.log('Puedes usar los serviceWorker en tu navergador');
	
	navigator.serviceWorker.register('./sw.js')
							.then(res => console.log('serviceWorker cargado exitosamente', res))
							.catch(err => console.log('serviceWorker no se ha podido cargar', err))
	
}else{
	console.log('No puedes usar los serviceWorker en tu navergador');
} 

//Scrool suavizado
$(document).ready(function(){
	
	$('#menu a').click(function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		});
		
		return false;
	});
	
});