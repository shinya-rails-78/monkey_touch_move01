/**
 * enchant();
 * Preparation for using enchant.js.
 * (Exporting enchant.js class to global namespace.
 *  ex. enchant.Sprite -> Sprite etc..)
 *
 * enchant.js を使う前に必要な処理。
 * (enchant.js 本体や、読み込んだプラグインの中で定義されている enchant.Foo, enchant.Plugin.Bar などのクラスを、
 *  それぞれグローバルの Foo, Bar にエクスポートする。)
 */
enchant();

/*
 * window.onload
 *
 * The function which will be executed after loading page.
 * Command in enchant.js such as "new Core();" will cause an error if executed before entire page is loaded.
 *
 * ページがロードされた際に実行される関数。
 * すべての処理はページがロードされてから行うため、 window.onload の中で実行する。
 * 特に new Core(); は、<body> タグが存在しないとエラーになるので注意。
 */
window.onload = function(){
    /**
     * new Core(width, height)
     *
     * Make instance of enchant.Core class. Set window size to 320 x 320
     * Core オブジェクトを作成する。
     * 画面の大きさは 320ピクセル x 320ピクセル に設定する。
     */
    var game = new Core(320, 320);

    /**
     * Core.fps
     *
     * Set fps (frame per second) in this game to 15.
     * ゲームの fps (frame per second) を指定する。この場合、1秒間あたり15回画面が更新される。
     */
    game.fps = 15;
    /**
     * Core#preload
     *
     * You can preload all assets files before starting the game.
     * Set needed file lists in relative/absolute path for attributes of Core#preload
     * 必要なファイルを相対パスで引数に指定する。 ファイルはすべて、ゲームが始まる前にロードされる。
     */
    game.preload("chara1.png","monkey.png","icon0.png");

    /**
     * Core#onload
     *
     * ロードが完了した直後に実行される関数を指定している。
     * onload プロパティは load イベントのリスナとして働くので、以下の2つの書き方は同じ意味。
     *
     * game.onload = function(){
     *     // code
     * }
     *
     * game.addEventListener("load", function(){
     *     // code
     * })
     */
    game.onload = function(){
        /**
         * new Sprite(width, height)
         * スプライトオブジェクトを作成する。
         * Sprite は、Entity, Node, EventTarget を継承しており、それぞれのメソッドやプロパティを使うことができる。
         */
        game.rootScene.backgroundColor = "#660066";        
        game.score=0;
        scorelabel=new Label(); 
        scorelabel.color = "#ffffff";
        scorelabel.x=10;scorelabel.y=10;
        game.rootScene.addChild(scorelabel);
        scorelabel.text ="Score 0";


        bear = new Sprite(32, 32);
        monkey = new Sprite(40, 47);
        banana = new Sprite(16,16);
        apple = new Sprite(16,16);
        grape = new Sprite(16,16);
        pig1 = new Sprite(16,16);
        pig2 = new Sprite(16,16);
        panda = new Sprite(16,16);
        cherry = new Sprite(16,16);
        strawberry = new Sprite(16,16);
        star = new Sprite(16,16);
        /**
         * Sprite.image {Object}
         * Core#preload で指定されたファイルは、Core.assets のプロパティとして格納される。
         * Sprite.image にこれを代入することで、画像を表示することができる
         */
        bear.image = game.assets["chara1.png"];
        monkey.image = game.assets["monkey.png"];
        banana.image = game.assets["icon0.png"];
        apple.image = game.assets["icon0.png"];
        grape.image = game.assets["icon0.png"];
        pig1.image = game.assets["icon0.png"];
        pig2.image = game.assets["icon0.png"];
        panda.image = game.assets["icon0.png"];
        cherry.image = game.assets["icon0.png"];
        strawberry.image = game.assets["icon0.png"];
        star.image = game.assets["icon0.png"];

        /**
         * Node.x Node.y {Number}
         * x, y 座標を指定する。
         * viewport の大きさに合わせて画面が拡大縮小されている場合も、
         * オリジナルの座標系で指定できる。
         */
        bear.x = 10;
        bear.y = 50;
        monkey.x =220;
        monkey.y = 250;
        banana.x = 150;
        banana.y = 150;
        apple.x = 50;
        apple.y = 50;
        grape.x = 100;
        grape.y = 50;
        pig1.x = 230;
        pig1.y = 100;
        pig2.x = 10;
        pig2.y = 50;
        panda.x = 80;
        panda.y = 80;
        cherry.x = 280;
        cherry.y = 280;
        strawberry.x = 80;
        strawberry.y = 180;
        star.x = 290;
        star.y = 20;
        /**
         * Sprite.frame {Number}
         * (width, height) ピクセルの格子で指定された画像を区切り、
         * 左上から数えて frame 番目の画像を表示することができる。
         * デフォルトでは、0:左上の画像が表示される。
         * このサンプルでは、シロクマが立っている画像を表示する (chara1.gif 参照)。
         */
        bear.frame = 3;
        monkey.frame = 3;
        banana.frame = 16;
        apple.frame = 15; 
        grape.frame = 17;
        pig1.frame = 22;
        panda.frame = 21;
        pig2.frame = 23;
        cherry.frame = 27;
        strawberry.frame = 32;
        star.frame = 30;
         /**
         * Group#addChild(node) {Function}
         * オブジェクトをノードツリーに追加するメソッド。
         * ここでは、クマの画像を表示するスプライトオブジェクトを、rootScene に追加している。
         * Core.rootScene は Group を継承した Scene クラスのインスタンスで、描画ツリーのルートになる特別な Scene オブジェクト。
         * この rootScene に描画したいオブジェクトを子として追加する (addChild) ことで、毎フレーム描画されるようになる。
         * 引数には enchant.Node を継承したクラス (Entity, Group, Scene, Label, Sprite..) を指定する。
         */
        //game.rootScene.addChild(bear);
        game.rootScene.addChild(monkey);
        game.rootScene.addChild(banana);
        game.rootScene.addChild(apple);
        game.rootScene.addChild(grape);
        game.rootScene.addChild(pig1);
        game.rootScene.addChild(pig2);
        game.rootScene.addChild(panda);
        game.rootScene.addChild(cherry);
        game.rootScene.addChild(strawberry);
        game.rootScene.addChild(star);
        /**
         * EventTarget#addEventListener(event, listener)
         * イベントに対するリスナを登録する。
         * リスナとして登録された関数は、指定されたイベントの発行時に実行される。
         * よく使うイベントには、以下のようなものがある。
         * - "touchstart" : タッチ/クリックされたとき
         * - "touchmove" : タッチ座標が動いた/ドラッグされたとき
         * - "touchend" : タッチ/クリックが離されたとき
         * - "enterframe" : 新しいフレームが描画される前
         * - "exitframe" : 新しいフレームが描画された後
         * enchant.js やプラグインに組み込まれたイベントは、それぞれのタイミングで自動で発行されるが、
         * EventTarget#dispatchEvent で任意のイベントを発行することもできる。
         *
         * ここでは、右に向かって走っていくアニメーションを表現するために、
         * 新しいフレームが描画される前に、毎回クマの画像を切り替え、x座標を1増やすという処理をリスナとして追加する。
         */
       
/* monkey.addEventListener("enterframe", function(){

 if(monkey.intersect(banana)) {
      game.rootScene.removeChild(banana);
            
        }); */
   pig1.addEventListener("enterframe", function(){
            /**
             * クマを走らせるために、x座標をインクリメントしている。
             * この無名関数 function(){ ... } は enterframe イベントのリスナなので、毎フレーム実行される。
             */
            this.x -= 1;
            

        });
     pig2.addEventListener("enterframe", function(){
            /**
             * クマを走らせるために、x座標をインクリメントしている。
             * この無名関数 function(){ ... } は enterframe イベントのリスナなので、毎フレーム実行される。
             */
            
            this.y += 1;
       
        });
     panda.addEventListener("enterframe", function(){
            /**
             * クマを走らせるために、x座標をインクリメントしている。
             * この無名関数 function(){ ... } は enterframe イベントのリスナなので、毎フレーム実行される。
             */
            
            this.y += 1;
            this.x += 1;
       
        });

   



monkey.addEventListener("enterframe", function(){


     
  
if (game.input.up) {
  //↑キー
 monkey.y -= 10;
}
if (game.input.down) {
  //↓キー
  monkey.y += 10;
}
if (game.input.right) {
  //→キー
 monkey.x += 10;
}
if (game.input.left) {
  //←キー
  monkey.x -= 10;
}

    if(monkey.intersect(banana)) {
      banana.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
        };
      if(monkey.intersect(grape)) {
      grape.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
        };
        if(monkey.intersect(apple)) {
      apple.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
        };
        if(monkey.intersect(pig1)) {
      pig1.y = -300;
      game.score += 20;
      scorelabel.text ="Score" +game.score;   
        };
        if(monkey.intersect(pig2)) {
      pig2.y = -300;
      game.score += 20;
      scorelabel.text ="Score" +game.score;
       };
        if(monkey.intersect(strawberry)) {
      strawberry.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
      };
        if(monkey.intersect(cherry)) {
      //game.rootScene.removeChild(cherry);
      cherry.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
        };
        if(monkey.intersect(panda)) {
      panda.y = -300;
      game.score += 20;
      scorelabel.text ="Score" +game.score;
       };
        if(monkey.intersect(star)) {
      star.y = -300;
      game.score += 10;
      scorelabel.text ="Score" +game.score;
       };




/* if(monkey.intersect(bear)) {
 monkey.x = 0;//衝突したら初期位置に戻る 
 } */
});
   
/**
         * タッチされると消える処理を実現するために、
         * touchstart イベントが起こったとき、クマが消える処理をリスナとして追加する。
         */

pig1.addEventListener("touchstart", function(){
            /**
             * クマを game.rootScene から削除する。
             * Group#addChild の逆は Group#removeChild。
             */
            game.rootScene.removeChild(pig1);
        });
pig2.addEventListener("touchstart", function(){
            /**
             * クマを game.rootScene から削除する。
             * Group#addChild の逆は Group#removeChild。
             */
            game.rootScene.removeChild(pig2);
        });

  bear.addEventListener("touchstart", function(){
            /**
             * クマを game.rootScene から削除する。
             * Group#addChild の逆は Group#removeChild。
             */
            game.rootScene.removeChild(bear);
        });
    };

    /**
     * Core#start
     * ゲームを開始する。この関数を実行するまで、ゲームは待機状態となる。
     * 代わりに Core#debug を使うことで、デバッグモードで起動することができる。
     * Core#pause(); で一時停止し、 Core#resume(); で再開することができる。
     */
    game.start();
};
