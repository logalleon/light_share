$(document).ready( function () {

	// Create the sharing section
	var imageURLs = []; // In this case, they're actually svgs with classes
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="485.211px" height="485.211px" viewBox="0 0 485.211 485.211" style="enable-background:new 0 0 485.211 485.211;" xml:space="preserve">' +
					'<path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584   c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651   c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729   c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911   c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602   c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z"/>' +
				'</svg>');
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="90px" height="90px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">' +
					'<path id="Facebook__x28_alt_x29_" d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"/>' +
				'</svg>');
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="90px" height="90px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">' +
					'<path id="Facebook__x28_alt_x29_" d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"/>' +
				'</svg>');
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">' +
					'<path  d="M13,0H3C1.343,0,0,1.343,0,3v10c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3V3     C16,1.343,14.657,0,13,0z M5.768,13.383c-1.771,0-3.265-0.721-3.265-1.873c0-1.169,1.363-2.298,3.134-2.297L6.19,9.208     C5.948,8.973,5.756,8.684,5.756,8.327c0-0.212,0.068-0.415,0.162-0.596l-0.295,0.01c-1.455,0-2.429-1.035-2.429-2.318     c0-1.255,1.345-2.338,2.775-2.338h3.19L8.443,3.601H7.432C8.103,3.859,8.46,4.641,8.46,5.443c0,0.673-0.373,1.253-0.9,1.665     C7.045,7.511,6.948,7.679,6.948,8.021c0,0.292,0.552,0.788,0.84,0.993c0.843,0.596,1.114,1.149,1.114,2.072     C8.902,12.238,7.787,13.383,5.768,13.383z M14,7.019h-2v1.997h-0.999V7.019H9V6h2.001V4H12v2h2V7.019z"/>' +
					'<path  d="M7.314,5.505C7.172,4.427,6.391,3.561,5.57,3.536C4.749,3.512,4.198,4.337,4.34,5.417     c0.142,1.079,0.923,1.974,1.745,1.998C6.905,7.44,7.457,6.585,7.314,5.505z"/>' +
					'<path  d="M6.769,9.639C6.527,9.561,6.26,9.514,5.975,9.511c-1.224-0.013-2.32,0.746-2.32,1.659     c0,0.932,0.884,1.706,2.108,1.706c1.721,0,2.32-0.728,2.32-1.658c0-0.112-0.015-0.222-0.039-0.329     C7.91,10.361,7.433,10.1,6.769,9.639z"/>' +
				'</svg>');
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">' +
					'<path  d="M13,0H3C1.343,0,0,1.343,0,3v10c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3V3    C16,1.343,14.657,0,13,0z M11.98,6.204l0.006,0.255c0,2.604-1.981,5.604-5.604,5.604c-1.112,0-2.147-0.326-3.019-0.885    c0.154,0.018,0.311,0.028,0.47,0.028c0.923,0,1.772-0.315,2.446-0.843c-0.862-0.016-1.589-0.586-1.84-1.368    C4.56,9.017,4.682,9.029,4.81,9.029c0.18,0,0.354-0.023,0.519-0.068c-0.901-0.182-1.58-0.977-1.58-1.931V7.005    c0.266,0.148,0.569,0.236,0.892,0.247C4.113,6.899,3.765,6.296,3.765,5.613c0-0.361,0.097-0.699,0.266-0.99    c0.971,1.192,2.423,1.976,4.06,2.058C8.057,6.537,8.04,6.386,8.04,6.232c0-1.087,0.882-1.969,1.97-1.969    c0.566,0,1.078,0.239,1.438,0.622c0.448-0.089,0.87-0.253,1.251-0.478c-0.147,0.46-0.459,0.846-0.866,1.09    c0.397-0.047,0.778-0.154,1.131-0.31C12.7,5.581,12.365,5.928,11.98,6.204z"/>' +
				'</svg>');
	imageURLs.push('<svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">' +
					'<path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8C16,3.581,12.418,0,8,0z M6,11.875H4v-7h2V11.875    z M5.062,4.446c-0.518,0-0.937-0.42-0.937-0.938c0-0.518,0.42-0.938,0.937-0.938C5.58,2.571,6,2.991,6,3.508    C6,4.026,5.58,4.446,5.062,4.446z M13,11.875h-2V7.547c0-0.507-0.145-0.862-0.768-0.862C9.199,6.685,9,7.547,9,7.547v4.328H7v-7h2    v0.669c0.286-0.219,1-0.668,2-0.668c0.648,0,2,0.388,2,2.732V11.875z"/>' +
			'</svg>');

	var shareLabel = ["mail", "facebook", "facebook v2", "google plus", "twitter", "linkedin"];
	var ls = document.createElement("div");
	ls.className += "lightShare";
	var ul = document.createElement("ul");
	for (var i = 0, len = imageURLs.length; i < len; i++) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("data-label", shareLabel[i]);
		addListener(a, 'click', function () {
			ga('send', 'event', 'social', 'light share', this.getAttribute("data-label"));
		});
		a.id = "ls" + i;
		a.innerHTML = imageURLs[i];
		li.appendChild(a);
		ul.appendChild(li);
	}
	ls.appendChild(ul);
	document.body.appendChild(ls);

	var $href = $("link[rel=canonical").attr("href");
	if(!$href) { $href = document.URL; }
	$href = encodeURIComponent($href);
	var newWindow = "window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;";

	// Email
	var mailto = "mailto:?",
		subject = "subject=" + encodeURI("Light Share doesn't use a lot of js"),
		body = "body=" + encodeURI("Light Share's only hard dependency is jQuery, but I'm thinking I might make it so just vanilla JS will due.\n\n" +
			"Oh, that's right, the URL you want is: ") + decodeURI($href) + encodeURI(".\n\n-Logan");
	$("#ls0").attr("href", mailto + "&" + subject + "&" + body);

	// FB1
	var fb1_api = "https://www.facebook.com/dialog/share?",
		id = "app_id=787311388023796",
		display = "display=popup",
		href = "href=" + $href,
		redirect = "redirect_uri=" + $href;
	$("#ls1").attr("href", fb1_api + id + "&" + display + "&" + href + "&" + redirect).attr("onclick", newWindow);

	// FB2
	var fb2_api = "https://www.facebook.com/sharer/sharer.php";
	$("#ls2").attr("href", fb2_api).attr("onclick", newWindow);

	// Gplus
	var gplus_api = "https://plus.google.com/share?",
		url = "url=" + $href;
	$("#ls3").attr("href", gplus_api + url).attr("onclick", newWindow);

	// Twitter
	var tw_api = "https://twitter.com/share";
	$("#ls4").attr("href", tw_api).attr("onclick", newWindow);

	// LinkedIn
	var lin_api = "https://www.linkedin.com/shareArticle?",
		lin_url = "url=" + $href,
		title = "title=" + encodeURI("Light Share lightweight sharing"),
		summary = "summary=" + encodeURI("A minimally intrusive social sharing button group."),
		source = "source=" + $href;
	$("#ls5").attr("href", lin_api + lin_url + "&" + title + "&" + summary + "&" + source).attr("onclick", newWindow);

	// LightShare show / hide
	var threshold = 300,
		$ls = $('.lightShare');
	$ls.hide();
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > threshold) {
			$ls.show("slide", { direction : "right"}, 'slow');
		} else {
			$ls.hide("slide", { direction : "right"}, 'slow');
		}
	});

	// Google analytics binding
 function addListener(element, type, callback) {
			if (element.addEventListener) element.addEventListener(type, callback);
			else if (element.attachEvent) element.attachEvent('on' + type, callback);
	}
});