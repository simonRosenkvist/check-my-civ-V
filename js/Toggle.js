Toggle = function() {


Toggle.prototype.visible = function(e) {
	var div = e.parentNode;
	var elements = div.getElementsByTagName('li');

		if (elements[0].style.display == 'none') {
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.display = 'list-item';
				div.style.transition = '0.5s';
				div.style.width = '70%';
			}
		}
		else if (elements[0].style.display == 'list-item') {
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.display = 'none';
				div.style.width = '15%';
			}
		}
	
	}

}