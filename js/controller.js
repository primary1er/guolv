/**
 * Created by Administrator on 15-9-24.
 */
var cModule = angular.module("myapp.controllers",[])
    .controller("homeController", function ($scope,G, $ionicScrollDelegate, $timeout){
        $scope.name = '';
        $scope.G = G;
        $scope.menuState={show:false}
        $scope.ewm=function(index){
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            for (var i = 1; i < 10; i++) {
                $scope.menuState['show_'+ i ] =false;
            };
            $scope.menuState['show_' + index] = true;
            // $scope.menuState.show=!$scope.menuState.show;
        }

        function setTime(endTime){
            endTime = new Date((endTime + ' 00:00:00').replace(/\s+/g, 'T').concat('.000+08:00'));
            var currentTime = new Date();
            var laveTime = new Date(endTime).getTime() - currentTime.getTime();
            if (laveTime < 0) {
                $scope.laveDay = $scope.laveHour = $scope.laveMinute = $scope.laveSecond = '00';
                return;
            }
            $scope.laveDay = checkTime(Math.floor(laveTime/1000/60/60/24));
            $scope.laveHour = checkTime(Math.floor(laveTime/1000/60/60%24));
            $scope.laveMinute = checkTime(Math.floor(laveTime/1000/60%60));
            $scope.laveSecond = checkTime(Math.floor(laveTime/1000%60));

            function checkTime(i) {
                if (i < 10){
                    i = '0' + i;
                }
                return i;
            }
        }

        setInterval(function(){
            $scope.$apply(function (){
                setTime('2015-12-19');
            });
        }, 1000);
        setInterval(function(){
            if($ionicScrollDelegate.$getByHandle('head').getScrollPosition().top> 2){
                $scope.bg = true;
            }
            else{
                $scope.bg = false;
            }
        }, 5);
    })
    .controller("homeSController", function ($scope,G,$ionicModal){
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.menuState={show_0:true}
        });

        $scope.menuState={show:false}

        $scope.ewm=function(index){
            var homesli=document.getElementsByClassName('homeSchan');
            for(var i=0;i<homesli.length;i++){
                homesli[i].className='homeSchan';
                $scope.menuState['show_'+ i ] =false;
            }
            homesli[index].className='homeSchan eschan';
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            $scope.menuState['show_' + index] = true;
        }
    })
    .controller("homeAController", function ($scope,G,$ionicModal){
        $ionicModal.fromTemplateUrl("goodsType.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.goodsType = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();

        }

    })
    .controller("homeBController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("ticketPrice.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.priceOrder = function () {
            var items = ['北京','上海','广州','天津','长沙','保定','定州','唐县'];
            $scope.items = items;
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();

        }
    })
    .controller("homeCController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("area.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.receiveArea = function () {
            var items = ['北京','上海','广州','天津','长沙','保定','定州','唐县'];
            $scope.items = items;
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();

        }
    })
    .controller("visaController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("visa.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.visaType = function () {
            var items = ['北京','上海','广州','天津','长沙','保定','定州','唐县'];
            $scope.items = items;
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();

        }
    })
    .controller("ticketController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("ticketType.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.ticketType = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();
        }
    })
    .controller("priceController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("priceMap.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.priceMap = function () {
            var items = ['北京','上海','广州','天津','长沙','保定','定州','唐县'];
            $scope.items = items;
            $scope.modal.show();
        }
        $scope.doSelect = function (obj) {

        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();

        }
    })
    .controller("userController", function ($scope) {
        $scope.menuState1={show:false}
        $scope.ewm1=function(){
            $scope.menuState1.show=!$scope.menuState1.show;
        }

        $scope.menuState={show:false}
        $scope.ewm=function(index){
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            for (var i = 1; i < 9; i++) {
                $scope.menuState['show_'+ i ] =false;
            };
            $scope.menuState['show_' + index] = true;
            // $scope.menuState.show=!$scope.menuState.show;
        }
        function setTime(endTime){
            var currentTime = new Date();
            var laveTime = new Date(endTime).getTime() - currentTime.getTime();
            $scope.laveDay = checkTime(Math.floor(laveTime/1000/60/60/24));
            $scope.laveHour = checkTime(Math.floor(laveTime/1000/60/60%24));
            $scope.laveMinute = checkTime(Math.floor(laveTime/1000/60%60));
            $scope.laveSecond = checkTime(Math.floor(laveTime/1000%60));

            function checkTime(i) {
                if (i < 10){
                    i = "0" + i;
                }
                return i;
            }
        }
        setInterval(function(){
            $scope.$apply(function (){
                setTime('2015-12-19 00:00:00');
            });
        }, 1000);


    })
    .controller("homeDController", function ($scope,$rootScope,$ionicModal,G, $ionicScrollDelegate, $timeout) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            $rootScope.hideTabs="";
        })

        $scope.changehomeD=function(index){
            var homeDa=document.getElementById('sub_header_list').getElementsByTagName('a');
            for(var i=0;i<homeDa.length;i++){
                homeDa[i].className="button button-clear";
            }
            homeDa[index].className="button button-clear sub_button_select";
        }
        $scope.menuState={show:false}
        $scope.ewm=function(index){
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            for (var i = 1; i < 10; i++) {
                $scope.menuState['show_'+ i ] =false;
            };
            $scope.menuState['show_' + index] = true;
            // $scope.menuState.show=!$scope.menuState.show;
        }

        function setTime(endTime){
            endTime = new Date((endTime + ' 00:00:00').replace(/\s+/g, 'T').concat('.000+08:00'));
            var currentTime = new Date();
            var laveTime = new Date(endTime).getTime() - currentTime.getTime();
            if (laveTime < 0) {
                $scope.laveDay = $scope.laveHour = $scope.laveMinute = $scope.laveSecond = '00';
                return;
            }
            $scope.laveDay = checkTime(Math.floor(laveTime/1000/60/60/24));
            $scope.laveHour = checkTime(Math.floor(laveTime/1000/60/60%24));
            $scope.laveMinute = checkTime(Math.floor(laveTime/1000/60%60));
            $scope.laveSecond = checkTime(Math.floor(laveTime/1000%60));

            function checkTime(i) {
                if (i < 10){
                    i = '0' + i;
                }
                return i;
            }
        }

        setInterval(function(){
            $scope.$apply(function (){
                setTime('2015-12-19');
            });
        }, 1000);
        setInterval(function(){
            if($ionicScrollDelegate.$getByHandle('head').getScrollPosition().top > 2){
                $scope.bg = true;
            }
            else{
                $scope.bg = false;
            }
        }, 5);
        //目的地

        $ionicModal.fromTemplateUrl("login.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showModal = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }

        $scope.items = ['北京','上海','广州','天津','长沙','保定','大连','重庆','桂林','石家庄','兰州'];


        $scope.tab = function (num) {
            var oa = document.getElementsByClassName('area')[0].getElementsByTagName("li");
            for(var i=0;i<oa.length;i++){
                oa[i].className = 'item';
            }
            oa[num].className = 'item clicked';
            if(num==0){
                var items = ['北京','上海','广州','天津','长沙','保定','定州','唐县'];
                $scope.items = items;

            }else if(num==1){
                var items = ['北九州','长崎','大阪','东京'];
                $scope.items = items;

            }else if(num==2){
                var items = ['首尔','汉城','大阪'];
                $scope.items = items;
            }
        }

    })
    .controller("setOrderController", function ($scope,$rootScope,$ionicModal) {

        $ionicModal.fromTemplateUrl("setOrder.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.setOrder = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();
        }
    })
    .controller("filterController", function ($scope,$rootScope,$ionicModal) {
        $ionicModal.fromTemplateUrl("filter.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.getFilter = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();
        }
        $scope.items = ['不限','北京','上海'];
    })
    .controller("homeDaController", function ($scope,$rootScope,$ionicModal) {
        var homeDajb=document.getElementsByClassName("homeD-f-7-2");
        var homeDajbi=document.getElementsByClassName("homeDac1");
        for(var i=1;i<homeDajb.length;i++){
            homeDajb[i].style.height="75px";
        }

        $scope.homeDa1228=function(index){
            if(homeDajb[index].style.height=="75px"){
                homeDajb[index].style.height="100%";
                homeDajbi[index].className="homeDac1 ion-ios-arrow-up"
            }else{
                homeDajb[index].style.height="75px";
                homeDajbi[index].className="homeDac1 ion-ios-arrow-down"
            }
        }
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.menus={show_0:true}
        });
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });


        $scope.menus={show:false};
        $scope.changTab=function(index){
            var oa = document.getElementsByClassName('homeD-e')[0].getElementsByTagName("a");
            for(var i=0;i<oa.length;i++){
                oa[i].className='button button-clear button-small';
                $scope.menus['show_'+ i ] =false;
            }
            oa[index].className='button button-clear clicked button-small'
            if($scope.menus['show_' + index]) {
                $scope.menus['show_' + index] = false;
                return;
            }
            $scope.menus['show_' + index] = true;
        }

        $scope.homeDa={show:false}
        $scope.homeDadiv=function(index){
            console.log(index)
            var homeDai1=document.getElementsByClassName('homeDaicon')[index];
            if($scope.homeDa['show_' + index]) {
                $scope.homeDa['show_' + index] = false;
                homeDai1.className="ion-ios-arrow-down homeDaicon";
                return;
            }else{
                homeDai1.className="ion-ios-arrow-up homeDaicon"
            }
            for (var i = 0; i < 10; i++) {
                $scope.homeDa['show_'+ i ] =false;
            };
            $scope.homeDa['show_' + index] = true;
        }
        $ionicModal.fromTemplateUrl("benefit.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showBenefit = function () {
            $scope.modal.show();
        }
        $scope.closeDetail = function () {
            $scope.modal.hide();
        }
        $scope.menuState={show:false}
        $scope.ewm=function(index){
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            for (var i = 1; i < 10; i++) {
                $scope.menuState['show_'+ i ] =false;
            };
            $scope.menuState['show_' + index] = true;
            // $scope.menuState.show=!$scope.menuState.show;
        }

        function setTime(endTime){
            endTime = new Date((endTime + ' 00:00:00').replace(/\s+/g, 'T').concat('.000+08:00'));
            var currentTime = new Date();
            var laveTime = new Date(endTime).getTime() - currentTime.getTime();
            if (laveTime < 0) {
                $scope.laveDay = $scope.laveHour = $scope.laveMinute = $scope.laveSecond = '00';
                return;
            }
            $scope.laveDay = checkTime(Math.floor(laveTime/1000/60/60/24));
            $scope.laveHour = checkTime(Math.floor(laveTime/1000/60/60%24));
            $scope.laveMinute = checkTime(Math.floor(laveTime/1000/60%60));
            $scope.laveSecond = checkTime(Math.floor(laveTime/1000%60));

            function checkTime(i) {
                if (i < 10){
                    i = '0' + i;
                }
                return i;
            }
        }

        setInterval(function(){
            $scope.$apply(function (){
                setTime('2015-12-30');
            });
        }, 1000);
        setInterval(function(){
            if($ionicScrollDelegate.$getByHandle('head').getScrollPosition().top > 2){
                $scope.bg = true;
            }
            else{
                $scope.bg = false;
            }
        }, 5);
        //目的地

    })
    .controller("homeDeController", function ($scope,$rootScope) {
        $rootScope.hideTabs='tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });


        var homeDejb=document.getElementsByClassName("homeDe-f-7-2");
        var homeDejbi=document.getElementsByClassName("homeDec1");
        for(var i=0;i<homeDejb.length;i++){
            homeDejb[i].style.height="65px";
        }

        $scope.homeDe1228=function(index){
//            alert(index)
            if(homeDejb[index].style.height=="65px"){
                homeDejb[index].style.height="100%";
                homeDejbi[index].className="homeDec1 ion-ios-arrow-up"
            }else{
                homeDejb[index].style.height="65px";
                homeDejbi[index].className="homeDec1 ion-ios-arrow-down"
            }
        }



        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.menus={show_0:true}
        });
        $scope.menus={show:false};

        $scope.changTab=function(index){
            var oa = document.getElementsByClassName('homeD-e')[0].getElementsByTagName("a");
            for(var i=0;i<oa.length;i++){
                oa[i].className='button button-clear button-small';
                $scope.menus['show_'+ i ] =false;
            }
            oa[index].className='button button-clear clicked button-small'
            if($scope.menus['show_' + index]) {
                $scope.menus['show_' + index] = false;
                return;
            }
            $scope.menus['show_' + index] = true;
        }

        $scope.homeDa={show:false}
        $scope.homeDadiv=function(index){
            console.log(index)
            var homeDai1=document.getElementsByClassName('homeDaicon')[index];
            if($scope.homeDa['show_' + index]) {
                $scope.homeDa['show_' + index] = false;
                homeDai1.className="ion-ios-arrow-down homeDaicon";
                return;
            }else{
                homeDai1.className="ion-ios-arrow-up homeDaicon"
            }
            for (var i = 0; i < 10; i++) {
                $scope.homeDa['show_'+ i ] =false;
            };
            $scope.homeDa['show_' + index] = true;
        }

    })

    .controller("touristNumController", function ($scope,$rootScope,$ionicModal) {
        $rootScope.hideTabs='tabs-item-hide';
        $ionicModal.fromTemplateUrl("tourist.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showDate = function () {
            $scope.modal.show();
        }
        $scope.cancelDate = function () {
            $scope.modal.hide();
        }
        $scope.okDate = function () {
            $scope.modal.hide();
        }
    })
    .controller("orderController", function ($scope,$rootScope, $ionicModal) {

        $scope.order9={show:true};
        $scope.order9but={show:false};
        var orinput=document.getElementsByClassName('orinput')[0];
        $scope.order9input=function(){
            if(orinput.value==''||orinput.value==undefined){
                alert('你还没有添加验证码');
                return
            }
            $scope.order9={show:false};
            $scope.order9but={show:true}
        }
        $scope.order9buto=function(){
            $scope.order9={show:true};
            $scope.order9but={show:false}
        }

        $ionicModal.fromTemplateUrl("orderPrice.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.orderPrice = function () {
            $scope.modal.show();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
        $scope.removeModal = function () {
            $scope.modal.remove();
        }
        $rootScope.hideTabs='tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.order={show:false}
        var orderchangi=document.getElementsByClassName('orderchangi')[0];
        $scope.ordershow=function(){
            $scope.order.show=!$scope.order.show;
            if( $scope.order.show){
                orderchangi.className="ion-chevron-up orderchangi"
            }else{
                orderchangi.className="ion-chevron-down orderchangi"
            }
        }
        $scope.show_ord={show:false}
        var fapaioicon=document.getElementById('order-7-1-i');
        $scope.orderfapiao=function(){
            $scope.show_ord.show=!$scope.show_ord.show;
            if($scope.show_ord.show){
                fapaioicon.className="ion-android-checkmark-circle";
            }else{
                fapaioicon.className="ion-android-radio-button-off";
            }
        }
    })
    .controller("orderAController", function ($scope,$ionicModal,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $ionicModal.fromTemplateUrl("cardsType.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showCards = function () {
            $scope.modal.show();
            //$rootScope.showFooterBar.show=false;
            $rootScope.hideTabs = true;
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }

    })
    .controller("orderBController", function ($scope,$rootScope,$ionicModal) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $ionicModal.fromTemplateUrl("provinces.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showProvinces = function () {
            var items = ['中国','北京','上海','天津','重庆','杭州','苏州'];
            $scope.items = items;
            $scope.modal.show();
            //$rootScope.showFooterBar.show=false;
            $rootScope.hideTabs = true;
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
    })
    .controller("myorderController", function ($scope,$rootScope) {
        $rootScope.hideTabs='tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.myordiv={show:false}
        $scope.myorli=function(){
            $scope.myordiv.show=!$scope.myordiv.show;
        }

        $scope.myorderTab=function(ctid,index){
            var oa = document.getElementsByClassName('myorderlist')[0].getElementsByTagName("a");
            for(var i=0;i<oa.length;i++){
                oa[i].className='button button-clear';
            }
            oa[index].className='button button-clear clicked'
        }
        $scope.myorderi={show:false}
        $scope.myordericon=function(index){
            var myorderi1=document.getElementsByClassName('changeicon')[index];
            if($scope.myorderi['show_' + index]) {
                $scope.myorderi['show_' + index] = false;
                myorderi1.className="ion-ios-arrow-down changeicon";
                return;
            }else{
                myorderi1.className="ion-ios-arrow-up changeicon"
            }
            for (var i = 0; i < 10; i++) {
                $scope.myorderi['show_'+ i ] =false;
            };
            $scope.myorderi['show_' + index] = true;

        }

    })

    .controller("selecserviceController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })

        $scope.slec={show_0:false};

        $scope.slecshow=function(index){
            if(index==0){
                $scope.slec.show_0=!$scope.slec.show_0;
            }else if(index==1){
                $scope.slec.show_1=!$scope.slec.show_1;
            }else if(index==2){
                $scope.slec.show_2=!$scope.slec.show_2;
            }
        }

        $scope.addnum=function(index){
            var slediv=document.getElementsByClassName('selserver-4-3-2')[index].innerText;
            document.getElementsByClassName('selserver-4-3-2')[index].innerText=parseInt(slediv)+1;
        }
        $scope.subnum=function(index){
            var slediv=document.getElementsByClassName('selserver-4-3-2')[index].innerText;
            if(slediv==0){
                document.getElementsByClassName('selserver-4-3-2')[index].innerText=0;
            }else{
                document.getElementsByClassName('selserver-4-3-2')[index].innerText=parseInt(slediv)-1;
            }
        }
    })

    .controller("flightController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
    })
    .controller("home-youhuiController", function ($scope) {
    })
    .controller("home-zhandianController", function ($scope) {
    })
    .controller("dateController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })


        $scope.datechangge=function(index){
            var ospan=document.getElementsByClassName('datechange');
            for(var i=0;i<ospan.length;i++){
                ospan[i].className="datechange";
            }
            ospan[index].className="date-4-2back date-4-2ba datechange";
        }


        $scope.addnumdata=function(index){
            var slediv=document.getElementsByClassName('dateaddsub')[index].innerText;
            document.getElementsByClassName('dateaddsub')[index].innerText=parseInt(slediv)+1;
        }

        $scope.subnumdata=function(index){
            var slediv=document.getElementsByClassName('dateaddsub')[index].innerText;
            if(slediv==0){
                document.getElementsByClassName('dateaddsub')[index].innerText=0;
            }else{
                document.getElementsByClassName('dateaddsub')[index].innerText=parseInt(slediv)-1;

            }
        }
    })
    .controller("cangweiController", function ($scope,$rootScope,$ionicModal) {
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.cangwei={show_0:true}
        });
        $rootScope.hideTabs=' tabs-item-hide';
        $ionicModal.fromTemplateUrl("detail.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showDetail = function () {
            $scope.modal.show();
            //$rootScope.showFooterBar.show=false;
            $rootScope.hideTabs = true;
        }
        $scope.closeDetail = function () {
            $scope.modal.hide();
        }
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })

        $scope.canchanback=function(){

        }

        $scope.cangwei={show:false}
        $scope.canchanback=function(index){
            var oli=document.getElementsByClassName('cankey');
            for(var i=0;i<oli.length;i++){
                oli[i].className='changecolor-1 cankey';
                $scope.cangwei['show_'+ i ] =false;
            }
            oli[index].className="changecolor cankey";
            if($scope.cangwei['show_' + index]) {
                $scope.cangwei['show_' + index] = false;
                return;
            }
            $scope.cangwei['show_' + index] = true;
        }

        $scope.addnumdata=function(index){
            var slediv=document.getElementsByClassName('cangweiaddsub')[index].innerText;
            document.getElementsByClassName('cangweiaddsub')[index].innerText=parseInt(slediv)+1;
        }

        $scope.subnumdata=function(index){
            var slediv=document.getElementsByClassName('cangweiaddsub')[index].innerText;
            if(slediv==0){
                document.getElementsByClassName('cangweiaddsub')[index].innerText=0;
            }else{
                document.getElementsByClassName('cangweiaddsub')[index].innerText=parseInt(slediv)-1;

            }
        }
    })
    .controller("sirenController", function ($scope,$rootScope,$ionicModal) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
        $scope.addnumdata=function(index){
            var slediv=document.getElementsByClassName('sirenaddsub')[index].innerText;
            document.getElementsByClassName('sirenaddsub')[index].innerText=parseInt(slediv)+1;
        }

        $scope.subnumdata=function(index){
            var slediv=document.getElementsByClassName('sirenaddsub')[index].innerText;
            if(slediv==0){
                document.getElementsByClassName('sirenaddsub')[index].innerText=0;
            }else{
                document.getElementsByClassName('sirenaddsub')[index].innerText=parseInt(slediv)-1;

            }
        }
        $ionicModal.fromTemplateUrl("provinces.html",{
            scope:$scope,
            animation:"slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showProvinces = function () {
            var items = ['1000','2000','3000','4000','5000'];
            $scope.items = items;
            $scope.modal.show();
            //$rootScope.showFooterBar.show=false;
            $rootScope.hideTabs = true;
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
    })
    .controller("homeBbController", function ($scope,$rootScope,$ionicModal) {
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.homeBb1={show:false};
        $scope.showhomeBb=function(){
            $scope.homeBb1.show=!$scope.homeBb1.show;
        }
        $scope.addnum=function(index){
            var slediv=document.getElementsByClassName('homeBbzj')[index].innerText;
            if(slediv==10){
                document.getElementsByClassName('homeBbzj')[index].innerText=10;
                hoBbadd.style.color="#cccccc";
            }else{
                document.getElementsByClassName('homeBbzj')[index].innerText=parseInt(slediv)+1;
            }
        }
        $scope.subnum=function(index){
            var slediv=document.getElementsByClassName('homeBbzj')[index].innerText;
            if(slediv==0){
                document.getElementsByClassName('homeBbzj')[index].innerText=0;
            }
            else{
                document.getElementsByClassName('homeBbzj')[index].innerText=parseInt(slediv)-1;
            }
        }
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.menus={show_0:true}
        });

        $scope.menus={show:false};

        $scope.changTab=function(index){
            var oa = document.getElementsByClassName('homeD-e')[0].getElementsByTagName("a");
            for(var i=0;i<oa.length;i++){
                oa[i].className='button button-clear button-small';
                $scope.menus['show_'+ i ] =false;
            }
            oa[index].className='button button-clear clicked button-small'
            if($scope.menus['show_' + index]) {
                $scope.menus['show_' + index] = false;
                return;
            }
            $scope.menus['show_' + index] = true;
        }

        $scope.homeDa={show:false}
        $scope.homeDadiv=function(index){
            console.log(index)
            var homeDai1=document.getElementsByClassName('homeDaicon')[index];
            if($scope.homeDa['show_' + index]) {
                $scope.homeDa['show_' + index] = false;
                homeDai1.className="ion-ios-arrow-down homeDaicon";
                return;
            }else{
                homeDai1.className="ion-ios-arrow-up homeDaicon"
            }
            for (var i = 0; i < 10; i++) {
                $scope.homeDa['show_'+ i ] =false;
            };
            $scope.homeDa['show_' + index] = true;
        }
    })
    .controller("ticketDateController", function ($scope,G,$ionicModal) {
        $ionicModal.fromTemplateUrl("date.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showDate = function () {
            $scope.modal.show();
        }
        $scope.closeDate = function () {
            $scope.modal.hide();
        }
        $scope.closeModal = function () {
            $scope.modal.hide();
        }
    })
    .controller("homeAcController", function ($scope,$rootScope,$ionicModal) {

        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.menus={show_0:true}
        });

        $scope.menus={show:false};

        $scope.changTab=function(index){
            var oa = document.getElementsByClassName('homeD-e')[0].getElementsByTagName("a");
            for(var i=0;i<oa.length;i++){
                oa[i].className='button button-clear button-small';
                $scope.menus['show_'+ i ] =false;
            }
            oa[index].className='button button-clear clicked button-small'
            if($scope.menus['show_' + index]) {
                $scope.menus['show_' + index] = false;
                return;
            }
            $scope.menus['show_' + index] = true;
        }

        $scope.homeDa={show:false}
        $scope.homeDadiv=function(index){
            console.log(index)
            var homeDai1=document.getElementsByClassName('homeDaicon')[index];
            if($scope.homeDa['show_' + index]) {
                $scope.homeDa['show_' + index] = false;
                homeDai1.className="ion-ios-arrow-down homeDaicon";
                return;
            }else{
                homeDai1.className="ion-ios-arrow-up homeDaicon"
            }
            for (var i = 0; i < 10; i++) {
                $scope.homeDa['show_'+ i ] =false;
            };
            $scope.homeDa['show_' + index] = true;
        }


    })
    .controller("sizeController", function ($scope,$rootScope,$ionicModal) {
        $ionicModal.fromTemplateUrl("size.html",{
            scope:$scope,
            animation:"slide-in-up"

        }).then(function (modal) {
            $scope.modal = modal
        })
        $scope.showSize = function () {
            $scope.modal.show();
        }
        $scope.closeDetail = function () {
            $scope.modal.hide();
        }
    })
    .controller("gouwushuomingController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
    })
    .controller("zengjiachangyongController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
    })
    .controller("lianxiangController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
    })
    .controller("kongController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })
    })
    .controller("gongsijieshaoController", function ($scope,$rootScope,$ionicScrollDelegate) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        })

        var gongsijieshao1=document.getElementsByClassName("gsjechangge")[0];
        var yljieshao=document.getElementsByClassName("gongsijieshao-div1")[0];
        yljieshao.style.height="40px";

        $scope.gsjechangge=function(){
            if(yljieshao.style.height=="40px"){
                gongsijieshao1.className="ion-chevron-up gsjechangge";
                yljieshao.style.height="100%";
            }else{
                yljieshao.style.height="40px";
                gongsijieshao1.className="ion-chevron-down gsjechangge";
            }
        }
        $scope.shipScrollTo = function (cls) {
            //$ionicScrollDelegate.scrollTop(true);
            //
            var height = document.getElementsByClassName(cls)[0].offsetTop;
            $ionicScrollDelegate.scrollTo(0,height,true);
        }

    })
    .controller("cruiseController", function ($scope,$rootScope) {
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.cruise={show_0:true}
        });
        var scrollul=document.getElementsByClassName('scrollul')[0];
        var scrollli=document.getElementsByClassName('selecli');
        scrulwid=80*(scrollli.length);
        scrollul.style.width=scrulwid+"px";

        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.cruise={show:false}
        $scope.cruchange=function(index){
            var oa = document.getElementsByClassName('selecli');
            var oa1=document.getElementsByClassName('cruise-2')[0].getElementsByTagName('a');
            for(var i=0;i<oa.length;i++){
                oa[i].className='selecli';
                oa1[i].className=''
                $scope.cruise['show_'+ i ] =false;

            }
            oa[index].className="crechancolor selecli";
            oa1[index].className="crechancolor1";

            if($scope.cruise['show_' + index]) {
                $scope.cruise['show_' + index] = false;
                return;
            }
            $scope.cruise['show_' + index] = true;
        }

    })

    .controller("xiugaiController", function ($scope,$rootScope) {

        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.cruise={show_0:true}
        });

        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.cruise={show:false}
        $scope.cruchange=function(index){
            var oa = document.getElementsByClassName('selecli');
            var oa1=document.getElementsByClassName('cruise-2')[0].getElementsByTagName('a');
            for(var i=0;i<oa.length;i++){
                oa[i].className='selecli';
                oa1[i].className=''
                $scope.cruise['show_'+ i ] =false;

            }
            oa[index].className="crechancolor selecli";
            oa1[index].className="crechancolor1";

            if($scope.cruise['show_' + index]) {
                $scope.cruise['show_' + index] = false;
                return;
            }
            $scope.cruise['show_' + index] = true;
        }

    })
    .controller("vipannController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });


    })
    .controller("mynoticeController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });



    })
    .controller("errController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("err1Controller", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("ordersucController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("ordererrController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("youhuiquanjihuoController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("xingqianController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("dingdanxiangqingController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("shoucangController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("sirendingzhiController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("wodeyouhuiquanController", function ($scope,$rootScope) {
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.cruise={show_0:true}
        });

        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.cruise={show:false}
        $scope.cruchange=function(index){
            var oa = document.getElementsByClassName('selecli');
            var oa1=document.getElementsByClassName('wodeyouhuiquan')[0].getElementsByTagName('a');
            for(var i=0;i<oa.length;i++){
                oa[i].className='selecli';
                oa1[i].className=''
                $scope.cruise['show_'+ i ] =false;

            }
            oa[index].className="crechancolor selecli";
            oa1[index].className="crechancolor1";

            if($scope.cruise['show_' + index]) {
                $scope.cruise['show_' + index] = false;
                return;
            }
            $scope.cruise['show_' + index] = true;
        }

    })
    .controller("jifenController", function ($scope,$rootScope) {
        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.cruise={show_0:true}
        });

        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.cruise={show:false}
        $scope.cruchange=function(index){
            var oa = document.getElementsByClassName('selecli');
            var oa1=document.getElementsByClassName('wodeyouhuiquan')[0].getElementsByTagName('a');
            for(var i=0;i<oa.length;i++){
                oa[i].className='selecli';
                oa1[i].className=''
                $scope.cruise['show_'+ i ] =false;

            }
            oa[index].className="crechancolor selecli";
            oa1[index].className="crechancolor1";

            if($scope.cruise['show_' + index]) {
                $scope.cruise['show_' + index] = false;
                return;
            }
            $scope.cruise['show_' + index] = true;
        }

    })
    .controller("shichangController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
    })
    .controller("dengluController", function ($scope,$rootScope) {

        $scope.$on("$ionicView.beforeEnter",function(){
//            进入页面之前默认显示一条数据
            $scope.denglu={show_0:true}
        });

        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.denglu={show:false}
        $scope.dlborb=function(index){
            var dlulli=document.getElementsByClassName('dengluli');
            for(var i=0;i<dlulli.length;i++){
                dlulli[i].className="dengluli";
                $scope.denglu['show_'+ i ] =false;
            }
            dlulli[index].className="dengluli dengluli1";
            $scope.denglu['show_' + index] = true;

        }
    })
    .controller("vipregController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.cancel=function(){
            alert('已退出')
        }

    })
    .controller("stageController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        var stagecolor =document.getElementsByClassName('stagecolor');
        $scope.stagechange = function(index){
            for(var i=0;i<stagecolor.length;i++){
                stagecolor[i].className="stage-1-1 stagecolor";
            }
            stagecolor[index].className="stage-1-2 stagecolor";

        }
        $scope.lovecomment=function(){

        }
        $scope.lovepraise=function(){

        }
    })
    .controller("stagedetailController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });

        $scope.stadet={show:false};

        $scope.plhide=function(){
            $scope.stadet={show:true};

        }
        $scope.quqeding=function(){
            $scope.stadet={show:false};
        }

    })
    .controller("personalfileController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.cancel=function(){
            alert('已退出')
        }

    })
    .controller("jiudianController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.cancel=function(){
            alert('已退出')
        }

    })
    .controller("vipController", function ($scope,$rootScope) {
        $rootScope.hideTabs=' tabs-item-hide';
        $scope.$on("$destroy",function(){
            console.log('上个页面销毁了')
            $rootScope.hideTabs="";
        });
        $scope.cancel=function(){
            alert('已退出')
        }

    })
    .controller("userController", function ($scope,G, $ionicScrollDelegate, $timeout){
        $scope.name = '';
        $scope.G = G;
        $scope.menuState={show:false}
        $scope.ewm=function(index){
            if($scope.menuState['show_' + index]) {
                $scope.menuState['show_' + index] = false;
                return;
            }
            for (var i = 1; i < 10; i++) {
                $scope.menuState['show_'+ i ] =false;
            };
            $scope.menuState['show_' + index] = true;
            // $scope.menuState.show=!$scope.menuState.show;
        }

        function setTime(endTime){
            endTime = new Date((endTime + ' 00:00:00').replace(/\s+/g, 'T').concat('.000+08:00'));
            var currentTime = new Date();
            var laveTime = new Date(endTime).getTime() - currentTime.getTime();
            if (laveTime < 0) {
                $scope.laveDay = $scope.laveHour = $scope.laveMinute = $scope.laveSecond = '00';
                return;
            }
            $scope.laveDay = checkTime(Math.floor(laveTime/1000/60/60/24));
            $scope.laveHour = checkTime(Math.floor(laveTime/1000/60/60%24));
            $scope.laveMinute = checkTime(Math.floor(laveTime/1000/60%60));
            $scope.laveSecond = checkTime(Math.floor(laveTime/1000%60));

            function checkTime(i) {
                if (i < 10){
                    i = '0' + i;
                }
                return i;
            }
        }

        setInterval(function(){
            $scope.$apply(function (){
                setTime('2015-12-19');
            });
        }, 1000);
        setInterval(function(){
            if($ionicScrollDelegate.$getByHandle('head').getScrollPosition().top > 2){
                $scope.bg = true;
            }
            else{
                $scope.bg = false;
            }
        }, 5);
    })
