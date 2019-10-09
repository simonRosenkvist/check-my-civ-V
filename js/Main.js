var Main = {

	init:function() {
		var list = document.getElementsByTagName('h3');
		var toggle = new Toggle();

		for (let i = 0; i < list.length; i++) {
			list[i].addEventListener('click', function(){toggle.visible(list[i])});

			var li = document.getElementsByTagName('li');
				for (let i = 0; i < li.length; i++) {
					li[i].style.display = "none";
				}
		}
	}
}

document.addEventListener("DOMContentLoaded", Main.init);