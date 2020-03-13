// chrome.storage.sync.get('kitty', function (data) {
// 	if (data.kitty && data.kitty !== 'false') {
		(function () {
			var imgs = document.querySelectorAll('img');

			for (var i = 0; i < imgs.length; i++) {
				if (!imgs[i].src.includes('tumblr_')) {
					imgs[i].src = cats[Math.floor(Math.random() * 1500)];
				}
			}

			window.onscroll = function () {
				var images = document.getElementsByTagName('img');

				for (var i = 0; i < images.length; i++) {
					if (!images[i].src.includes('tumblr_')) {
						images[i].src = cats[Math.floor(Math.random() * 1500)];
					}
				}

				var source = document.getElementsByTagName('source');

				for (var i = 0; i < source.length; i++) {
					if (!source[i].srcset.includes('tumblr_')) {
						source[i].srcset = cats[Math.floor(Math.random() * 1500)];
					}
				}

				var lazy = document.getElementsByClassName('lazyloaded');

				for (var i = 0; i < lazy.length; i++) {
					if (!lazy[i].src.includes('tumblr_')) {
						lazy[i].src = cats[Math.floor(Math.random() * 1500)];
					}
				}

				var video = document.querySelectorAll('video')
				for (v of video) {
					if (!v.poster.includes('tumblr_')){
						v.poster = cats[Math.floor(Math.random() * 1500)];
					}
				}
				// var div = document.querySelectorAll('div')
				// for (var i = 0; i < div.length; i++) {
				// 	if (div[i].style && !div[i].style.backgroundImage.includes('tumblr_')){
				// 		div[i].style.backgroundImage = 'url('+cats[Math.floor(Math.random() * 1500)]+')';
				// 	}
				// }

			}
		})();
// 	}
// })

