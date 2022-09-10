var winHeight;
var field = $(".field");
winRsize(); //関数の実行
$(window).resize(function() {
	winRsize(); //ブラウザのウィンドウサイズが変更されるたびに検知してリサイズ
});
function winRsize() {
	winHeight = $(window).height(); //ウィンドウの高さを取得
	field.height(winHeight); //ウィンドウの高さをfieldクラスの高さとする
}
var items = 50; //50個量産
for (var i=0; i<=items; i++) {
	var move = Math.ceil( Math.random()*50 );
	var pos = Math.ceil( Math.random()*50 );
	var scale = Math.ceil( Math.random()*10 );
	var stretch = Math.ceil( Math.random()*5 );
	var shake = Math.ceil( Math.random()*5 );
	field.append('<div class="bubble move'+move+' pos'+pos+'"><div class="scale'+scale+'"><div class="shake'+shake+'"><span class="item stretch'+stretch+'"></span></div></div>');
}