$(document).ready(function() {
    /*  スクローラー読み込み */

    var s = skrollr.init();


    /* ヘッダーのホバー時にアニメーション */
    $(".navbar-brand").hover(
        function() {
            $(this).toggleClass("jello animated");
        }
    );

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


    $(window).scroll(function() {
        var val = $(this).scrollTop();
        if (val >= 100) {

            $(".navbar-brand").removeClass("jello");
        }

    });

    //　トップへ戻るやつ
    var showFlag = false;
    var topBtn = $('#page-top');
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({
                    'bottom': '-10px'
                }, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({
                    'bottom': '-100px'
                }, 200);
            }
        }
    });

    //スクロールしてトップ
    topBtn.click(function() {
        s.setScrollTop(0);
        return false;
    });


    /*corporateの表示アニメーション処理*/
    var corporateflag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (100 <= sTop) {
            if (300 >= sTop) {
                if (corporateflag) {
                    console.log(sTop);
                    corporateflag = false;
                    $(".corporateMain").toggleClass("rotateInDownLeft animated");
                }
            }

        } else {
            corporateflag = true;
            $(".corporateMain").removeClass("rotateInDownLeft animated");
        }

    });


    /*serviceの表示アニメーション処理*/
    var app1flag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app1flag) {
                    console.log(sTop);
                    app1flag = false;
                    $(".serviceSabu1").toggleClass("jello animated");
                    $("#appicon").attr({
                        src: "img/appiconanime.gif"
                    });
                }
            }

        } else {
            app1flag = true;
            $(".serviceSabu1").removeClass("jello animated");
        }

    });

    var app2flag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app2flag) {
                    console.log(sTop);
                    app2flag = false;
                    $(".serviceSabu2").toggleClass("jello animated");
                    $("#webicon").attr({
                        src: "img/webicon.gif"
                    });
                }
            }

        } else {
            app2flag = true;
            $(".serviceSabu2").removeClass("jello animated");
        }

    });

    var app3flag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (700 <= sTop) {

            if (900 >= sTop) {
                if (app3flag) {
                    console.log(sTop);
                    app3flag = false;
                    $(".serviceSabu3").toggleClass("jello animated");
                    $("#directionicon").attr({
                        src: "img/directionicon.gif"
                    });
                }
            }

        } else {
            app3flag = true;
            $(".serviceSabu3").removeClass("jello animated");
        }

    });

    /*addressの表示アニメーション処理*/
    var addressflag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (1300 <= sTop) {
            if (1500 >= sTop) {
                console.log(addressflag);
                if (addressflag) {
                    addressflag = false;
                    $(".addressmap1").attr({
                        src: "img/addressMap.gif"
                    });
                    $(".addressmap2").attr({
                        src: "img/addressHead.gif"
                    });
                    $("#addressanime").toggleClass("rubberBand animated");
                }
            }

        } else {
            addressflag = true;
            $("#addressanime").removeClass("rubberBand animated");
        }
    });

    /* contactの表示アニメーション処理 */
    var contactflag = true;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();

        if (1900 <= sTop) {
            if (2000 >= sTop) {
                console.log(contactflag);
                if (contactflag) {
                    contactflag = false;
                    $(".contactMain").toggleClass("bounce animated");
                    $("#mailicon").attr({
                        src: "img/mailicon.gif"
                    });
                }
            }
        } else {
            contactflag = true;
            $(".contactMain").removeClass("bounce animated");
        }
    });


    //モーダル起動
    //モーダルウィンドウを出現させるクリックイベント
    $("#modal-open").click(function() {

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

 $(".serviceA").lightSlider({
        auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
       
   });


});