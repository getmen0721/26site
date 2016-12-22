$(document).ready(function() {
    //まずは利用する変数を宣言する

    /*  スクローラー読み込み */
    // sだけよりも名前付けたほうが分かりやすくて良い
    var s = skrollr.init();
    //　トップへ戻るやつ
    var showFlag = false;
    // jqueryで取得した者は頭に$とかしておくと良い
    //普通の変数との見分けが楽
    var $topBtn = $('#page-top');
    var showFlag = false;
    var corporateflag = true;
    var app1flag = true;
    var contactflag = true;
    var app2flag = true;
    var app3flag = true;
    var addressflag = true;
    $topBtn.css('bottom', '-100px');
  // var はまとめれるので、
  // var a = 10, b = 20, c = 30;

    // jello animated というクラスを使い続けるなら変数に入れておくと便利
    var classJelloAnimated = "jello animated";

    /* ヘッダーのホバー時にアニメーション */
    $(".navbar-brand").hover(
        function() {
            $(this).toggleClass(classJelloAnimated);
        }
    );
    // scrollは何度も呼ばず、一度の呼び出しの中に全て含める
    $(window).scroll(function() {
        var val = $(this).scrollTop();
        var sTop = $(window).scrollTop();

        if (val >= 100) {
            $(".navbar-brand").removeClass("jello");
        }

        //スクロールが100に達したらボタン表示
        if (val > 100) {
            if (showFlag == false) {
                showFlag = true;
                $topBtn.stop().animate({
                    'bottom': '-10px'
                }, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                $topBtn.stop().animate({
                    'bottom': '-100px'
                }, 200);
            }
        }

        /*corporateの表示アニメーション処理*/
        if (100 <= sTop) {
            if (300 >= sTop) {
                if (corporateflag) {
                    corporateflag = false;
                    $(".corporateMain").toggleClass("rotateInDownLeft animated");
                }
            }

        } else {
            corporateflag = true;
            $(".corporateMain").removeClass("rotateInDownLeft animated");
        }

        /*serviceの表示アニメーション処理*/
        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app1flag) {
                    app1flag = false;
                    $(".serviceSabu1").toggleClass(classJelloAnimated);
                    $("#appicon").attr({
                        src: "assets/images/appicon.gif"
                    });
                }
            }

        } else {
            app1flag = true;
            $(".serviceSabu1").removeClass(classJelloAnimated);
        }

        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app2flag) {
                    app2flag = false;
                    $(".serviceSabu2").toggleClass(classJelloAnimated);
                    $("#webicon").attr({
                        src: "assets/images/webicon.gif"
                    });
                }
            }

        } else {
            app2flag = true;
            $(".serviceSabu2").removeClass(classJelloAnimated);
        }


        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app3flag) {
                    app3flag = false;
                    $(".serviceSabu3").toggleClass(classJelloAnimated);
                    $("#directionicon").attr({
                        src: "assets/images/directionicon.gif"
                    });
                }
            }

        } else {
            app3flag = true;
            $(".serviceSabu3").removeClass(classJelloAnimated);
        }

        /*addressの表示アニメーション処理*/
        if (1300 <= sTop) {
            if (1500 >= sTop) {
                if (addressflag) {
                    addressflag = false;
                    $(".addressmap1").attr({
                        src: "assets/images/addressMap.gif"
                    });
                    $(".addressmap2").attr({
                        src: "assets/images/addressHead.gif"
                    });
                    $("#addressanime").toggleClass("rubberBand animated");
                }
            }

        } else {
            addressflag = true;
            $("#addressanime").removeClass("rubberBand animated");
        }

        /* contactの表示アニメーション処理 */
        if (1900 <= sTop) {
            if (2000 >= sTop) {
                if (contactflag) {
                    contactflag = false;
                    $(".contactMain").toggleClass("bounce animated");
                    $("#mailicon").attr({
                        src: "assets/images/mailicon.gif"
                    });
                }
            }
        } else {
            contactflag = true;
            $(".contactMain").removeClass("bounce animated");
        }
    });


    // click の処理はまとめる
    /* ヘッダーのスクロールアニメーション*/
    $('.topBtn').on("click", function() {
        s.setScrollTop(0)
    });
    $('#corporate').on("click", function() {
        s.setScrollTop(200)
    });
    $('#service').on("click", function() {
        s.setScrollTop(700)
    });
    $('#address').on("click", function() {
        s.setScrollTop(1300)
    });
    $("#contact").on("click", function() {
        s.setScrollTop(1900)
    });    
    
    //スクロールしてトップ
    $topBtn.click(function() {
        s.setScrollTop(0);
        return false;
    });
    //モーダル起動
    // モーダルの中で頻繁に出てくる部分は関数をつくる
    // この場合は 
    var modalInit = function(){
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない (防止策1)
        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();
        return true
    }
    //モーダルウィンドウを出現させるクリックイベント
    $("#modal-open").click(function() {

       if (modalInit() == false){
         return false;
       }
        //コンテンツをフェードインする
        $("#modal-content").fadeIn("slow");


        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function() {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content,#modal-overlay").fadeOut("slow", function() {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

    $("#modal-open1").click(function() {

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //コンテンツをフェードインする
        $("#modal-content1").fadeIn("slow");


        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function() {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content1,#modal-overlay").fadeOut("slow", function() {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

    $("#modal-open2").click(function() {

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //コンテンツをフェードインする
        $("#modal-content2").fadeIn("slow");


        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function() {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content2,#modal-overlay").fadeOut("slow", function() {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

    $("#modal-open3").click(function() {

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //コンテンツをフェードインする
        $("#modal-content3").fadeIn("slow");


        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function() {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content3,#modal-overlay").fadeOut("slow", function() {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $(window).resize(centeringModalSyncer);

    //センタリングを実行する関数
    function centeringModalSyncer() {

        //画面(ウィンドウ)の幅、高さを取得
        var w = $(window).width();
        var h = $(window).height();

        // コンテンツ(#modal-content)の幅、高さを取得
        // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
        //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
        //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
        var cw = $("#modal-content1").outerWidth();
        var ch = $("#modal-content1").outerHeight();

        var cw = $("#modal-content2").outerWidth();
        var ch = $("#modal-content2").outerHeight();

        var cw = $("#modal-content3").outerWidth();
        var ch = $("#modal-content3").outerHeight();

        var cw = $("#modal-content").outerWidth();
        var ch = $("#modal-content").outerHeight();
        //センタリングを実行する
        $("#modal-content1").css({
            "left": ((w - cw) / 2) + "px",
            "top": ((h - ch) / 2) + "px"
        });

        $("#modal-content").css({
            "left": ((w - cw) / 2) + "px",
            "top": ((h - ch) / 2) + "px"
        });

        $("#modal-content2").css({
            "left": ((w - cw) / 2) + "px",
            "top": ((h - ch) / 2) + "px"
        });

        $("#modal-content3").css({
            "left": ((w - cw) / 2) + "px",
            "top": ((h - ch) / 2) + "px"
        });

    }

});