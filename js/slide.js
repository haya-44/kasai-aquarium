// JavaScript Document
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: 'images/main-01.jpg'},
				{ src: 'images/main-02.jpg'},
				{ src: 'images/main-03.jpg'},
				{ src: 'images/main-04.jpg'},
				{ src: 'images/main-05.jpg'},
				{ src: 'images/main-06.jpg'},
				{ src: 'images/main-07.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: 'images/main-sp-01.jpg'},
				{ src: 'images/main-sp-02.jpg'},
				{ src: 'images/main-sp-03.jpg'},
				{ src: 'images/main-sp-04.jpg'},
				{ src: 'images/main-sp-05.jpg'},
				{ src: 'images/main-sp-06.jpg'},
				{ src: 'images/main-sp-07.jpg'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,
    //画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 3000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 6000,
    //スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,
    //スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburnsUp',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,
    //画像設定を読む
		timer:false,
		
	});