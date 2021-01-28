document.addEventListener("DOMContentLoaded", function(){

	function WebpIsSupported(callback){
		
		if(!window.createImageBitmap){
			callback(false);
			return;
		}
		
		var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
		
		fetch(webpdata).then(function(response){
			return response.blob();
		}).then(function(blob){
			createImageBitmap(blob).then(function(){
				callback(true);
			}, function(){
				callback(false);
			});
		});
	}

	WebpIsSupported(function(isSupported){
		if(!isSupported){
			document.documentElement.classList.add('noWebp');
		}
	});

	function objectFit(image) {
		if ('objectFit' in document.documentElement.style === false && image.currentStyle['object-fit']) {
			image.style.background = 'url("' + image.src + '") no-repeat 50%/' + image.currentStyle['object-fit'];
			image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + image.width + "' height='" + image.height + "'%3E%3C/svg%3E";
		}
	}
	var elems = document.getElementsByClassName('coverIe');
	for (var i = 0; elems[i]; i++){
		objectFit(elems[i]);
	}

});
