document.addEventListeners("DOMContentLoaded",
	function (event) {
		document.getElementById("aboutMe-expander-button").addEventListener("click",
				function() {
					text_1 = $ajaxUtils.sendGetRequest("/data/initial-description-1.txt") ;
					text_2 = $ajaxUtils.sendGetRequest("/data/initial-description-2.txt") ;

					if document.getElementById("aboutMe-expander-button").text == text_1 {
						document.getElementById("aboutMe-expander-button").text = text_2 ;
					} else {
						document.getElementById("aboutMe-expander-button").text = text_2 ;
					}
	});
	}
);