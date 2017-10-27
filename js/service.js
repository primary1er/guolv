/**
 * Created by Administrator on 15-9-24.
 */
var serviceModule = angular.module('myapp.service',[]);
serviceModule
    .factory("NewsFactory", function ($rootScope,$resource,G) {
    var apiUrl = G.api;
    var contents = {};      //读取到数据之后就保存到该对象里面，便于以后调用
    var catid = 20;        //新闻的id就是20

    //定义$resource服务对象，通过该对象读取内容
    var resoureObj = $resource(apiUrl,{},{
        query:{
            method:'GET',
            params:{
                a:'getPortalList',
                catid:'@catid', //形式参数
                page:'@page'    //不确定读取第几页的数据，暂时用@page代替一下
            },
            timeout:20000
        }
    })

    //返回查询数据的方法
    return {
        //读取第一页的数据
        getFirst: function () {
            var hasMoreNews = true; //是否有更多的内容
            resoureObj.query({
                page:1,      //默认读取第一页的数据，每次上拉、下拉刷新page会++
                catid:catid  //实际参数
            }, function (res) {
                if(res.result.length<20){
                    hasMoreNews = false;    //没有更多内容
                }
                contents = {
                    hasMoreNews:hasMoreNews,
                    page:2,
                    data:res.result
                }
                //console.log(contents)
                //异步请求成功获得数据后，通知一下控制器
                $rootScope.$broadcast('ok');
            })
        },
        //读取新闻列表的数据
        getNews: function () {
            return contents;
        },
        //加载更多内容
        getMoreNews: function () {
            //解决异步请求可能有时候loadMore,m没有读取到数据
            //console.log(contents==false); //即使{}空对象，他的值也不等于false
            if(contents.data ==undefined){
                return false;
            }
            //先查询旧的内容
            var hasMoreNews = contents.hasMoreNews;
            var page = contents.page;
            var oldData = contents.data;

            //查询新的内容
            resoureObj.query({
                page:page,
                catid:catid
            }, function (res) {
                page++;
                if(res.result.length<20){
                    hasMoreNews = false;
                }
                contents = {
                    hasMoreNews:hasMoreNews,
                    page:page,
                    data:oldData.concat(res.result)
                }
                $rootScope.$broadcast("ok")
            })
        },
        //查询是否有更多内容
        hasMoreNews: function () {
            if(contents.hasMoreNews==undefined){
                return false;
            }else{
                return contents.hasMoreNews;
            }
        },
        //根据catid读取分类内容
        getNewsByCatId:function(cid){
            catid = cid;
            this.getFirst();
        }
        //读取社区新闻的数据
        //发表帖子
        //查询帖子列表
    }
})
    .factory("NewsContentFactory", function ($rootScope,$resource,G) {
        var api = G.api;    //http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=121
        var newsContent = {};//保存新闻的详细内容

        var resourceObj = $resource(api,{},{
            query:{
                method:"GET",
                timeout:20000,
                params:{
                    a:"getPortalArticle",
                    aid:"@aid"
                }
            }
        })
        return {
            //查询到内容之后给控制器广播一下
            getFirst: function (aid) {
                //根据每篇文章的序号,查询详细内容
                resourceObj.query({
                    aid: aid
                }, function (res) {
                    //console.log(res);
                    newsContent = res.result;

                    $rootScope.$broadcast("News.content");
                })
            },
            getContent: function () {
                    return newsContent;
            }
        }
    })
    .factory("ComFactory", function ($rootScope,$resource,G) {
        //帖子列表地址 http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=1
        var api = G.api;
        var contents = {};  //定义空对象来保存查询的内容
        var ofid = 2;    //默认的帖子的分类id就是2

        //通过$resource来发送ajax请求
        var resourceObj = $resource(api,{}, {
            query:{
                method:"GET",
                params:{
                    a:"getThreadList",
                    fid:"@fid",
                    page:"@page"
                },
                timeout:20000
            }
        })
        return {
            //获得第一页的数据
            getFirst: function () {
                var hasNextPage = true;     //是否还有更多内容
                resourceObj.query({
                    fid:ofid,
                    page:1
                }, function (res) {
                    //console.log(res);
                    if(res.result.length<20){
                        hasNextPage = false;        //没有更多内容
                    }
                    contents = {
                        hasNextPage:hasNextPage,
                        nextPage:2,
                        data:res.result
                    }
                    $rootScope.$broadcast("Community.ok");
                })
            },
            getList: function () {
                if(contents.data == undefined){
                    return false;
                }else{
                    return contents.data;
                }
            }
        }
    })
    .factory("ComDetailFactory", function ($rootScope,$resource,G) {
        //帖子详情地址 http://www.phonegap100.com/appapi.php?a=getThreadContent&tid=138
        var api = G.api;
        var contents = {};  //定义空对象来保存查询的内容

        var resourceObj = $resource(api,{},{
            query:{
                method:"GET",
                timeout:20000,
                params:{
                    a:"getThreadContent",
                    tid:"@tid"
                }
            }
        })
        return {
            //获得第一页的数据
            getFirst: function (tid) {
                resourceObj.query({
                    tid:tid
                }, function (res) {
                    //console.log(res);
                    contents = {
                        data:res.result
                    }
                    $rootScope.$broadcast("Community.detail");
                })
            },

            getDetail: function () {
                if(contents.data==undefined){
                    return false;
                }else{
                    return contents.data;
                }
            }
        }
    })


var directiveModule=angular.module("myapp.hideTabs",[]);

directiveModule.directive('hideTabs',function($scope,$rootScope){
    return{
        restrict:'AE',
        link:function($scope){
            $rootScope.hideTabs="tabs-item-hide";

            $scope.$on("$destroy",function(){
                $rootScope.hideTabs='';
            })
        }
    }
})