(function (window, angular) {
    "use strict";

    angular.module('module.main', [
        //lib
        'ui.bootstrap',
        'ui.router',
        'restangular',
        'angular-growl',
        'angularSpinner',
        'angular-confirm',
        'treeControl',
        'ui.tree',
        'angular.filter',

        //template
        'module.templates',
        //app
        'module.login',
        'module.help',
        'module.config',
        'module.common',
        'module.widgets',
        'module.navbar',
        'module.footer',
        'module.home',
        'module.machine',
        'module.goods',
        'module.advertise',
        'module.report',
        'module.system',
        'module.org',
        'module.role',
        'module.user',
        'module.promotion'
    ]).config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'RestangularProvider',
        'ivhTreeviewOptionsProvider',
        'growlProvider',
        'appConfig',
        function ($stateProvider, $locationProvider, $urlRouterProvider,
                  RestangularProvider, ivhTreeviewOptionsProvider, growlProvider, appConfig) {

            $locationProvider.hashPrefix('!').html5Mode(false);

            $urlRouterProvider.otherwise("machine/list");


            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'login.main.html',
                controller: 'login.MainController'
            }).state(appConfig.stateName.home, {
                url: '/home',
                templateUrl: 'home.main.html',
                controller: 'home.MainController'
            }).state(appConfig.stateName.homeDashboard, {
                url: '/dashboard',
                templateUrl: 'home.dashboard.html',
                controller: 'home.DashboardController'
            })
                //.state(appConfig.stateName.help, {
                //    url: '/help',
                //    templateUrl: 'help.main.html',
                //    controller: 'help.MainController'
                //})
                .state(appConfig.stateName.machine, {
                    url: '/machine',
                    templateUrl: 'machine.main.html',
                    controller: 'machine.MainController'
                }).state(appConfig.stateName.machineList, {
                    url: '/list',
                    templateUrl: 'machine.list.html',
                    controller: 'machine.ListController'
                }).state(appConfig.stateName.machineAisle, {
                    url: '/aisle',
                    templateUrl: 'machine.aisle-template.html',
                    controller: 'machine.AisleTemplateController'
                }).state(appConfig.stateName.machineAisleList, {
                    url: '/aisleList?id',
                    templateUrl: 'machine.aisle-list.html',
                    controller: 'machine.AisleListController'
                }).state(appConfig.stateName.machineAisleGoodsList, {
                    url: '/aisleGoods?id',
                    templateUrl: 'machine.aisle-goods-list.html',
                    controller: 'machine.AisleGoodsListController'
                }).state(appConfig.stateName.machineType, {
                    url: '/type',
                    templateUrl: 'machine.type.html',
                    controller: 'machine.TypeController'
                }).state(appConfig.stateName.machineMap, {
                    url: '/map',
                    templateUrl: 'machine.map.html',
                    controller: 'machine.MapController'
                }).state(appConfig.stateName.machineCopy, {
                    url: '/copy',
                    templateUrl: 'machine.copy.html',
                    controller: 'machine.CopyController'
                }).state(appConfig.stateName.goods, {
                    url: '/goods',
                    templateUrl: 'goods.main.html',
                    controller: 'goods.MainController'
                }).state(appConfig.stateName.goodsList, {
                    url: '/list',
                    templateUrl: 'goods.list.html',
                    controller: 'goods.ListController'
                }).state(appConfig.stateName.goodsCreate, {
                    url: '/create?mode&id',
                    templateUrl: 'goods.create.html',
                    controller: 'goods.CreateController'
                }).state(appConfig.stateName.advertise, {
                    url: '/advertise',
                    templateUrl: 'advertise.main.html',
                    controller: 'advertise.MainController'
                }).state(appConfig.stateName.advertiseList, {
                    url: '/list',
                    templateUrl: 'advertise.list.html',
                    controller: 'advertise.ListController'
                }).state(appConfig.stateName.advertisePushList, {
                    url: '/pushList',
                    templateUrl: 'advertise.finish.push.html',
                    controller: 'advertise.FinishPushController'
                }).state(appConfig.stateName.report, {
                    url: '/report',
                    templateUrl: 'report.main.html',
                    controller: 'report.MainController'
                }).state(appConfig.stateName.reportOrder, {
                    url: '/order',
                    templateUrl: 'report.order-list.html',
                    controller: 'report.OrderListController'
                }).state(appConfig.stateName.reportFillGoods, {
                    url: '/fillGoods',
                    templateUrl: 'report.fill-goods-list.html',
                    controller: 'report.FillGoodsListController'
                }).state(appConfig.stateName.reportProfit, {
                    url: '/profit',
                    templateUrl: 'report.profit-list.html',
                    controller: 'report.ProfitListController'
                }).state(appConfig.stateName.system, {
                    url: '/system',
                    templateUrl: 'system.main.html',
                    controller: 'system.MainController'
                }).state(appConfig.stateName.systemPay, {
                    url: '/sysPay',
                    templateUrl: 'system.pay.html',
                    controller: 'system.PayController'
                }).state(appConfig.stateName.systemAndroid, {
                    url: '/sysAndroid',
                    templateUrl: 'system.android.html',
                    controller: 'system.AndroidController'
                }).state(appConfig.stateName.systemEgocard, {
                    url: '/sysEgocard',
                    templateUrl: 'system.egocard.html',
                    controller: 'system.EgocardController'
                }).state(appConfig.stateName.org, {
                    url: '/org',
                    templateUrl: 'org.main.html',
                    controller: 'org.MainController'
                }).state(appConfig.stateName.role, {
                    url: '/role',
                    templateUrl: 'role.main.html',
                    controller: 'role.MainController'
                }).state(appConfig.stateName.roleList, {
                    url: '/list',
                    templateUrl: 'role.list.html',
                    controller: 'role.ListController'
                }).state(appConfig.stateName.user, {
                    url: '/user',
                    templateUrl: 'user.main.html',
                    controller: 'user.MainController'
                }).state(appConfig.stateName.userList, {
                    url: '/list',
                    templateUrl: 'user.list.html',
                    controller: 'user.ListController'
                }).state(appConfig.stateName.promotion, {
                    url: '/promotion',
                    templateUrl: 'promotion.main.html',
                    controller: 'promotion.MainController'
                }).state(appConfig.stateName.promotionDesc, {
                    url: '/desc',
                    templateUrl: 'promotion.desc.html',
                    controller: 'promotion.DescController'
                }).state(appConfig.stateName.promotionList, {
                    url: '/list',
                    templateUrl: 'promotion.list.html',
                    controller: 'promotion.ListController'
                });

            RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json;charset=UTF-8'});
            RestangularProvider.setBaseUrl(appConfig.rootContext);

            growlProvider.globalTimeToLive(5000);
            growlProvider.globalPosition('top-center');

            //tree
            ivhTreeviewOptionsProvider.set({
                idAttribute: 'id',
                labelAttribute: 'label',
                childrenAttribute: 'children',
                selectedAttribute: 'selected',
                useCheckboxes: true,
                expandToDepth: 1,
                indeterminateAttribute: '__ivhTreeviewIndeterminate',
                defaultSelectedState: false,
                validate: true,
                twistieExpandedTpl: "<i class='fa fa-folder-o'></i>",
                twistieCollapsedTpl: "<i class='fa fa-folder-open-o'></i>",
                twistieLeafTpl: "<i class='fa fa-file-o'></i>"//,
                //nodeTpl: '...'
            });

        }
    ]).run([
        '$rootScope',
        '$state',
        'Restangular',
        'userService',
        'alertService',
        'appConfig',
        function ($rootScope, $state, Restangular, userService, alertService, appConfig) {
            Restangular.setErrorInterceptor(
                function (resp) {
                    if (resp && resp.status === 401 &&
                        resp.data && resp.data.path &&
                        (_.endsWith(resp.data.path, '/login') ||
                        _.endsWith(resp.data.path, 'user/auth'))) {
                        return true;
                    } else if (resp && resp.status === 401) {
                        alertService.warning('请先登录。');
                        $state.go(appConfig.stateName.login);
                    } else if (resp && resp.status === 403) {
                        alertService.error('只有管理员能使用这个功能，请用管理员账号登录。');
                    } else {
                        alertService.error('无法访问易购后台系统，请确认是否有网络！');
                    }
                    //loggerService.error(response);
                    return false; // stop the promise chain
                }
            );

            userService.getAuthUser().then(function (resp) {
                userService.setCurrentUser(resp);
            });

            $rootScope.haveAuth = function (ruleCode, roleRule) {
                var isHave = false;
                if (ruleCode.length <= 4) {
                    _.forEach(roleRule, function (rule) {
                        if (rule.indexOf(ruleCode) === 0) {
                            isHave = true;
                            return;
                        }
                    });
                    if (isHave) {
                        return true;
                    }
                }
                return _.contains(roleRule, ruleCode);
            };
        }
    ]);

})(window, window.angular);

(function (window, angular) {
    "use strict";

    angular.module('module.config', [])
        .constant('appConfig', {
            rootContext: window.location.pathname,

            stateName: {
                login: 'login',
                home: 'home',
                homeDashboard: 'home.dashboard',
                //help: 'help',
                machine: 'machine',
                machineList: 'machine.list',
                machineAisle: 'machine.aisle',
                machineAisleList: 'machine.aisleList',
                machineAisleGoodsList: 'machine.aisleGoodsList',
                machineType: 'machine.type',
                machineMap: 'machine.map',
                machineCopy: 'machine.copy',
                goods: 'goods',
                goodsList: 'goods.list',
                goodsCreate: 'goods.create',
                advertise: 'advertise',
                advertiseList: 'advertise.list',
                advertisePushList: 'advertise.push',
                report: 'report',
                reportOrder: 'report.order',
                reportFillGoods: 'report.fillGoods',
                reportProfit: 'report.profit',
                system: 'system',
                systemPay: 'system.pay',
                systemAndroid: 'system.android',
                systemEgocard: 'system.egocard',
                org: 'org',
                role: 'role',
                roleList: 'role.list',
                user: 'user',
                userList: 'user.list',
                promotion: 'promotion',
                promotionDesc: "promotion.desc",
                promotionList: "promotion.list",
                promotionCreate: "promotion.create"
            },

            imageServer: {
                url: 'http://store.easygovm.com/'
            },

            userStatus: {
                new: 'New',
                active: 'Active',
                inactive: 'Inactive'
            },

            changeType: {
                ChangeMockerRules: {
                    typeName: 'ChangeMockerRules',
                    icon: 'fa-retweet',
                    theme: 'panel-primary'
                },
                ChangeMockerName: {
                    typeName: 'ChangeMockerName',
                    icon: 'fa-certificate',
                    theme: 'panel-info'
                }

            },

            alertMsg: {
                userModule: {
                    '-11': '原密码错误，无法修改密码！',
                    '-12': '配置文件找不到！',
                    '-13': '邮件发送失败！',
                    '-14': '重置密码链接失效！',
                    '-15': '用户名不存在'
                }
            }

        }).run([
            '$rootScope',
            'appConfig',
            function ($rootScope, appConfig) {
                $rootScope.appConfig = appConfig;
            }]);

})(window, window.angular);

(function (window, angular) {
  "use strict";

  angular.module('module.advertise', ['module.navbar',
                                      'module.widgets.advertise']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.common', []);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.footer', []);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.goods', ['module.common']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.help', []);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.home', ['module.common']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.login', [
      'module.widgets.user'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine', [
                'module.navbar',
                'module.widgets.machine'
            ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.navbar', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.org', ['module.navbar','module.widgets.org']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.promotion', ['module.common']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.report', ['module.navbar',
                                   'module.widgets.report']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.role', ['module.navbar','module.widgets.role']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.system', ['module.navbar',
                                   'module.widgets.system']);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.user', ['module.navbar','module.widgets.user']);

})(window, window.angular);
(function(window, angular) {
	"use strict";

	angular.module('module.widgets', [ 
	                                  'module.widgets.advertise',
	                                  'module.widgets.goods',
	                                  'module.widgets.machine',
	                                  'module.widgets.org',
	                                  'module.widgets.report',
	                                  'module.widgets.role',
	                                  'module.widgets.system',
	                                  'module.widgets.user'
	                                 ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.advertise')
    .controller('advertise.FinishPushController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.advertise')
    .controller('advertise.ListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.advertise')
    .controller('advertise.MainController', [
          '$scope',
          '$state',
          function ($scope, $state){
              if ($.AdminLTE.layout) {
                  $.AdminLTE.layout.activate();
              }
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('advertiseService', [
            '$q', 'Restangular', '$http', 'growl',
            function ($q, Restangular, $http, growl) {
                return {

                    getAllAdvertise: function (pageStart, pageSize) {
                        return Restangular.all('advertise').all('page').post({
                            pageStart: pageStart,
                            pageSize: pageSize
                        });
                    },

                    getAdvertiseById: function (id) {
                        return Restangular.one('advertise', id).get();
                    },

                    createAdvertise: function (advertise) {
                        return Restangular.all('advertise').post(advertise);
                    },

                    updateAdvertise: function (advertise) {
                        return Restangular.one('advertise', advertise.advertisementId).customPUT(advertise);
                    },

                    deleteAdvertise: function (id) {
                        return Restangular.one('advertise', id).remove();
                    },

                    uploadFile: function (advertiseInfo, callback) {
                        var fd = new FormData();
                        fd.append('file', advertiseInfo.advertiseFile);
                        fd.append('type', advertiseInfo.advertisementType);
                        $http.post('advertise/upload', fd, {
                            withCredentials: true,
                            transformRequest: angular.identity,
                            transformResponse: angular.identity,
                            headers: {'Content-Type': undefined}
                        }).success(function (data) {
                            callback(angular.fromJson(data));
                            growl.success("文件上传成功！");
                        }).error(function (data) {
                            growl.error("文件上传失败，请重新上传。");
                        });
                    },

                    getAllFinishPush: function (machineCode, pageStart, pageSize) {
                        return Restangular.all('advertise').all('finishPushSearch').post({
                            machineCode: machineCode || '',
                            pageStart: pageStart,
                            pageSize: pageSize
                        });
                    },

                    deleteAdvertiseSend: function (id) {
                        return Restangular.all('advertise').one('finishPush', id).remove();
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('alertService', [
            'growl',
            function (growl) {
                return {

                    error: function (message) {
                        growl.error(message);
                    },

                    warning: function (message) {
                        growl.warning(message);
                    },

                    info: function (message) {
                        growl.info(message,{ttl: 10000});
                    },

                    success: function (message) {
                        growl.success(message);
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('goodsService', [
            '$q', 'Restangular', '$http', 'growl',
            function ($q, Restangular, $http, growl) {
                return {

                    getAllGoods: function (skuBrand, page, size) {
                        return Restangular.all('goods').customGET(null, {
                            'skuBrand': skuBrand,
                            'page': page,
                            'size': size
                        })
                    },

                    getGoodsById: function (id) {
                        return Restangular.one('goods', id).get();
                    },

                    createGoods: function (goods) {
                        return Restangular.all('goods').post(goods);
                    },

                    updateGoods: function (goods) {
                        return Restangular.one('goods', goods.skuId).customPUT(goods);
                    },

                    deleteGoods: function (id) {
                        return Restangular.one('goods', id).remove();
                    },

                    saveGoods: function (goods, callback) {
                        var fd = new FormData();
                        fd.append('file', goods.skuPicFile);
                        $http.post('goods/upload', fd, {
                            withCredentials: true,
                            transformRequest: angular.identity,
                            transformResponse: angular.identity,
                            headers: {'Content-Type': undefined}
                        }).success(function (data) {
                            callback(data);
                            growl.success("图片上传成功！");
                        }).error(function (data) {
                            growl.error("图片上传失败，请重新上传。");
                        });
                    },

                    getAllFilterBrand: function () {
                        return Restangular.all('goods').all('brand').getList();
                    },

                    getAllFilterSubject: function (skuBrand) {
                        return Restangular.all('goods').all('subject').getList({'skuBrand': skuBrand});
                    },

                    getAllFilterGoods: function (skuBrand, skuSubject) {
                        return Restangular.all('goods').all('size').getList({
                            'skuBrand': skuBrand,
                            'skuSubject': skuSubject
                        });
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";
    function toInteger(floatNum) {
        var ret = {times: 1, num: 0};
        if (Math.floor(floatNum) === floatNum) {
            ret.num = floatNum;
            return ret
        }
        var strfi = floatNum + '';
        var dotPos = strfi.indexOf('.');
        var len = strfi.substr(dotPos + 1).length;
        var times = Math.pow(10, len);
        var intNum = parseInt(floatNum * times + 0.5, 10);
        ret.times = times;
        ret.num = intNum;
        return ret
    }

    angular.module('module.common')
        .factory('machineService', [
            'Restangular',
            function (Restangular) {
                return {

                    getAllMachine: function (searchMachine) {
                        return Restangular.all('machine').all('page').post(searchMachine)
                    },
                    getAllMachineLocation: function () {
                        return Restangular.all('machine').all('machinemap').getList();
                    },
                    getAllMachineNoPage: function (orgId) {
                        return Restangular.all('machine').customGET(null, {'orgId': orgId})
                    },

                    getMachineById: function (id) {
                        return Restangular.one('machine', id).get();
                    },

                    bindingTemplate: function (bindingTemplateView) {
                        return Restangular.all('machine').all('bindingTemplate').post(bindingTemplateView);
                    },

                    getMachineTypeId: function (bindingTemplateView) {
                        return Restangular.all('machine').all('getMachineTypeId').post(bindingTemplateView);
                    },

                    updateMachine: function (machine) {
                        return Restangular.one('machine', machine.machineId).customPUT(machine);
                    },

                    deleteMachine: function (id) {
                        return Restangular.one('machine', id).remove();
                    },

                    getAllMachineTypes: function () {
                        return Restangular.all('machineType').getList();
                    },

                    createMachineType: function (machine) {
                        return Restangular.all('machineType').post(machine);
                    },

                    updateMachineType: function (machine) {
                        return Restangular.one('machineType', machine.id).customPUT(machine);
                    },

                    deleteMachineType: function (id) {
                        return Restangular.one('machineType', id).remove();
                    },

                    getAllMachineAisleTemplateDescs: function () {
                        return Restangular.all('aisleDesc').getList();
                    },

                    getAllMachineAisleTemplateDescsByTypeId: function (typeId) {
                        return Restangular.all('aisleDesc').getList({'typeId': typeId});
                    },

                    getMachineAisleTemplateDesc: function (id) {
                        return Restangular.one('aisleDesc', id).get();
                    },

                    createMachineAisleTemplateDesc: function (aisleTemplateDesc) {
                        return Restangular.all('aisleDesc').post(aisleTemplateDesc);
                    },

                    updateMachineAisleTemplateDesc: function (aisleTemplateDesc) {
                        return Restangular.one('aisleDesc', aisleTemplateDesc.goodsAisleTemplateId).customPUT(aisleTemplateDesc);
                    },

                    deleteMachineAisleTemplateDesc: function (id) {
                        return Restangular.one('aisleDesc', id).remove();
                    },

                    getAllMachineAisleTemplates: function (templateId) {
                        return Restangular.all('aisle').getList({'templateId': templateId});
                    },

                    createMachineAisleTemplate: function (aisleTemplate) {
                        return Restangular.all('aisle').post(aisleTemplate);
                    },

                    updateMachineAisleTemplate: function (aisleTemplate) {
                        return Restangular.one('aisle', aisleTemplate.id).customPUT(aisleTemplate);
                    },

                    deleteMachineAisleTemplate: function (id) {
                        return Restangular.one('aisle', id).remove();
                    },

                    getAllMachineAisleInfos: function (machineId) {
                        return Restangular.all('aisleGoods').getList({'machineId': machineId});
                    },

                    createMachineAisleInfo: function (machineAisleInfo) {
                        return Restangular.all('aisleGoods').post(machineAisleInfo);
                    },

                    updateMachineAisleInfo: function (machineAisleInfo) {
                        var machineAisleInfoPut = angular.copy(machineAisleInfo);
                        var aisleGoodsPrice = toInteger(machineAisleInfoPut.aisleGoodsPrice);
                        var aisleOriginalPrice = toInteger(machineAisleInfoPut.aisleOriginalPrice);
                        machineAisleInfoPut.aisleGoodsPrice = aisleGoodsPrice.num * 100 / aisleGoodsPrice.times;
                        machineAisleInfoPut.aisleOriginalPrice = aisleOriginalPrice.num * 100 / aisleOriginalPrice.times;
                        return Restangular.one('aisleGoods', machineAisleInfoPut.machineId).customPUT(machineAisleInfoPut);
                    },

                    deleteMachineAisleInfo: function (id) {
                        return Restangular.one('aisleGoods', id).remove();
                    },

                    machineCopy: function (from, to) {
                        return Restangular.all('aisleGoods').customPOST({from: from, to: to}, "copy");
                    },

                    getMachineAddressById: function (id) {
                        return Restangular.one('machineAddress', id).get();
                    },

                    createMachineAddress: function (machineAddress) {
                        return Restangular.all('machineAddress').post(machineAddress);
                    },

                    updateMachineAddress: function (machineAddress) {
                        return Restangular.one('machineAddress', machineAddress.machineId).customPUT(machineAddress);
                    },

                    getAllProvince: function () {
                        return Restangular.all('machineAddress').all('province').getList();
                    },

                    getAllCity: function (provinceId) {
                        return Restangular.all('machineAddress').all('city').getList({'provinceId': provinceId});
                    },

                    getAllArea: function (cityId) {
                        return Restangular.all('machineAddress').all('area').getList({'cityId': cityId});
                    },

                    createMachineMessageForAdvertise: function (advertiseSend) {
                        return Restangular.all('machineMsg').all('advertise').post(advertiseSend);
                    },

                    createMachineMessageForVersion: function (machineMsgVersion) {
                        return Restangular.all('machineMsg').all('version').post(machineMsgVersion);
                    },

                    createMachineMessageForReboot: function (machineId) {
                        return Restangular.all('machineMsg').all('reboot').post({'machineId': machineId});
                    }


                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('orgService', [
            'Restangular',
            function (Restangular) {
                return {

                    getAllOrgStructure: function () {
                        return Restangular.one('org').get();
                    },
                    getUserOrgs: function (userName) {
                        return Restangular.one('org').customGET("userorgs", {userName: userName});
                    },
                    getOrgStructureById: function (id) {
                        return Restangular.one('org', id).get();
                    },

                    createOrgStructure: function (org) {
                        return Restangular.all('org').post(org);
                    },

                    updateOrgStructure: function (org) {
                        return Restangular.one('org', org.orgId).customPUT(org);
                    },

                    deleteOrgStructure: function (id) {
                        return Restangular.one('org', id).remove();
                    }
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('pageService', [
            'usSpinnerService',
            function (usSpinnerService) {
                return {

                    mask: function (key) {
                        usSpinnerService.spin(key);
                    },

                    unmask: function (key) {
                        usSpinnerService.stop(key);
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('reportService', [
            '$q', '$timeout', '$window', 'growl',
            'Restangular',
            '$http',
            function ($q, $timeout, $window, growl, Restangular, $http) {
                return {

                    getOrderList: function (orderSearch) {
                        return Restangular.all('order').all('page').post(orderSearch);
                    },

                    exportOrder: function (orderSearch) {
                        var defer = $q.defer();

                        $timeout(function () {
                            var str = $.param(orderSearch);
                            $window.location = 'report/export/orderDetail?' + str;
                        }, 1000)
                            .then(function () {
                                defer.resolve('success');
                            }, function () {
                                defer.reject('error');
                            });
                        return defer.promise;
                    },

                    getFillGoodsList: function (machineIds) {
                        return Restangular.all('report').all('fillGoods').post(machineIds);
                    },

                    exportFillGoods: function (machineIds) {

                        var defer = $q.defer();

                        $timeout(function () {
                            var str = machineIds.join(',');
                            $window.location = 'report/export/fillGoods?machineIds=' + machineIds;

                        }, 1000)
                            .then(function () {
                                defer.resolve('success');
                            }, function () {
                                defer.reject('error');
                            });
                        return defer.promise;
                    },

                    getProfitList: function (profitSearch) {
                        return Restangular.all('report').all('profit').getList(profitSearch);
                    },

                    exportProfit: function (machineIds) {

                        var defer = $q.defer();

                        $timeout(function () {
                            var str = machineIds.join(',');
                            $window.location = 'report/export/profit?machineIds=' + machineIds;

                        }, 1000)
                            .then(function () {
                                defer.resolve('success');
                            }, function () {
                                defer.reject('error');
                            });
                        return defer.promise;
                    },
                    findPayLineInfo: function (payLineInfo) {
                        return Restangular.all('report').all('payLineInfo').post(payLineInfo);
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('roleService', [
            'Restangular',
            function (Restangular) {
                return {

                	getAllUserRole: function () {
                        return Restangular.all('role').getList();
                    },
                    
                    getAllUserRoleByUserId: function (userId) {
                        return Restangular.all('role').all('user').getList();
                    },
                    
                    getAllUserSelfRoleByUserId: function (userId) {
                        return Restangular.all('role').all('user').customGET('self', {'userId':userId});
                    },
                    
                    getUserRoleById: function (id) {
                        return Restangular.one('role', id).get();
                    },
                    
                    createUserRole: function (role) {
                        return Restangular.all('role').post(role);
                    },

                    updateUserRole: function (role) {
                        return Restangular.one('role', role.roleId).customPUT(role);
                    },

                    deleteUserRole: function (id) {
                        return Restangular.one('role', id).remove();
                    },
                    
                    getAllRule: function () {
                        return Restangular.all('rule').getList();
                    },
                    
                    createUserRule: function (rule) {
                        return Restangular.all('rule').post(rule);
                    },
                    
                    createUserRuleList: function (rule) {
                        return Restangular.all('rule').all('list').post(rule);
                    }
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('systemService', [
            '$q', 'Restangular', '$http', 'growl',
            function ($q, Restangular, $http, growl) {
                return {

                    getAllMobileVersionInfo: function () {
                        return Restangular.all('android').getList();
                    },

                    getMobileVersionInfoById: function (id) {
                        return Restangular.one('android', id).get();
                    },

                    createMobileVersionInfo: function (android) {
                        return Restangular.all('android').post(android);
                    },

                    updateMobileVersionInfo: function (android) {
                        return Restangular.one('android', android.versionId).customPUT(android);
                    },

                    getAllOnlineMachines: function () {
                        return Restangular.all('machine').all('online').getList();
                    },

                    getAllMachinesLessThanCurrentAndroidVersion: function (androidVersion) {
                        return Restangular.one('android').one('updateAll', androidVersion).getList();
                    },

                    updateMachinesWithAndroidVersion: function (machineUpdateInfo) {
                        return Restangular.all('android').all('updateAll').post(machineUpdateInfo);
                    },

                    getAllProvidePayType: function () {
                        return Restangular.all('payType').getList();
                    },

                    getProvidePayTypeById: function (id) {
                        return Restangular.one('payType', id).get();
                    },

                    createProvidePayType: function (payType) {
                        return Restangular.all('payType').post(payType);
                    },

                    updateProvidePayType: function (payType) {
                        return Restangular.one('payType', payType.id).customPUT(payType);
                    },

                    deleteProvidePayType: function (id) {
                        return Restangular.one('payType', id).remove();
                    },

                    uploadApk: function (versionInfo, callback) {
                        var fd = new FormData();
                        fd.append('file', versionInfo.versionFile);
                        $http.post('android/uploadApk', fd, {
                            withCredentials: true,
                            transformRequest: angular.identity,
                            transformResponse: angular.identity,
                            headers: {'Content-Type': undefined}
                        }).success(function (data) {
                            callback(data);
                            growl.success("文件上传成功！");
                        }).error(function (data) {
                            growl.error("文件上传失败，请重新上传。");
                        });
                    },

                    findEgocardsByCilentType: function (clientType) {
                        return Restangular.all('egocard').customGET("list", {clientType: clientType});
                    },

                    rechargeEgocards: function (egocards) {
                        return Restangular.all('egocard').customPOST({egocards: egocards}, "recharge");
                    }
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.common')
        .factory('userService', [
            'Restangular',
            function (Restangular) {
                var currentUser = {};

                return {

                    login: function (user) {
                        return Restangular.all('login').post($.param(user), {},
                            {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
                    },

                    logout: function () {
                        return Restangular.all('logout').customGET('');
                    },

                    setCurrentUser: function (user) {
                        if (user && user.userInfo && user.userInfo.userName) {
                            //currentUser.orgId = user.organizationStructures[0].orgId;
                            currentUser.userName = user.userInfo.userName;
                            currentUser.chineseName = user.userInfo.chineseName;
                            currentUser.regIp = user.userInfo.regIp;
                            currentUser.lastLoginIp = user.userInfo.lastLoginIp;
                            currentUser.lastLoginTime = user.userInfo.lastLoginTime;
                            currentUser.status = user.userInfo.status;
                            currentUser.isAdmin = (user.userInfo.status == 'A') ? true : false;
                            currentUser.rules = user.rules;
                        } else {
                            currentUser.orgId = '';
                            currentUser.userName = '';
                            currentUser.chineseName = '';
                            currentUser.regIp = '';
                            currentUser.lastLoginIp = '';
                            currentUser.lastLoginTime = '';
                            currentUser.status = '';
                            currentUser.isAdmin = false;
                            currentUser.rules = [];
                        }
                    },

                    getCurrentUser: function () {
                        return currentUser;
                    },

                    createUser: function (user) {
                        return Restangular.all('users').post(user);
                    },

                    getAuthUser: function () {
                        return Restangular.all('users').customGET('auth');
                    },

                    getUserByName: function (name) {
                        return Restangular.one('users', name).get({by: 'name'});
                    },

                    getAllUsers: function (userSearch) {
                        return Restangular.all('users').all("page").post(userSearch);
                    },

                    editPwd: function (user, newPwd) {
                        return Restangular.all('users').customPUT(user, 'editPwd', {newPwd: newPwd});
                    },

                    initPwd: function (user) {
                        return Restangular.all('users').customPUT(user, 'initPwd');
                    },

                    createUserInfo: function (userInfo) {
                        return Restangular.all('users').post(userInfo);
                    },

                    updateUserInfo: function (userInfo) {
                        return Restangular.one('users', userInfo.userId).customPUT(userInfo);
                    },

                    deleteUserInfo: function (id) {
                        return Restangular.one('users', id).remove();
                    },

                    saveUserOrgLink: function (userOrgLink) {
                        return Restangular.all('users').all('orgLink').post(userOrgLink);
                    },

                    saveUserRoleLink: function (userRoleLink) {
                        return Restangular.all('users').all('roleLink').post(userRoleLink);
                    }

                };
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.footer')
    .controller('footer.MainController', ['$scope',function ($scope) {
        $scope.year = new Date().getFullYear();
    }]);

})(window, window.angular);

(function (window, angular) {
  "use strict";

  angular.module('module.footer')
    .directive('appFooter', [
      function () {
        return {
          restrict: 'E',
          templateUrl: 'footer.main.html',
          controller: 'footer.MainController',
          replace: true
        };
      }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.goods')
        .controller('goods.CreateController', [
            '$scope',
            '$state',
            '$stateParams',
            'alertService',
            'goodsService',
            'appConfig',
            function ($scope, $state, $stateParams, alertService, goodsService, appConfig) {
                $scope.goods = {};
                $scope.isEdit = ($stateParams.mode === 'e') ? true : false;

                if ($scope.isEdit) {
                    goodsService.getGoodsById($stateParams.id).then(function (resp) {
                        $scope.goods = resp;
                    });
                }

                $scope.save = function () {
                    if ($scope.isEdit) {
                        goodsService.updateGoods($scope.goods).then(function (resp) {
                            alertService.success("商品保存成功！");
                            $state.go('goods.list');
                        });
                    } else {
                        goodsService.createGoods($scope.goods).then(function (resp) {
                            alertService.success("商品保存成功！");
                            $state.go('goods.list');
                        });
                    }
                };

                $scope.upload = function () {
                    var file = $scope.goods.skuPicFile;
                    if (_.endsWith(file.name.toLowerCase(), '.png') || _.endsWith(file.name.toLowerCase(), '.jpg') || _.endsWith(file.name.toLowerCase(), '.jpeg')) {
                        var callback = function (url) {
                            $scope.goods.skuPicUrl = appConfig.imageServer.url + url;
                        }
                        goodsService.saveGoods($scope.goods, callback);


                    } else {
                        alertService.warning("文件类型不支持,请上传png,jpg,jpeg类型图片!");
                    }

                };

                $scope.cancel = function () {
                    $state.go('goods.list');
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.goods')
        .controller('goods.ListController', [
            '$scope',
            '$state',
            '$modal',
            'goodsService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $state, $modal, goodsService, userService, pageService, alertService) {
                $scope.currentPage = 1;
                $scope.itemsPerPage = 8;
                $scope.goods = {skuBrand: ''};
                $scope.pageGoods = {};

                $scope.currentUser = userService.getCurrentUser();
                $scope.goodsList = [];
                $scope.getAllFilterBrand = function () {
                    goodsService.getAllFilterBrand().then(function (cResp) {
                        $scope.allFilterBrand = cResp;
                    });
                };
                $scope.getAllFilterBrand();
                $scope.refreshData = function () {
                    pageService.mask('goods-list-spinner');
                    goodsService.getAllGoods($scope.goods.skuBrand, $scope.currentPage - 1, $scope.itemsPerPage).then(function (resp) {
                        $scope.pageGoods = resp;
                        $scope.goodsList = $scope.pageGoods.content;
                        pageService.unmask('goods-list-spinner');
                    });
                };
                $scope.refreshData();

                $scope.delete = function (goods) {
                    goodsService.deleteGoods(goods.skuId).then(function (resp) {
                        if (resp.result != 1) {
                            alertService.error(resp.errorMsg);
                        } else {
                            alertService.success('商品删除成功。');
                            $scope.refreshData();
                        }
                    });
                };

                $scope.newGoods = function () {
                    $state.go('goods.create');
                };

                $scope.search = function () {
                    $scope.refreshData();
                };

                $scope.editGoods = function (goods) {
                    $state.go('goods.create', {mode: 'e', id: goods.skuId});
                };

                $scope.openOrgForm = function (goodsInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.goods.goods-org-form.html',
                        controller: 'widgets.goods.GoodsOrgFormController',
                        resolve: {
                            baseData: function () {
                                return goodsInfo ? _.assign({}, goodsInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newGoodsInfo) {
                        if (newGoodsInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData();
                };

            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.goods')
    .controller('goods.MainController', [
          '$scope',
          '$state',
          function ($scope, $state){
              if ($.AdminLTE.layout) {
                  $.AdminLTE.layout.activate();
              }
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.goods').directive('fileModel',
		  ['$parse', function ($parse) {
			    return {
			        restrict: 'A',
			        link: function(scope, element, attrs) {
			            var model = $parse(attrs.fileModel);
			            var modelSetter = model.assign;
			            
			            element.bind('change', function(){
			                scope.$apply(function(){
			                    modelSetter(scope, element[0].files[0]);
			                });
			            });
			        }
			    };
			}]);                  
})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.help')
    .controller('help.MainController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  $scope.gotoLogin = function () {
                  $state.go('login');
              };
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.home')
        .controller('home.DashboardController', [
            '$scope',
            '$state',
            function ($scope, $state) {

                var myChart = echarts.init(document.getElementById('orderMoneyLine'));

                var option = {
                    title: {
                        text: '30天销售额和销量数据'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['销售金额', '销售数量']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '6.10', '6.11', '6.12', '6.13', '6.14', '6.15', '6.16', '6.17', '6.18', '6.19', '6.20']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '金额(元)'
                        },
                        {
                            type: 'value',
                            name: '数量(个)'
                        }
                    ],
                    series: [
                        {
                            name: '销售金额',
                            type: 'bar',
                            data: [100, 85.9, 99.0, 126.4, 128.7, 70.7, 175.6, 182.2, 148.7, 118.8, 86.0, 92.3, 128.7, 70.7, 175.6, 182.2, 148.7, 118.8, 86.0, 92.3]
                        },
                        {
                            name: '销售数量',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [52, 42, 33, 45, 63, 40, 80, 63, 53, 76, 82, 116, 63, 40, 80, 63, 53, 76, 82, 116]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.home')
        .controller('home.MainController', [
            '$scope',
            '$rootScope',
            function ($scope, $rootScope) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
                $rootScope.$broadcast('currentTab', "home.dashboard");
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.login')
        .controller('login.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {

                $scope.gotoHome = function () {
                    $state.go('machine.list');
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine')
    .controller('machine.AisleGoodsListController', [
          '$scope',
          '$state',
          '$stateParams',
          function ($scope, $state, $stateParams){
        	 $scope.machineId = $stateParams.id;
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine')
    .controller('machine.AisleListController', [
          '$scope',
          '$state',
          '$stateParams',
          function ($scope, $state, $stateParams){
        	 $scope.templateId = $stateParams.id;
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine')
    .controller('machine.AisleTemplateController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.machine')
        .controller('machine.CopyController', [
            '$scope',
            '$state',
            'machineService',
            'userService',
            'alertService',
            function ($scope, $state, machineService, userService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.copy = {};
                $scope.machineCopy = function () {
                    if (!$scope.copy.from) {
                        alertService.warning('请先输入从哪台机器复制!');
                        return;
                    }
                    if (!$scope.copy.to) {
                        alertService.warning('请先输入复制到哪台机器!');
                        return;
                    }
                    if ($scope.copy.from != $scope.copy.to) {
                        machineService.machineCopy($scope.copy.from, $scope.copy.to).then(function (resp) {
                            alertService.warning(resp.errorMsg);
                        });
                    } else {
                        alertService.warning('请不要复制自身!');
                    }
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine')
    .controller('machine.ListController', [
          '$scope',
          '$state',
          function ($scope, $state){

          }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.machine')
        .controller('machine.MapController', [
            '$scope',
            '$state',
            'machineService',
            function ($scope, $state, machineService) {
                var map = new BMap.Map("machine-map", {
                    minZoom: 6,
                    maxZoom: 21,
                    enableMapClick: false
                });    // 创建Map实例
                var geoc = new BMap.Geocoder();

                var point = new BMap.Point(113.257114, 23.136449);
                map.centerAndZoom(point, 6);  // 初始化地图,设置中心点坐标和地图级别
                var cr = new BMap.CopyrightControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    offset: new BMap.Size(10, -10)
                });   //设置版权控件位置
                map.addControl(cr); //添加版权控件
                var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
                var navigationControl = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
                map.addControl(scaleControl);
                map.addControl(navigationControl);
                var bs = map.getBounds();   //返回地图可视区域
                cr.addCopyright({
                    id: 1,
                    content: "<h3><span class='label label-primary'>设备地图</span></h3>",
                    bounds: bs
                });
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

                var markers = [];

                machineService.getAllMachineLocation().then(function (all) {
                    _.forEach(all, function (machineLocation) {
                        var point = new BMap.Point(machineLocation.locationLongitude, machineLocation.locationLatitude);
                        var marker = new BMap.Marker(point);
                        var machineCode = machineLocation.machineCode;
                        marker.addEventListener("click", function (e) {
                                var p = e.target;
                                var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                                geoc.getLocation(point, function (rs) {
                                    var addComp = rs.addressComponents;
                                    var address = addComp.province + "," + addComp.city + "," + addComp.district + "," + addComp.street + "," + addComp.streetNumber;
                                    var infoWindow = new BMap.InfoWindow('<form class="form-horizontal">' +
                                        '<div class="form-group"> ' +
                                        '<label class="col-md-5 control-label">机器编号:</label> ' +
                                        '<div class="col-md-5">' +
                                        '<p class="form-control-static">' + machineCode +
                                        '</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="form-group"> ' +
                                        '<label class="col-md-5 control-label">机器位置:</label> ' +
                                        '<div class="col-md-5">' +
                                        '<p class="form-control-static">' + address +
                                        '</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</form>', {
                                        width: 0,
                                        height: 0
                                    });  // 创建信息窗口对象
                                    map.openInfoWindow(infoWindow, point); //开启信息窗口
                                });
                            }
                        );
                        markers.push(marker);
                    });
                    //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
                    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers: markers});
                });
            }]);
})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.machine')
    .controller('machine.TypeController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.machine')
        .controller('machine.MainController', [
            '$scope',
            '$rootScope',
            '$state',
            function ($scope, $rootScope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
                $rootScope.$broadcast('currentTab', "machine");
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.navbar')
        .controller('navbar.MainController', [
            '$scope',
            '$state',
            '$modal',
            'userService',
            function ($scope, $state, $modal, userService) {
                if ($.AdminLTE.pushMenu) {
                    $.AdminLTE.pushMenu.activate("[data-toggle='offcanvas']");
                }
                $scope.$on('currentTab', function (e, currentTab) {
                    $scope.currentTab = currentTab;
                });
                $scope.currentUser = userService.getCurrentUser();
                $scope.$state = $state;
                $scope.checkLogin = function () {
                    if ($scope.currentUser.userName) {
                        return true;
                    } else {
                        return false;
                    }
                };

                $scope.gotoLogin = function () {
                    $state.go('login');
                };

                $scope.gotoHome = function () {
                    $state.go('home');
                };

                $scope.gotoMachineList = function () {
                    $state.go('machine.list');
                };

                $scope.gotoAisleTemplate = function () {
                    $state.go('machine.aisle');
                };

                $scope.gotoMachineType = function () {
                    $state.go('machine.type');
                };

                $scope.gotoGoods = function () {
                    if ($scope.checkLogin()) {
                        $state.go('goods.list');
                    }
                };

                $scope.gotoAdvertise = function () {
                    $state.go('advertise.list');
                };

                $scope.gotoFinishPushAdvertise = function () {
                    $state.go('advertise.push');
                };

                $scope.gotoReport = function () {
                    $state.go('report');
                };

                $scope.gotoOrderList = function () {
                    $state.go('report.order');
                };

                $scope.gotoFillGoodsList = function () {
                    $state.go('report.fillGoods');
                };

                $scope.gotoProfitReport = function () {
                    $state.go('report.profit');
                };

                $scope.gotoSystem = function () {
                    $state.go('system');
                };

                $scope.gotoPayTypeList = function () {
                    $state.go('system.pay');
                };

                $scope.gotoEgocard = function () {
                    $state.go('system.egocard');
                };

                $scope.gotoAndroidVersionList = function () {
                    $state.go('system.android');
                };

                $scope.gotoOrgTree = function () {
                    $state.go('org');
                };

                $scope.gotoUserList = function () {
                    $state.go('user.list');
                };

                $scope.gotoRoleList = function () {
                    $state.go('role.list');
                };

                $scope.gotoHelp = function () {
                    $state.go('help');
                };

                $scope.gotoHome = function () {
                    $state.go('home.dashboard');
                };

                $scope.gotoUserInfo = function (userName) {
                    var form = $modal.open({
                        templateUrl: 'widgets.user.user-personal-form.html',
                        controller: 'widgets.user.UserPersonalFormController',
                        resolve: {
                            userName: function () {
                                return userName;
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

                $scope.editPassword = function (userName) {
                    var form = $modal.open({
                        templateUrl: 'widgets.user.edit-password.html',
                        controller: 'widgets.user.EditPasswordController',
                        resolve: {
                            userName: function () {
                                return userName;
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

                $scope.logout = function () {
                    userService.logout().then(function () {
                        userService.setCurrentUser(null);
                        $state.go('login');
                    })
                };

                $scope.gotoPromotionDesc = function () {
                    $state.go('promotion.desc');
                };
                $scope.gotoPromotionList = function () {
                    $state.go('promotion.list');
                };
                $scope.gotoMachineMap = function () {
                    $state.go('machine.map');
                };
                $scope.gotoMachineCopy = function () {
                    $state.go('machine.copy');
                }
            }
        ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.navbar')
    .directive('appNavbar', [
      function () {
        return {
          restrict: 'E',
          scope: {
            currentTab: '@'
          },
          templateUrl: 'navbar.main.html',
          controller: 'navbar.MainController',
          replace: true
        };
      }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.org')
        .controller('org.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.promotion')
        .controller('promotion.DescController', [
            '$scope',
            '$state',
            function ($scope, $state) {

            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.promotion')
        .controller('promotion.ListController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                var promotions = [{
                    promotionName: '广州汇丰软件第二瓶半价促销',
                    promotionStartTime: '2015-12-20 8:00',
                    promotionEndTime: '2016-02-08 22:00',
                    promotionType: '第二瓶半价',
                    promotionProduct: '百事可乐瓶装600ml',
                    promotionMachine: '广州汇丰软件'
                }, {
                    promotionName: '深圳维他奶元旦抽奖促销',
                    promotionStartTime: '2016-01-01 00:00',
                    promotionEndTime: '2016-01-03 23:59',
                    promotionType: '抽奖',
                    promotionProduct: '维他柠檬茶罐装310ml',
                    promotionMachine: 'EGQZ0200155:A3,EGQZ0200188:C1'
                }, {
                    promotionName: '指定机器试饮第二瓶半价活动',
                    promotionStartTime: '2015-12-01 08:00',
                    promotionEndTime: '2016-04-11 20:00',
                    promotionType: '第二瓶半价',
                    promotionProduct: '清酷金明露瓶装350ml',
                    promotionMachine: 'EGQZ0200312:D6'
                }, {
                    promotionName: '广州海珠体育中心佳得乐抽奖促销',
                    promotionStartTime: '2016-01-11 00:00',
                    promotionEndTime: '2016-03-23 23:59',
                    promotionType: '抽奖',
                    promotionProduct: '佳得乐运动饮料瓶装600ml',
                    promotionMachine: 'EGQZ0200055:D1,EGQZ0200088:E6'
                }];
                $scope.promotions = promotions;

            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.promotion')
        .controller('promotion.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.report')
    .controller('report.FillGoodsListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.report')
        .controller('report.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.report')
    .controller('report.OrderListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.report')
    .controller('report.ProfitListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.role')
    .controller('role.ListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.role')
        .controller('role.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.system')
    .controller('system.AndroidController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.system')
        .controller('system.EgocardController', [
            '$scope',
            '$state',
            'systemService',
            'pageService',
            'userService',
            'alertService',
            function ($scope, $state, systemService, pageService, userService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.searchParam = {};
                $scope.egocardPay = {};
                $scope.disenableRecharge = true;
                $scope.nowTotalAmount = 0;
                $scope.search = function () {
                    if ($scope.searchParam.clientType) {
                        pageService.mask('egocard-list-spinner');
                        systemService.findEgocardsByCilentType($scope.searchParam.clientType).then(function (egocards) {
                            pageService.unmask('egocard-list-spinner');
                            $scope.egocards = egocards;
                            var nowTotalAmount = 0;
                            $.each($scope.egocards, function (key, value) {
                                nowTotalAmount += value.amount;
                            });
                            $scope.nowTotalAmount = nowTotalAmount;
                            $scope.disenableRecharge = false;
                        });
                    } else {
                        alertService.warning('请至少选择一家公司!');
                    }
                };
                $scope.separate = function () {
                    if (!$scope.egocards || $scope.egocards.length == 0) {
                        alertService.warning('请先查询出结果,再平均分配金额!');
                        return;
                    }
                    if (!$scope.egocardPay.totalMoney || !$.isNumeric($scope.egocardPay.totalMoney)) {
                        alertService.warning('请先输入总金额,再平均分配金额!');
                        return;
                    }
                    var rechargeCardSize = 0;
                    $.each($scope.egocards, function (key, value) {
                        if (value.egocardStatus != 'lost') {
                            rechargeCardSize++;
                        }
                    });
                    $.each($scope.egocards, function (key, value) {
                        if (value.egocardStatus != 'lost') {
                            value.rechargeMoney = Math.floor($scope.egocardPay.totalMoney * 100 / rechargeCardSize) / 100;
                        }
                    });
                };
                $scope.recharge = function () {
                    if (!$scope.egocards || $scope.egocards.length == 0) {
                        alertService.warning('请先查询出结果,再充值!');
                        return;
                    }
                    var totalAmount = 0;
                    $.each($scope.egocards, function (key, value) {
                        totalAmount += value.rechargeMoney;
                    });
                    if (totalAmount <= 0) {
                        alertService.warning('请先输入每张卡的金额,再充值!');
                        return;
                    }
                    $scope.disenableRecharge = true;
                    pageService.mask('egocard-list-spinner');
                    systemService.rechargeEgocards($scope.egocards).then(function (result) {
                        pageService.unmask('egocard-list-spinner');
                        if (result.result == 200) {
                            $scope.search();
                            alertService.warning('充值成功!');
                        } else {
                            alertService.warning('充值失败!');
                        }
                    });
                }
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.system')
        .controller('system.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.system')
    .controller('system.PayController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.user')
    .controller('user.ListController', [
          '$scope',
          '$state',
          function ($scope, $state){
        	  
              
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.user')
        .controller('user.MainController', [
            '$scope',
            '$state',
            function ($scope, $state) {
                if ($.AdminLTE.layout) {
                    $.AdminLTE.layout.activate();
                }
            }]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.advertise', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.goods', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.machine', [
      'module.common',
      'checklist-model'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.org', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.report', [
      'module.common',
      'ivh.treeview'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.role', [
      'module.common',
      'checklist-model'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.system', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
  "use strict";

  angular.module('module.widgets.user', [
      'module.common'
  ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets').filter('characters', [function () {
        return function (input, strLength) {
            if (input.length <= strLength) {
                return input;
            }
            var str = input.substring(0, strLength) + "...";
            return str;
        }
    }]);

    angular.module('module.widgets').filter('roleLevel', [function () {
        return function (input) {
            if (input == '1') {
                return "系统管理";
            } else if (input == '2') {
                return "运营管理";
            } else if (input == '3') {
                return "基础运营";
            } else {
                return input;
            }
        }
    }]);
    angular.module('module.widgets').filter('fullOrEmpty', [function () {
        return function (input) {
            if (input == 0) {
                return "无货";
            } else if (input > 100) {
                return "有货";
            } else {
                return input;
            }
        }
    }]);
    angular.module('module.widgets').filter('egocardstatus', [function () {
        return function (input) {
            if (input == 'binded') {
                return "正常";
            } else if (input == 'lost') {
                return "已挂失(不参与充值)";
            } else {
                return "未知状态";
            }
        }
    }]);
    angular.module('module.widgets').filter('controlBoardType', [function () {
        return function (input) {
            if (input == 'EG') {
                return "易购";
            } else if (input == 'ZJ') {
                return "中吉";
            } else if (input == 'NEG') {
                return "新易购";
            } else if (input == 'YC') {
                return "易触";
            } else if (input == 'JY') {
                return "金雨";
            } else {
                return "全支持";
            }
        }
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .controller('widgets.advertise.AdvertiseFinishPushListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'advertiseService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, advertiseService, userService, pageService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.currentPage = 1;
                $scope.itemsPerPage = 10;
                $scope.pageFinishPush = {};
                $scope.searchInfo = {machineCode: ''};
                $scope.advertiseInfos = [];

                $scope.refreshData = function (deferMilliseconds) {
                    pageService.mask('advertisePushTable');
                    advertiseService.getAllFinishPush($scope.searchInfo.machineCode, $scope.currentPage - 1, $scope.itemsPerPage).then(function (cResp) {
                        $scope.pageFinishPush = cResp;
                        $scope.advertiseInfos = cResp.currentList;
                        $timeout(function () {
                            pageService.unmask('advertisePushTable');
                        }, deferMilliseconds);
                    });
                };

                $scope.refreshData(500);

                $scope.openForm = function (advertiseInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.advertise.advertise-view-form.html',
                        controller: 'widgets.advertise.AdvertiseViewFormController',
                        resolve: {
                            advertiseData: function () {
                                return advertiseInfo ? _.assign({}, advertiseInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newAdvertiseInfo) {
                        if (newAdvertiseInfo) {
                            $scope.refreshData(500);
                        }
                    });
                };

                $scope.delete = function (advertiseInfo) {
                    advertiseService.deleteAdvertiseSend(advertiseInfo.id).then(function () {
                        alertService.success('成功发送删除终端广告的指令。');
                        $scope.refreshData(500);
                    });
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData(500);
                };

                $scope.search = function () {
                    $scope.refreshData(500);
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .controller('widgets.advertise.AdvertiseFormController', [
            '$scope',
            '$sce',
            'advertiseData',
            '$timeout',
            '$modalInstance',
            'advertiseService',
            'pageService',
            'alertService',
            'appConfig',
            function ($scope, $sce, advertiseData, $timeout, $modalInstance, advertiseService, pageService, alertService, appConfig) {
                $scope.trustSrc = function (src) {
                    return $sce.trustAsResourceUrl(src);
                }

                $scope.advertiseInfo = advertiseData;
                $scope.invalidMessage = {};
                $scope.formTitle = '新增广告';
                if ($scope.advertiseInfo.advertisementId) {
                    $scope.advertiseInfo.advertisementId = parseInt($scope.advertiseInfo.advertisementId);
                    $scope.formTitle = '修改广告';
                }


                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                $scope.save = function () {
                    if ($scope.advertiseInfo.advertisementId) {
                        advertiseService.updateAdvertise($scope.advertiseInfo).then(function (resp) {
                            if (resp.result === -1) {
                                alertService.warning('修改后的名称与已有名称冲突！');
                            } else {
                                alertService.success('广告修改已保存。');
                                $modalInstance.close($scope.advertiseInfo);
                            }
                        });
                    } else {
                        advertiseService.createAdvertise($scope.advertiseInfo).then(function (resp) {
                            if (resp.result === -1) {
                                alertService.warning('该广告已经创建过，不需要重复建立！');
                            } else {
                                alertService.success('广告创建成功。');
                                $modalInstance.close($scope.advertiseInfo);
                            }
                        });
                    }
                };

                $scope.upload = function () {
                    pageService.mask('advertisement-upload-form');
                    //$scope.progressValueNow = 1;
                    var file = $scope.advertiseInfo.advertiseFile;
                    if ($scope.checkFile(file.name, $scope.advertiseInfo.advertisementType)) {
                        var callback = function (data) {
                            $scope.advertiseInfo.advertisementDownloadUrl = appConfig.imageServer.url + data.url;
                            $scope.advertiseInfo.advertisementSize = data.size;
                            pageService.unmask('advertisement-upload-form');
                            //$scope.progressValueNow = 101;
                        }
                        advertiseService.uploadFile($scope.advertiseInfo, callback);
                    } else {
                        //$scope.progressValueNow = 101;
                        pageService.unmask('advertisement-upload-form');
                    }
                };

                $scope.checkFile = function (fileName, type) {
                    if (type === "0") {//image
                        if (_.endsWith(fileName.toLowerCase(), '.png')) {
                            return true;
                        } else {
                            alertService.warning("文件类型不支持,请选择png格式图片");
                            return false;
                        }
                    } else if (type === "1") {
                        if (_.endsWith(fileName.toLowerCase(), '.mp4') || _.endsWith(fileName.toLowerCase(), '.wmv')) {
                            return true;
                        } else {
                            alertService.warning("文件类型不支持,请选择mp4、wmv格式视频");
                            return false;
                        }
                    } else {
                        alertService.warning("请选择广告类型");
                        return false;
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .controller('widgets.advertise.AdvertiseListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'advertiseService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, advertiseService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.advertiseInfos = [];
                $scope.currentPage = 1;
                $scope.itemsPerPage = 10;
                $scope.refreshData = function(init){
                    pageService.mask('advertiseTable');
                    advertiseService.getAllAdvertise($scope.currentPage - 1, $scope.itemsPerPage).then(function(cResp) {
                        $scope.advertiseInfos = cResp.content;
                        $scope.totalSize = cResp.totalElements;
                        pageService.unmask('advertiseTable');
                    });
                };
                $scope.refreshData(true);

                $scope.openForm = function(advertiseInfo){
                    var form = $modal.open({
                        templateUrl: 'widgets.advertise.advertise-form.html',
                        controller: 'widgets.advertise.AdvertiseFormController',
                        resolve: {
                        	advertiseData: function () {
                                return advertiseInfo ? _.assign({}, advertiseInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newAdvertiseInfo) {
                        if (newAdvertiseInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.delete = function(advertiseInfo){
                	advertiseService.deleteAdvertise(advertiseInfo.advertisementId).then(function(){
                        alertService.success('广告删除成功。');
                        $scope.refreshData();
                    });
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData();
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .controller('widgets.advertise.AdvertiseViewFormController', [
            '$scope',
            '$sce',
            'advertiseData',
            '$timeout',
            '$modalInstance',
            'advertiseService',
            'pageService',
            'alertService',
            'appConfig',
            function ($scope, $sce, advertiseData, $timeout, $modalInstance, advertiseService, pageService, alertService, appConfig) {
            	$scope.trustSrc = function(src) {
            	    return $sce.trustAsResourceUrl(src);
            	  }
            	
            	$scope.advertiseInfo = advertiseData;
                $scope.invalidMessage = {};

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.advertiseInfo.advertisementId) {
                    	advertiseService.updateAdvertise($scope.advertiseInfo).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('修改后的名称与已有名称冲突！');
                             } else {
	                    		alertService.success('广告修改已保存。');
	                            $modalInstance.close($scope.advertiseInfo);
                             }
                        });
                    } else {
                    	advertiseService.createAdvertise($scope.advertiseInfo).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('该广告已经创建过，不需要重复建立！');
                            } else {
	                    		alertService.success('广告创建成功。');
	                            $modalInstance.close($scope.advertiseInfo);
                            }
                        });
                    }
                };
                
                $scope.upload = function(){
                	pageService.mask('advertisement-upload-form');
		      		  var file = $scope.advertiseInfo.advertiseFile;
		      		  if ($scope.checkFile(file.name, $scope.advertiseInfo.advertisementType)) {
		      			  var callback=function(url){
		      				  $scope.advertiseInfo.advertisementDownloadUrl = appConfig.imageServer.url + url;
		      				pageService.unmask('advertisement-upload-form');
		      			  }
		      			  advertiseService.uploadFile($scope.advertiseInfo,callback);
		      		  }
                };
                
                $scope.checkFile = function(fileName, type) {
                	if (type === "0") {//image
                		if (_.endsWith(fileName, '.jpg') || _.endsWith(fileName, '.png') || _.endsWith(fileName, '.gif')) {
                			return true;
                		} else {
                			alertService.warning("文件类型不支持,请选择jpg、png、gif 格式图片");
                			return false;
                		} 
                	} else if (type === "1") {
                		if (_.endsWith(fileName, '.mp4') || _.endsWith(fileName, '.wmv')) {
                			return true;
                		} else {
                			alertService.warning("文件类型不支持,请选择mp4、wmv格式视频");
                			return false;
                		} 
                	} else {
                		alertService.warning("请选择广告类型");
            			return false;
                	}
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .directive('appAdvertiseFinishPushList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.advertise.advertise-finish-push-list.html',
                    controller: 'widgets.advertise.AdvertiseFinishPushListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.advertise')
        .directive('appAdvertiseList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.advertise.advertise-list.html',
                    controller: 'widgets.advertise.AdvertiseListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function(window, angular) {
	"use strict";

	angular.module('module.widgets.advertise').filter('advertiseLevel', [ function() {
		return function(input){
			if (input == '11') {
				return "初始广告";
			} else if (input == '12') {
				return "默认广告";
			} else if (input == '13') {
				return "轮播广告";
			} else {
				return input;
			}
		}
	} ]);
	angular.module('module.widgets.advertise').filter('advertiseSize', [ function() {
		return function(size){
			if(size>1000000){
				return (size/1000.0/1000.0).toFixed(2)+"MB";
			}
			return (size/1000.0).toFixed(2)+"KB";
		}
	} ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.goods')
        .controller('widgets.goods.GoodsOrgFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'goodsService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, goodsService, orgService, pageService, alertService) {
                $scope.goodsInfo = baseData;
                $scope.invalidMessage = {};
                
                $scope.treeData = [];
                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
                
                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.showSelected = function(sel) {
                    $scope.selectedNode = sel;
                };
                
                orgService.getAllOrgStructure().then(function(cResp) {
                	$scope.treeData = cResp;
                	$scope.expandedNodes = [$scope.treeData[0]];
                	if ($scope.treeData.length >0 && $scope.treeData[0].childrens) {
                		$scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                	}
                });

                $scope.save = function(){
                	if ($scope.selectedNode.orgId != baseData.organizationId) {
                		if ($scope.goodsInfo.skuId) {
                			$scope.goodsInfo.organizationId = $scope.selectedNode.orgId;
                			goodsService.updateGoods($scope.goodsInfo).then(function(resp){
                        		 if (resp.result === -1) {
                                 	alertService.warning('保存失败！');
                                 } else {
    	                    		alertService.success('授权组织成功。');
    	                            $modalInstance.close($scope.goodsInfo);
                                 }
                            });
                        }
                	} else {
                		alertService.warning("您选择的组织已授权！");
                	}
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.AisleFormController', [
            '$scope',
            'aisleData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'goodsService',
            'pageService',
            'alertService',
            function ($scope, aisleData, $timeout, $modalInstance, machineService, goodsService, pageService, alertService) {
            	$scope.aisleTemplate = aisleData;
                $scope.invalidMessage = {};
                
                $scope.formTitle = '设置货道商品';

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };
                
                $scope.getAllFilterBrand = function(){
                	goodsService.getAllFilterBrand().then(function(cResp) {
                        $scope.allFilterBrand = cResp;
                    });
                	$scope.allFilterSubject = [];
                	$scope.allFilterGoods = [];
                };
                $scope.getAllFilterBrand();
                
                $scope.getAllFilterSubject = function(skuBrand){
                	goodsService.getAllFilterSubject(skuBrand).then(function(cResp) {
                        $scope.allFilterSubject = cResp;
                    });
                	$scope.allFilterGoods = [];
                };
                $scope.getAllFilterGoods = function(skuBrand, skuSubject){
                	//console.info("skuBrand---skuSubject:"+skuBrand+"---"+skuSubject);
                	goodsService.getAllFilterGoods(skuBrand, skuSubject).then(function(cResp) {
                        $scope.allFilterGoods = cResp;
                    });
                    //console.info("$scope.allFilterGoods:"+$scope.allFilterGoods);
                };
                $scope.showGoods = function(skuId){
                	//console.info("skuId:"+skuId);
                	if (skuId){
                		goodsService.getGoodsById(skuId).then(function(cResp) {
                			$scope.aisleTemplate.goodsSkuInfo.skuSubject = cResp.skuSubject;
                			$scope.aisleTemplate.goodsSkuInfo.skuPackageType = cResp.skuPackageType;
                			$scope.aisleTemplate.goodsSkuInfo.skuSize = cResp.skuSize;
                			$scope.aisleTemplate.aisleGoodsPrice = cResp.skuSellingPrice;
                        });
                	}
                };
                

                $scope.save = function(){
                	machineService.updateMachineAisleTemplate($scope.aisleTemplate).then(function(resp){
                		 if (resp.result === -1) {
                         	alertService.warning('修改后的名称与已有名称冲突！');
                         } else {
                    		alertService.success('设置货道商品已保存。');
                            $modalInstance.close($scope.aisleTemplate);
                         }
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.AisleListController', [
            '$scope',
            '$state',
            '$timeout',
            '$modal',
            'machineService',
            'pageService',
            'alertService',
            function ($scope, $state, $timeout, $modal, machineService, pageService, alertService) {
            	$scope.goodsAisleTemplateId = $scope.templateId;
            	machineService.getMachineAisleTemplateDesc($scope.goodsAisleTemplateId).then(function(resp) {
                    $scope.machineAisleTemplateDesc = resp;
                });
            	
            	$scope.machineAisleTemplates = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('machine-aisle-list-spinner');
                    machineService.getAllMachineAisleTemplates($scope.goodsAisleTemplateId).then(function(cResp) {
                        $scope.machineAisleTemplates = cResp;
                        pageService.unmask('machine-aisle-list-spinner');
                    });
                };
                $scope.refreshData(true);


                $scope.openFormAisle = function(machineAisleTemplate){
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.aisle-form.html',
                        controller: 'widgets.machine.AisleFormController',
                        resolve: {
                            aisleData: function () {
                                return machineAisleTemplate ? _.assign({}, machineAisleTemplate) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newMachineAisleTemplate) {
                        if (newMachineAisleTemplate) {
                            $scope.refreshData();
                        }
                    });
                };
                
                $scope.cancel = function(){
          		  $state.go('machine.aisle');
          	  };


            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.AisleTemplateFormController', [
            '$scope',
            'descData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'pageService',
            'alertService',
            function ($scope, descData, $timeout, $modalInstance, machineService, pageService, alertService) {
                $scope.aisleTemplateDesc = descData;
                $scope.invalidMessage = {};
                
                machineService.getAllMachineTypes().then(function(resp) {
                    $scope.machineTypeList = resp;
                });
                $scope.isEdit = false;
                $scope.formTitle = '新增货道模板';
                if ($scope.aisleTemplateDesc.goodsAisleTemplateId) {
                	$scope.isEdit = true;
                    $scope.aisleTemplateDesc.goodsAisleTemplateId = parseInt($scope.aisleTemplateDesc.goodsAisleTemplateId);
                    $scope.formTitle = '修改货道模板';
                }



                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.aisleTemplateDesc.goodsAisleTemplateId) {
                    	machineService.updateMachineAisleTemplateDesc($scope.aisleTemplateDesc).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('修改后的名称与已有名称冲突！');
                             } else {
	                    		alertService.success('货道模板修改已保存。');
	                            $modalInstance.close($scope.aisleTemplateDesc);
                             }
                        });
                    } else {
                    	machineService.createMachineAisleTemplateDesc($scope.aisleTemplateDesc).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('货道模板已经创建过，不需要重复建立！');
                            } else {
	                    		alertService.success('货道模板创建成功。');
	                            $modalInstance.close($scope.aisleTemplateDesc);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.AisleTemplateListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'machineService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, machineService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.machineAisleTemplateDescs = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('machine-template-aisle-list-spinner');
                    machineService.getAllMachineAisleTemplateDescs().then(function(cResp) {
                        $scope.machineAisleTemplateDescs = cResp;
                        pageService.unmask('machine-template-aisle-list-spinner');
                    });
                };
                $scope.refreshData(true);


                $scope.openForm = function(machineAisleTemplateDesc){
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.aisle-template-form.html',
                        controller: 'widgets.machine.AisleTemplateFormController',
                        resolve: {
                            descData: function () {
                                return machineAisleTemplateDesc ? _.assign({}, machineAisleTemplateDesc) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newMachineAisleTemplateDesc) {
                        if (newMachineAisleTemplateDesc) {
                            $scope.refreshData();
                        }
                    });
                };
                
                $scope.setAisle = function(machineAisleTemplateDesc){
                	$state.go('machine.aisleList', {id : machineAisleTemplateDesc.goodsAisleTemplateId});
                };

                $scope.delete = function(machineAisleTemplateDesc){
                	machineService.deleteMachineAisleTemplateDesc(machineAisleTemplateDesc.goodsAisleTemplateId).then(function(){
                        alertService.success('货道模板删除成功。');
                        $scope.refreshData();
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineAddressFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, machineService, systemService, pageService, alertService) {
                $scope.machineId = baseData;
            	$scope.machineAddress = {
            			'machineId':'',
            			'provinceId':'',
            			'cityId':'',
            			'areaId':''
            	};
                $scope.invalidMessage = {};
                
                
                machineService.getMachineAddressById($scope.machineId).then(function(resp) {
                    $scope.machineAddress = resp;
                    if ($scope.machineAddress) {
                    	$scope.showProvinceList();
                    }
                });
                
                
                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };
                
                $scope.showProvinceList = function() {
                	machineService.getAllProvince().then(function(cResp) {
                        $scope.provinceList = cResp;
                    	$scope.showCityList($scope.machineAddress.provinceId);
                    	$scope.showAreaList($scope.machineAddress.cityId);
                    });
                };
                
                machineService.getAllProvince().then(function(cResp) {
                    $scope.provinceList = cResp;
                });
                
                $scope.showCityList = function(provinceId){
                	machineService.getAllCity(provinceId).then(function(cResp) {
                        $scope.cityList = cResp;
                        $scope.areaList = [];
                    });
                };
                
                $scope.showAreaList = function(cityId){
                	machineService.getAllArea(cityId).then(function(cResp) {
                        $scope.areaList = cResp;
                    });
                };

                $scope.save = function(){
                    if ($scope.machineAddress.machineId) {
                    	machineService.updateMachineAddress($scope.machineAddress).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('设置失败！');
                             } else {
	                    		alertService.success('机器地址设置成功。');
	                            $modalInstance.close($scope.machineAddress);
                             }
                        });
                    } else {
                    	$scope.machineAddress.machineId = $scope.machineId;
                    	machineService.createMachineAddress($scope.machineAddress).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('设置失败！');
                            } else {
	                    		alertService.success('机器地址设置成功。');
	                            $modalInstance.close($scope.machineAddress);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineAisleGoodsFormController', [
            '$scope',
            'aisleData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'goodsService',
            'alertService',
            function ($scope, aisleData, $timeout, $modalInstance, machineService, goodsService, alertService) {
                $scope.machineAisleInfo = aisleData;
                $scope.invalidMessage = {};

                $scope.formTitle = '设置机器货道商品';

                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                $scope.getAllFilterBrand = function () {
                    goodsService.getAllFilterBrand().then(function (cResp) {
                        $scope.allFilterBrand = cResp;
                    });
                    $scope.allFilterSubject = [];
                    $scope.allFilterGoods = [];
                };
                $scope.getAllFilterBrand();

                $scope.getAllFilterSubject = function (skuBrand) {
                    goodsService.getAllFilterSubject(skuBrand).then(function (cResp) {
                        $scope.allFilterSubject = cResp;
                    });
                    $scope.allFilterGoods = [];
                };
                $scope.getAllFilterGoods = function (skuBrand, skuSubject) {
                    //console.info("skuBrand---skuSubject:"+skuBrand+"---"+skuSubject);
                    goodsService.getAllFilterGoods(skuBrand, skuSubject).then(function (cResp) {
                        $scope.allFilterGoods = cResp;
                    });
                    $scope.machineAisleInfo.goodsSkuInfo.skuId = '';
                    //console.info("$scope.allFilterGoods:"+$scope.allFilterGoods);
                };
                $scope.showGoods = function (skuId) {
                    //console.info("skuId:" + skuId);
                    if (skuId) {
                        goodsService.getGoodsById(skuId).then(function (cResp) {
                            $scope.machineAisleInfo.goodsSkuInfo.skuSubject = cResp.skuSubject;
                            $scope.machineAisleInfo.goodsSkuInfo.skuPackageType = cResp.skuPackageType;
                            $scope.machineAisleInfo.goodsSkuInfo.skuSize = cResp.skuSize;
                            $scope.machineAisleInfo.aisleGoodsPrice = cResp.skuSellingPrice / 100;
                            $scope.machineAisleInfo.aisleOriginalPrice = cResp.skuOriginalPrice / 100;
                        });
                    }
                };


                $scope.save = function () {
                    machineService.updateMachineAisleInfo($scope.machineAisleInfo).then(function (resp) {
                        if (resp.result === -1) {
                            alertService.warning('修改后的名称与已有名称冲突！');
                        } else {
                            alertService.success('设置机器货道商品已保存。');
                            $modalInstance.close($scope.machineAisleInfo);
                        }
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineAisleGoodsListController', [
            '$scope',
            '$state',
            '$timeout',
            '$modal',
            'machineService',
            'pageService',
            'userService',
            function ($scope, $state, $timeout, $modal, machineService, pageService, userService) {
                $scope.currentUser = userService.getCurrentUser();
                machineService.getMachineById($scope.machineId).then(function (resp) {
                    $scope.machineBaseInfo = resp;
                });

                $scope.machineAisleInfos = [];
                $scope.machineAisleStockInfo = {
                    sumOutOfStock: 0,
                    sumOfDefaultStock: 0,
                    runOutOfAisle: 0,
                    sumOfAisle: 0
                };

                $scope.refreshData = function (init) {
                    pageService.mask('machine-aisle-goods-list-spinner');
                    machineService.getAllMachineAisleInfos($scope.machineId).then(function (cResp) {
                        $scope.machineAisleInfos = cResp;
                        var sumOfStock = 0;
                        var sumOfDefaultStock = 0;
                        var runOutOfAisle = 0;
                        _.forEach($scope.machineAisleInfos, function (machineAisleInfo) {
                            sumOfStock += machineAisleInfo.goodsStock;
                            sumOfDefaultStock += machineAisleInfo.defaultGoodsStock;
                            if (machineAisleInfo.goodsStock == 0) {
                                runOutOfAisle++;
                            }
                            machineAisleInfo.aisleGoodsPrice /= 100;
                            machineAisleInfo.aisleOriginalPrice /= 100;
                        });
                        $scope.machineAisleStockInfo.sumOutOfStock = sumOfDefaultStock-sumOfStock;
                        $scope.machineAisleStockInfo.sumOfDefaultStock = sumOfDefaultStock;
                        $scope.machineAisleStockInfo.runOutOfAisle = runOutOfAisle;
                        $scope.machineAisleStockInfo.sumOfAisle = cResp.length;
                        pageService.unmask('machine-aisle-goods-list-spinner');
                    });
                };
                $scope.refreshData(true);


                $scope.openFormAisle = function (machineAisleInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-aisle-goods-form.html',
                        controller: 'widgets.machine.MachineAisleGoodsFormController',
                        resolve: {
                            aisleData: function () {
                                return machineAisleInfo ? _.assign({}, machineAisleInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newMachineAisleInfo) {
                        if (newMachineAisleInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.cancel = function () {
                    $state.go('machine.list');
                };


            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineApplyTemplateFormController', [
            '$scope',
            'bindingTemplateView',
            '$timeout',
            '$modalInstance',
            'machineService',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, bindingTemplateView, $timeout, $modalInstance, machineService, systemService, pageService, alertService) {

                $scope.bindingTemplateView = bindingTemplateView;

                $scope.disabled = false;

                machineService.getAllMachineTypes().then(function (resp) {
                    $scope.machineTypeList = resp;
                    machineService.getMachineTypeId(bindingTemplateView).then(function (machineTypeIds) {
                        if(machineTypeIds.length==1){
                            $scope.machineTypeId = machineTypeIds[0];
                            $scope.selectedMachineTypeId = machineTypeIds[0];
                            $scope.showTemplateDesc(machineTypeIds[0]);
                        }
                        if(machineTypeIds.length>1){
                            $scope.disabled = true;
                            var machineTypeNames = [];
                            angular.forEach(resp,function(value, key) {
                                if(_.contains(machineTypeIds,value.machineTypeId)){
                                    machineTypeNames.push(value.typeName);
                                }
                            });
                            $scope.invalidMessage.errorMsg=machineTypeNames.join(",");
                        }
                    });
                });

                $scope.invalidMessage = {};

                $scope.showTemplateDesc = function (typeId) {
                    if (typeId) {
                        machineService.getAllMachineAisleTemplateDescsByTypeId(typeId).then(function (resp) {
                            $scope.machineAisleTemplateDescList = resp;
                        });
                    } else {
                        $scope.machineAisleTemplateDescList = [];
                    }
                };

                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                $scope.save = function () {
                    machineService.bindingTemplate($scope.bindingTemplateView).then(function (resp) {
                        if (resp.result === -1) {
                            alertService.warning('绑定模板出错！');
                        } else {
                            alertService.success('成功应用模板。');
                            $modalInstance.close(true);
                        }
                    });
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineDetailFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, machineService, systemService, pageService, alertService) {
                $scope.machineInfo = baseData;

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'systemService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, machineService, systemService,userService, pageService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.machineInfo = baseData;
                var temp = $scope.machineInfo.providePayType;
                //console.info(temp);
                if(temp) {
                	var strArr = temp.split(",");
                    $scope.machineInfo.providePayType = [];
                    for (var i=0; i<strArr.length; i++) {
                    	$scope.machineInfo.providePayType.push(Number(strArr[i]));
                    }
                }
                
                $scope.invalidMessage = {};
                $scope.formTitle = '新增机器设备';
                if ($scope.machineInfo.machineId) {
                    $scope.machineInfo.machineId = parseInt($scope.machineInfo.machineId);
                    $scope.formTitle = '修改机器设备';
                }
                
                machineService.getAllMachineAisleTemplateDescs().then(function(resp) {
                    $scope.machineAisleTemplateDescList = resp;
                });
                
                systemService.getAllProvidePayType().then(function(resp) {
                    $scope.payTypeList = resp;
                });

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.machineInfo.machineId) {
                    	if ($scope.machineInfo.providePayType instanceof Array) {
                    		$scope.machineInfo.providePayType = $scope.machineInfo.providePayType.join(',');
                        }
                    	machineService.updateMachine($scope.machineInfo).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('修改后的名称与已有名称冲突！');
                             } else {
	                    		alertService.success('机器设备修改已保存。');
	                            $modalInstance.close($scope.machineInfo);
                             }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'filterFilter',
            'machineService',
            'systemService',
            'userService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, filterFilter, machineService, systemService, userService, orgService, pageService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.searchMachine = {pageNumber: 1, pageSize: 10};
                $scope.pageMachine = {};
                $scope.treeData = [];
                $scope.currentOrg = '';
                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};

                $scope.showSelected = function (sel) {
                    $scope.currentOrg = sel.orgName;
                    $scope.searchMachine.orgIds = [sel.orgId];
                    $scope.refreshData(true);
                };

                orgService.getAllOrgStructure().then(function (cResp) {
                    $scope.treeData = cResp;
                    $scope.expandedNodes = [$scope.treeData[0]];
                    if ($scope.treeData.length > 0 && $scope.treeData[0].childrens) {
                        $scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                    }
                });

                $scope.machineInfos = [];

                $scope.providePayTypes = [];
                systemService.getAllProvidePayType().then(function (cResp) {
                    $scope.providePayTypes = cResp;
                    $scope.refreshData(true);
                });

                $scope.pageChanged = function (currentPage) {
                    $scope.searchMachine.pageNumber = currentPage;
                    $scope.refreshData(true);
                };

                $scope.refreshData = function (init) {
                    pageService.mask('machine-list-spinner');
                    machineService.getAllMachine($scope.searchMachine).then(function (cResp) {
                        $scope.pageMachine = cResp;
                        $scope.machineInfos = $scope.pageMachine.content;
                        _.forEach($scope.machineInfos, function (machine) {
                            var payType = machine.providePayType;
                            if (payType) {
                                var strArr = payType.split(",");
                                var payNameArr = [];
                                for (var n = 0; n < strArr.length; n++) {
                                    var payName = _.result(_.find($scope.providePayTypes, function (pay) {
                                        return pay.id == Number(strArr[n]);
                                    }), 'payName');
                                    payNameArr.push(payName);
                                }
                            }
                            if (payNameArr) {
                                machine.payNames = payNameArr.join(',');
                            }
                        });
                        pageService.unmask('machine-list-spinner');
                    });
                };


                $scope.openForm = function (machineInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-form.html',
                        controller: 'widgets.machine.MachineFormController',
                        resolve: {
                            baseData: function () {
                                return machineInfo ? _.assign({}, machineInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newMachine) {
                        if (newMachine) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.openDetailForm = function (machineInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-detail-form.html',
                        controller: 'widgets.machine.MachineDetailFormController',
                        resolve: {
                            baseData: function () {
                                return machineInfo ? _.assign({}, machineInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

                $scope.openOrgForm = function (machineInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-org-form.html',
                        controller: 'widgets.machine.MachineOrgFormController',
                        resolve: {
                            baseData: function () {
                                return machineInfo ? _.assign({}, machineInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newMachine) {
                        if (newMachine) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.bindingTemplate = function () {
                    var machineIds = $scope.getSelectMachineIds();
                    if (machineIds.length > 0 || $scope.searchMachine.userOrgId) {
                        $scope.openApplyTemplate({machineIds: machineIds, orgId: $scope.searchMachine.userOrgId});
                    } else {
                        alertService.warning('请至少选择一台机器或者组织！');
                    }
                };

                $scope.openApplyTemplate = function (bindingTemplateView) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-apply-template-form.html',
                        controller: 'widgets.machine.MachineApplyTemplateFormController',
                        resolve: {
                            bindingTemplateView: function () {
                                return bindingTemplateView;
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (success) {
                        if (success) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.openAddressForm = function (machineId) {
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.machine-address-form.html',
                        controller: 'widgets.machine.MachineAddressFormController',
                        resolve: {
                            baseData: function () {
                                return machineId;
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

                $scope.getSelectMachineIds = function () {
                    var machines = filterFilter($scope.machineInfos, function (machine) {
                        return machine.selected;
                    });
                    var machineIds = [];
                    _.forEach(machines, function (machine) {
                        machineIds.push(machine.machineId);
                    });
                    return machineIds;
                };

                $scope.openPushAdvertise = function () {
                    var machineIds = $scope.getSelectMachineIds();
                    if (machineIds.length > 0) {
                        var form = $modal.open({
                            templateUrl: 'widgets.machine.push-advertise-form.html',
                            controller: 'widgets.machine.PushAdvertiseFormController',
                            size: 'lg',
                            resolve: {
                                baseData: function () {
                                    return machineIds;
                                }
                            },
                            backdrop: false,
                            windowClass: 'browse-origin-modal'
                        });
                    } else {
                        alertService.warning('请选择推送的目标机器！');
                    }
                };

                $scope.openPushVersion = function () {
                    var machineIds = $scope.getSelectMachineIds();
                    if (machineIds.length > 0) {
                        var form = $modal.open({
                            templateUrl: 'widgets.machine.push-version-form.html',
                            controller: 'widgets.machine.PushVersionFormController',
                            size: 'lg',
                            resolve: {
                                baseData: function () {
                                    return machineIds;
                                }
                            },
                            backdrop: false,
                            windowClass: 'browse-origin-modal'
                        });
                    } else {
                        alertService.warning('请选择推送的目标机器！');
                    }
                };

                $scope.reboot = function (machineId) {
                    machineService.createMachineMessageForReboot(machineId).then(function () {
                        alertService.success('重启指令推送成功。');
                    });
                };

                $scope.delete = function (machineInfo) {
                    machineService.deleteMachine(machineInfo.machineId).then(function (resp) {
                        if (resp.result === -1) {
                            alertService.warning("初始化后的机器不能删除！");
                        } else {
                            alertService.success('设备删除成功。');
                            $scope.refreshData();
                        }
                    });
                };

                $scope.gotoMachineAisleGoods = function (machineId) {
                    $state.go('machine.aisleGoodsList', {id: machineId});
                };

                $scope.openedOrg = false;
                $scope.openOrg = function () {
                    $scope.openedOrg = true;
                };
                $scope.closeOrg = function () {
                    $scope.openedOrg = false;
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.MachineOrgFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, machineService, orgService, pageService, alertService) {
                $scope.machineInfo = baseData;
                $scope.invalidMessage = {};
                
                $scope.treeData = [];
                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
                
                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.showSelected = function(sel) {
                    $scope.selectedNode = sel;
                };
                
                orgService.getAllOrgStructure().then(function(cResp) {
                	$scope.treeData = cResp;
                	$scope.expandedNodes = [$scope.treeData[0]];
                	if ($scope.treeData.length >0 && $scope.treeData[0].childrens) {
                		$scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                	}
                });

                $scope.save = function(){
                	if ($scope.selectedNode.orgId != baseData.organizationId) {
                		if ($scope.machineInfo.machineId) {
                			$scope.machineInfo.organizationId = $scope.selectedNode.orgId;
                        	machineService.updateMachine($scope.machineInfo).then(function(resp){
                        		 if (resp.result === -1) {
                                 	alertService.warning('保存失败！');
                                 } else {
    	                    		alertService.success('授权组织成功。');
    	                            $modalInstance.close($scope.machineInfo);
                                 }
                            });
                        }
                	} else {
                		alertService.warning("您选择的组织已授权！");
                	}
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.PushAdvertiseFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'filterFilter',
            'machineService',
            'advertiseService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, filterFilter, machineService, advertiseService, pageService, alertService) {
                $scope.machineIds = baseData;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 10;
                $scope.invalidMessage = {};
                
                $scope.advertiseSend = {};
                
                $scope.toggleMin = function() {
                	$scope.minDate = $scope.minDate ? null : new Date();
                };
                $scope.toggleMin();
                
                $scope.nowDate = new Date();
                var initNowDate = $scope.nowDate;
                var initEndDate = initNowDate.setFullYear(initNowDate.getFullYear()+1);
                $scope.advertiseSend.advertisementStartDay = new Date();
                $scope.advertiseSend.advertisementEndDay = new Date(initEndDate);
                
                $scope.advertiseSend.advertisementStartTime = new Date( 2015, 1, 1, 0, 0 );
                $scope.advertiseSend.advertisementEndTime = new Date( 2015, 1, 1, 23, 59 );
                
                $scope.getDateStr = function(date){
                	var yyyy = date.getFullYear().toString();
                	var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
                	var dd  = date.getDate().toString();
                	return yyyy+"-"+mm+"-"+dd;
                };
                
                $scope.getStartTimeStr = function(date){
                	var hh = date.getHours().toString();
                	var mm = date.getMinutes().toString(); 
                	return hh+":"+mm+":00";
                };

                $scope.getEndTimeStr = function(date){
                    var hh = date.getHours().toString();
                    var mm = date.getMinutes().toString();
                    return hh+":"+mm+":59";
                };
                
                $scope.advertiseInfos = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('advertiseTable');
                    advertiseService.getAllAdvertise($scope.currentPage - 1, $scope.itemsPerPage).then(function(cResp) {
                        $scope.advertiseInfos = cResp.content;
                        $scope.totalSize = cResp.totalElements;
                        pageService.unmask('advertiseTable');
                    });
                };
                $scope.refreshData(true);

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };
                
                $scope.getSelectItems = function(advertiseInfos){
                	var resultArr = [];
                	_.forEach(advertiseInfos, function(info) {
                		var obj = {
                				'advertisementDownloadUrl': info.advertisementDownloadUrl,
            					'advertisementId': info.advertisementId,
            					'advertisementLevel': info.advertisementLevel,
            					'advertisementName': info.advertisementName,
            					'advertisementShowTime': info.advertisementShowTime,
            					'advertisementType': info.advertisementType,
            					'gmtCreated': info.gmtCreated,
            					'gmtModified': info.gmtModified	
                		};
                		resultArr.push(obj);
                	});
                	var result = angular.toJson(resultArr, false);
                	return result;
                };

                $scope.save = function(){
                	var advertiseInfos = filterFilter($scope.advertiseInfos, function (info) {
                        return info.selected;
                    });
                	if (advertiseInfos.length > 1) {
                		alertService.warning('一次只能推送一条广告，请核对后重试。');
                	} else if (advertiseInfos.length < 1){
                		alertService.warning('请选择需要推送的广告。');
                	} else {
                		var advertiseInfo = advertiseInfos[0];
                		
                		var advertiseSend = {
                				'advertisementId':advertiseInfo.advertisementId,
                				'advertisementStartDay':$scope.getDateStr($scope.advertiseSend.advertisementStartDay),
                				'advertisementEndDay':$scope.getDateStr($scope.advertiseSend.advertisementEndDay),
                				'advertisementStartTime': $scope.getStartTimeStr($scope.advertiseSend.advertisementStartTime),
                				'advertisementEndTime': $scope.getEndTimeStr($scope.advertiseSend.advertisementEndTime),
                				'machineIds':$scope.machineIds
                		};
                		
                    	machineService.createMachineMessageForAdvertise(advertiseSend).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('该机器设备已经创建过，不需要重复建立！');
                            } else {
                        		alertService.success('广告推送成功。');
                                $modalInstance.close($scope.machineInfo);
                            }
                        });
                    	
                	}
                };
                
                $scope.status = {
                	startOpen: false,
                	endOpen: false
                };
                $scope.startOpen = function() {
                	$scope.status.startOpen = true;
                };
              
                $scope.endOpen = function() {
                	$scope.status.endOpen = true;
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData();
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.PushVersionFormController', [
            '$scope',
            'baseData',
            '$timeout',
            '$modalInstance',
            'filterFilter',
            'machineService',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, baseData, $timeout, $modalInstance, filterFilter, machineService, systemService, pageService, alertService) {
                $scope.machineIds = baseData;
                
                $scope.invalidMessage = {};
                
                $scope.versionInfos = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('versionTable');
                    systemService.getAllMobileVersionInfo().then(function(cResp) {
                        $scope.versionInfos = cResp;
                        pageService.unmask('versionTable');
                    });
                };
                $scope.refreshData(true);

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };
                
                $scope.getSelectItems = function(versionInfos){
                	var resultArr = [];
                	_.forEach(versionInfos, function(info) {
                		var obj = {
                				'versionDownloadUrl': info.versionDownloadUrl,
            					'versionId': info.versionId,
            					'versionCode': info.versionCode,
            					'versionNumber': info.versionNumber,
            					'versionStatus': info.versionStatus,
            					'versionDesc': info.versionDesc,
            					'gmtCreated': info.gmtCreated,
            					'gmtModified': info.gmtModified	
                		};
                		resultArr.push(obj);
                	});
                	var result = angular.toJson(resultArr, false);
                	return result;
                };

                $scope.save = function(){
                	var versionInfos = filterFilter($scope.versionInfos, function (info) {
                        return info.selected;
                    });
                	if (versionInfos.length > 1) {
                		alertService.warning('一次只能推送一个版本，请核对后重试。');
                	} else if (versionInfos.length < 1){
                		alertService.warning('请选择需要推送的程序版本。');
                	} else {
                		var versionInfo =  versionInfos[0];
                		var machineMessageVersion = {
                				'machineIds': $scope.machineIds,
                				'versionId': versionInfo.versionId
                		};
                    	
                    	machineService.createMachineMessageForVersion(machineMessageVersion).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('版本推送失败！');
                            } else {
                        		alertService.success('版本推送成功。');
                                $modalInstance.close($scope.machineInfo);
                            }
                        });
                	}
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.TypeFormController', [
            '$scope',
            'typeData',
            '$timeout',
            '$modalInstance',
            'machineService',
            'pageService',
            'alertService',
            function ($scope, typeData, $timeout, $modalInstance, machineService, pageService, alertService) {
                $scope.machineType = typeData;
                $scope.invalidMessage = {};
                $scope.formTitle = '新增设备类型';
                if ($scope.machineType.id) {
                    $scope.machineType.id = parseInt($scope.machineType.id);
                    $scope.formTitle = '修改设备类型';
                }



                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.machineType.id) {
                    	machineService.updateMachineType($scope.machineType).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('修改后的名称与已有名称冲突！');
                             } else {
	                    		alertService.success('设备类型修改已保存。');
	                            $modalInstance.close($scope.machineType);
                             }
                        });
                    } else {
                    	machineService.createMachineType($scope.machineType).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('该设备类型已经创建过，不需要重复建立！');
                            } else {
	                    		alertService.success('设备类型创建成功。');
	                            $modalInstance.close($scope.machineType);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .controller('widgets.machine.TypeListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'machineService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, machineService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.machineTypes = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('machine-type-list-spinner');
                    machineService.getAllMachineTypes().then(function(cResp) {
                        $scope.machineTypes = cResp;
                        pageService.unmask('machine-type-list-spinner');
                    });
                };
                $scope.refreshData(true);


                $scope.openForm = function(machineType){
                    var form = $modal.open({
                        templateUrl: 'widgets.machine.type-form.html',
                        controller: 'widgets.machine.TypeFormController',
                        size: 'lg',
                        resolve: {
                            typeData: function () {
                                return machineType ? _.assign({}, machineType) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newMachineType) {
                        if (newMachineType) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.delete = function(machineType){
                	machineService.deleteMachineType(machineType.machineTypeId).then(function(){
                        alertService.success('设备类型删除成功。');
                        $scope.refreshData();
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    /**
     * AngularJS directive for list of checkboxes
     */

    angular.module('checklist-model', [])
    .directive('checklistModel', ['$parse', '$compile', function($parse, $compile) {
      // contains
      function contains(arr, item, comparator) {
        if (angular.isArray(arr)) {
          for (var i = arr.length; i--;) {
            if (comparator(arr[i], item)) {
              return true;
            }
          }
        }
        return false;
      }

      // add
      function add(arr, item, comparator) {
        arr = angular.isArray(arr) ? arr : [];
          if(!contains(arr, item, comparator)) {
              arr.push(item);
          }
        return arr;
      }  

      // remove
      function remove(arr, item, comparator) {
        if (angular.isArray(arr)) {
          for (var i = arr.length; i--;) {
            if (comparator(arr[i], item)) {
              arr.splice(i, 1);
              break;
            }
          }
        }
        return arr;
      }

      // http://stackoverflow.com/a/19228302/1458162
      function postLinkFn(scope, elem, attrs) {
        // compile with `ng-model` pointing to `checked`
        $compile(elem)(scope);

        // getter / setter for original model
        var getter = $parse(attrs.checklistModel);
        var setter = getter.assign;
        var checklistChange = $parse(attrs.checklistChange);

        // value added to list
        var value = $parse(attrs.checklistValue)(scope.$parent);


      var comparator = angular.equals;

      if (attrs.hasOwnProperty('checklistComparator')){
        comparator = $parse(attrs.checklistComparator)(scope.$parent);
      }

        // watch UI checked change
        scope.$watch('checked', function(newValue, oldValue) {
          if (newValue === oldValue) { 
            return;
          } 
          var current = getter(scope.$parent);
          if (newValue === true) {
            setter(scope.$parent, add(current, value, comparator));
          } else {
            setter(scope.$parent, remove(current, value, comparator));
          }

          if (checklistChange) {
            checklistChange(scope);
          }
        });
        
        // declare one function to be used for both $watch functions
        function setChecked(newArr, oldArr) {
            scope.checked = contains(newArr, value, comparator);
        }

        // watch original model change
        // use the faster $watchCollection method if it's available
        if (angular.isFunction(scope.$parent.$watchCollection)) {
            scope.$parent.$watchCollection(attrs.checklistModel, setChecked);
        } else {
            scope.$parent.$watch(attrs.checklistModel, setChecked, true);
        }
      }

      return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        scope: true,
        compile: function(tElement, tAttrs) {
          if (tElement[0].tagName !== 'INPUT' || tAttrs.type !== 'checkbox') {
            throw 'checklist-model should be applied to `input[type="checkbox"]`.';
          }

          if (!tAttrs.checklistValue) {
            throw 'You should provide `checklist-value`.';
          }

          // exclude recursion
          tElement.removeAttr('checklist-model');
          
          // local scope var storing individual checkbox model
          tElement.attr('ng-model', 'checked');

          return postLinkFn;
        }
      };
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .directive('appMachineAisleGoodsList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {machineId: '@'},
                    templateUrl: 'widgets.machine.machine-aisle-goods-list.html',
                    controller: 'widgets.machine.MachineAisleGoodsListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .directive('appMachineAisleList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {templateId: '@'},
                    templateUrl: 'widgets.machine.aisle-list.html',
                    controller: 'widgets.machine.AisleListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .directive('appMachineAisleTemplateList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.machine.aisle-template-list.html',
                    controller: 'widgets.machine.AisleTemplateListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .directive('appMachineList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.machine.machine-list.html',
                    controller: 'widgets.machine.MachineListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.machine')
        .directive('appMachineTypeList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.machine.type-list.html',
                    controller: 'widgets.machine.TypeListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.org')
        .controller('widgets.org.OrgFormController', [
            '$scope',
            'nodeData',
            '$timeout',
            '$modalInstance',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, nodeData, $timeout, $modalInstance, orgService, pageService, alertService) {
                $scope.orgInfoPlus = nodeData;
                $scope.orgInfo = $scope.orgInfoPlus.node;
                //console.info("$scope.orgInfo:"+$scope.orgInfo);
                $scope.invalidMessage = {};
                $scope.formTitle = '修改组织';
                if ($scope.orgInfoPlus.type == 'add') {
                	var tempNode = nodeData.node;
                	var val = tempNode.childrens.length + 1;
					if (val<10) {
						val = '0'+val;
					}
                	
                    $scope.orgInfo.upOrgId = tempNode.orgId;
                    $scope.orgInfo.orgId = tempNode.orgId + val;
                    $scope.orgInfo.level = Number(tempNode.level) + 1;
                    $scope.orgInfo.status = '1'
                    $scope.formTitle = '新增组织';
                } else {
                	$scope.orgInfo.orgFormName = $scope.orgInfo.orgName;
                }

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                	$scope.org = {
            			'orgId':$scope.orgInfo.orgId, 
            			'orgName':$scope.orgInfo.orgFormName,
            			'upOrgId':$scope.orgInfo.upOrgId,
            			'level': $scope.orgInfo.level,
            			'status': $scope.orgInfo.status
            		};
                    if ($scope.orgInfoPlus.type == 'edit') {
                    	orgService.updateOrgStructure($scope.org).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('');
                             } else {
	                    		alertService.success('组织修改已保存。');
	                            $modalInstance.close($scope.org);
                             }
                        });
                    } else {
                    	orgService.createOrgStructure($scope.org).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('');
                            } else {
	                    		alertService.success('组织创建成功。');
	                            $modalInstance.close($scope.org);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.org')
        .controller('widgets.org.OrgListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'orgService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, orgService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.orgInfo = {};

						$scope.toggle = function(scope) {
							scope.toggle();
						};

						$scope.moveLastToTheBeginning = function() {
							var a = $scope.data.pop();
							$scope.data.splice(0, 0, a);
						};

						$scope.newSubItem = function(nodeData) {
							var val = nodeData.childrens.length + 1;
							if (val<10) {
								val = '0'+val;
							}
							nodeData.childrens.push({
								orgId : nodeData.orgId + nodeData.childrens.length,
								orgName : 'orgName--'+nodeData.orgId + val,
								childrens : []
							});
						};
						
						$scope.openForm = function(node, type){
							var nodeInfo = {'node':node, 'type':type};
		                    var form = $modal.open({
		                        templateUrl: 'widgets.org.org-form.html',
		                        controller: 'widgets.org.OrgFormController',
		                        size: 'md',
		                        resolve: {
		                        	nodeData: function () {
		                                return nodeInfo ? _.assign({}, nodeInfo) : {};
		                            }
		                        },
		                        backdrop: false,
		                        windowClass: 'browse-origin-modal'
		                    });

		                    form.result.then(function(newNodeInfo) {
		                        if (newNodeInfo) {
		                            $scope.refreshData();
		                        }
		                    });
		                };
		                
		                $scope.refreshData = function() {
		                	orgService.getAllOrgStructure().then(function(cResp) {
		                		$scope.data = cResp;
		                    });
		                };

						$scope.collapseAll = function() {
							$scope.$broadcast('collapseAll');
						};

						$scope.expandAll = function() {
							$scope.$broadcast('expandAll');
						};
						
						$scope.delete = function(node){
		                	orgService.deleteOrgStructure(node.orgId).then(function(resp){
		                		if (resp.result === -1) {
	                             	alertService.error('该组织有下级组织或用户或商品或机器，所以不能删除该组织。');
	                             } else {
	                            	alertService.success('组织删除成功。');
	 		                        $scope.refreshData();
	                             }
		                    });
		                };
		                
		                $scope.refreshData();

                }]);
})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.org')
        .controller('widgets.org.OrgTreeController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, orgService, pageService, alertService) {
            	$scope.tree = {'orgId':'1','orgName':'易购科技', 'children': [{'orgId':'2','orgName':'光明集团'},{'orgId':'3','orgName':'万科集团'}]};
                $scope.treeData = [$scope.tree];
                $scope.treeOptions = {multiSelection: false};
                
                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.showSelected = function(sel) {
                    $scope.selectedNode = sel;
                    //console.info("$scope.selectedNode:"+sel.orgId);
                };

                $scope.saveUserOrg = function(){
                	var data = {
                		'userId':$scope.userInfo.userId,
                		'orgId':$scope.selectedNode.orgId
                	};
//                	userService.saveUserOrgLink(data).then(function(resp){
//                		if (resp.result === -1) {
//                        	alertService.warning('！');
//                        } else {
//                    		alertService.success('用户授权组织成功。');
//                            $modalInstance.close($scope.userInfo);
//                        }
//                    });
                };
            }]);
})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.org')
        .directive('appOrgList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.org.org-list.html',
                    controller: 'widgets.org.OrgListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.org')
        .directive('appOrgTree', [
            function () {
                return {
                    restrict: 'E',
                    scope: {orgId: '@',},
                    templateUrl: 'widgets.org.org-tree.html',
                    controller: 'widgets.org.OrgTreeController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .controller('widgets.report.FillGoodsListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'filterFilter',
            'reportService',
            'machineService',
            'userService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, filterFilter, reportService, machineService, userService, orgService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.userOrgId = '';
            	$scope.fillGoodsList = [];
            	
            	$scope.machineIds = [];
            	
            	$scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
            	$scope.tree = {'label':'设备列表', 'children': []};
                
                $scope.showSelected = function(sel) {
                    $scope.userOrgId = sel.orgId;
                    $scope.refreshMachineData();
                };
                
                orgService.getAllOrgStructure().then(function(cResp) {
                	$scope.treeData = cResp;
                	$scope.expandedNodes = [$scope.treeData[0]];
                	if ($scope.treeData.length >0 && $scope.treeData[0].childrens) {
                		$scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                	}
                });
            	
            	$scope.refreshMachineData = function(){
            		machineService.getAllMachineNoPage($scope.userOrgId).then(function(cResp) {
            			$scope.machineList = [];
                        _.forEach(cResp, function(machine) {
                        	//console.info("machine.machineId:"+machine.machineId);
                        	$scope.machineList.push({'id':machine.machineId, 'label':machine.machineName});
                        });
                        $scope.tree = {'label':'设备列表', 'children': $scope.machineList};
                    });
            	}; 
            	
            	$scope.refreshMachineData();
            	
                $scope.refreshData = function(init){
                    reportService.getFillGoodsList($scope.machineIds).then(function(cResp) {
                        $scope.fillGoodsList = cResp;
                    });
                };
                
                $scope.search = function(){
                	$scope.machineIds = [];
                	var machineInfos = filterFilter($scope.machineList, function (info) {
                        return info.selected;
                    });
                	_.forEach(machineInfos, function(machine) {
                		$scope.machineIds.push(machine.id);
                	});
                	if ($scope.machineIds.length > 0) {
                		$scope.refreshData(true);
                	} else {
                		alertService.warning("请选择需要补货的设备。");
                	}
                	
                };

                $scope.export = function() {
                    $scope.machineIds = [];
                    var machineInfos = filterFilter($scope.machineList, function (info) {
                        return info.selected;
                    });
                    _.forEach(machineInfos, function(machine) {
                        $scope.machineIds.push(machine.id);
                    });
                    if ($scope.machineIds.length > 0) {
                        reportService.exportFillGoods($scope.machineIds);
                    } else {
                        alertService.warning("请选择需要补货的设备。");
                    }
                };
                
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .controller('widgets.report.OrderListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'orgService',
            'reportService',
            'userService',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, orgService, reportService, userService, systemService, pageService, alertService) {

                $scope.openedOrg = false;
                $scope.openOrg = function () {
                    $scope.openedOrg = true;
                };
                $scope.closeOrg = function () {
                    $scope.openedOrg = false;
                };

                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
                orgService.getAllOrgStructure().then(function (cResp) {
                    $scope.treeData = cResp;
                    $scope.expandedNodes = [$scope.treeData[0]];
                    if ($scope.treeData.length > 0 && $scope.treeData[0].childrens) {
                        $scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                    }
                });

                $scope.selectOrg = function (sel) {
                    $scope.orgInfo = {orgName: sel.orgName, orgId: sel.orgId};
                    $scope.refreshData();
                };

                $scope.currentUser = userService.getCurrentUser();
                $scope.currentPage = 1;
                $scope.itemsPerPage = 20;
                $scope.pageOrder = {};

                $scope.exportDisabled = false;
                $scope.orderDetails = [];
                $scope.orderSearch = {};
                $scope.orgInfo = {};
                $scope.orderSearchPlus = {};


                $scope.orderSearch.startEndDate = moment().format('YYYY/M/D') + '-' + moment().format('YYYY/M/D');


                $scope.startDate = function (date) {
                    return date.split('-')[0] + " 00:00:00";
                };

                $scope.endDate = function (date) {
                    return date.split('-')[1] + " 23:59:59";
                };

                systemService.getAllProvidePayType().then(function (resp) {
                    $scope.payTypeList = resp;
                });

                $scope.refreshData = function (init) {
                    $scope.orderSearchPlus.startDate = moment($scope.startDate($scope.orderSearch.startEndDate));
                    if ($scope.orgInfo.orgId) {
                        $scope.orderSearchPlus.orgIds = [$scope.orgInfo.orgId];
                    }
                    $scope.orderSearchPlus.endDate = moment($scope.endDate($scope.orderSearch.startEndDate));
                    $scope.orderSearchPlus.pageNumber = $scope.currentPage - 1;
                    $scope.orderSearchPlus.pageSize = $scope.itemsPerPage;
                    pageService.mask('order-list-spinner');
                    reportService.getOrderList($scope.orderSearchPlus).then(function (cResp) {
                        $scope.pageOrder = cResp;
                        $scope.orderDetails = $scope.pageOrder.content;
                        pageService.unmask('order-list-spinner');
                    });
                };
                $scope.refreshData(true);

                $scope.search = function () {
                    if (!moment($scope.startDate($scope.orderSearch.startEndDate)).isBefore($scope.endDate($scope.orderSearch.startEndDate), 'second')) {
                        alertService.warning("开始时间不能大于结束时间。");
                    } else {
                        $scope.refreshData(true);
                    }
                };

                $scope.export = function () {
                    if (!moment($scope.startDate($scope.orderSearch.startEndDate)).isBefore($scope.endDate($scope.orderSearch.startEndDate), 'second')) {
                        alertService.warning("开始时间不能大于结束时间。");
                    } else {
                        var diff_month = moment($scope.endDate($scope.orderSearch.startEndDate)).diff(moment($scope.startDate($scope.orderSearch.startEndDate)), 'months');

                        if (diff_month > 2) {
                            alertService.warning("一次最多只能导出3个月的订单数据。");
                        } else {
                            $scope.exportDisabled = true;
                            var exportSearch = {};
                            if ($scope.orgInfo.orgId) {
                                exportSearch.orgIds = $scope.orgInfo.orgId;
                            }
                            exportSearch.payType = $scope.orderSearchPlus.payType;
                            exportSearch.machineCode = $scope.orderSearchPlus.machineCode;
                            exportSearch.startDate = moment($scope.startDate($scope.orderSearch.startEndDate)).valueOf();
                            exportSearch.endDate = moment($scope.endDate($scope.orderSearch.startEndDate)).valueOf();
                            reportService.exportOrder(exportSearch).then(function (resp) {
                                $scope.exportDisabled = false;
                            });
                        }
                    }
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData(true);
                };

                $scope.showPayLine = function (payType, payLineNumber, machineCode) {
                    $modal.open({
                        templateUrl: 'widgets.report.payline-form.html',
                        controller: 'widgets.report.OrderPayLineFormController',
                        resolve: {
                            payLineInfo: function () {
                                return {machineCode: machineCode, payType: payType, payLineNumber: payLineNumber};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .controller('widgets.report.OrderOrgSelectFormController', [
            '$scope',
            '$modalInstance',
            'orgService',
            'reportService',
            function ($scope, $modalInstance, orgService, reportService) {
                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
                orgService.getAllOrgStructure().then(function (cResp) {
                    $scope.treeData = cResp;
                    $scope.expandedNodes = [$scope.treeData[0]];
                    if ($scope.treeData.length > 0 && $scope.treeData[0].childrens) {
                        $scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                    }
                });
                $scope.save = function () {
                    if ($scope.selectedNode) {
                        $modalInstance.close({orgName: $scope.selectedNode.orgName, orgId: $scope.selectedNode.orgId});
                    } else {
                        $modalInstance.dismiss();
                    }
                };
                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .controller('widgets.report.OrderPayLineFormController', [
            '$scope',
            'payLineInfo',
            '$modalInstance',
            'userService',
            'reportService',
            function ($scope, payLineInfo, $modalInstance, userService, reportService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.payLineInfo = payLineInfo;
                reportService.findPayLineInfo({
                    payType: payLineInfo.payType,
                    payLineNumber: payLineInfo.payLineNumber
                }).then(function (resp) {
                    console.log(resp);
                    if (resp) {
                        $scope.payLineInfo.hasPay = true;
                        $scope.payLineInfo.record = resp;
                    } else {
                        $scope.payLineInfo.hasPay = false;
                    }
                });
                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .controller('widgets.report.ProfitListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'filterFilter',
            'reportService',
            'machineService',
            'userService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, filterFilter, reportService, machineService, userService, orgService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.userOrgId = '';
            	$scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};
            	$scope.tree = {'label':'设备列表', 'children': []};
                
                $scope.showSelected = function(sel) {
                    $scope.userOrgId = sel.orgId;
                    $scope.refreshMachineData();
                };
                
                orgService.getAllOrgStructure().then(function(cResp) {
                	$scope.treeData = cResp;
                	$scope.expandedNodes = [$scope.treeData[0]];
                	if ($scope.treeData.length >0 && $scope.treeData[0].childrens) {
                		$scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                	}
                });
            	
            	
            	$scope.profitList = [];
                $scope.profitSearch = {};
                $scope.profitSearchPlus = {};
                $scope.profitTotal = {
                		'sumMoney':0,
                		'sumCount':0
                };

                $scope.refreshMachineData = function(){
                	machineService.getAllMachineNoPage($scope.userOrgId).then(function(cResp) {
            			$scope.machineList = [];
                        _.forEach(cResp, function(machine) {
                        	//console.info("machine.machineId:"+machine.machineId);
                        	$scope.machineList.push({'id':machine.machineId, 'label':machine.machineName});
                        });
                        $scope.tree = {'label':'设备列表', 'children': $scope.machineList};
                    });
                };
                $scope.refreshMachineData();
                
                var nowDate = new Date();
                nowDate.setMonth(nowDate.getMonth()-1);
                $scope.profitSearch.startDate = nowDate;
                $scope.profitSearch.endDate = new Date();

                $scope.startDate = function(date){
                    var yyyy = date.getFullYear().toString();
                    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
                    var dd  = date.getDate().toString();
                    if (mm.length === 1) {
                		mm = "0"+mm;
                	}
                    return yyyy+"-"+mm+"-"+dd+" 00:00:00";
                };

                $scope.endDate = function(date){
                    var yyyy = date.getFullYear().toString();
                    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
                    var dd  = date.getDate().toString();
                    if (dd.length === 1) {
                		dd = "0"+dd;
                	}
                    return yyyy+"-"+mm+"-"+dd+" 23:59:59";
                };

                $scope.refreshData = function(init){
                	$scope.profitTotal.soldTotalAmount = 0;
                	$scope.profitTotal.purchaseTotalAmount = 0;
                	$scope.profitTotal.profitTotalAmount = 0;
                	$scope.profitTotal.goodsSoldTotalQuantity = 0;
                    $scope.profitSearchPlus.startDate = $scope.startDate($scope.profitSearch.startDate);
                    $scope.profitSearchPlus.endDate = $scope.endDate($scope.profitSearch.endDate);
                    $scope.profitSearchPlus.machineIds =$scope.machineIds.join(',');
                    pageService.mask('profit-list-spinner');
                    reportService.getProfitList($scope.profitSearchPlus).then(function(cResp) {
                        $scope.profitList = cResp;
                        _.forEach($scope.profitList, function(profit) {
                        	$scope.profitTotal.soldTotalAmount += Number(profit.soldTotalAmount);
                        	$scope.profitTotal.purchaseTotalAmount += Number(profit.purchaseTotalAmount);
                        	$scope.profitTotal.profitTotalAmount += Number(profit.profitTotalAmount);
                        	$scope.profitTotal.goodsSoldTotalQuantity += Number(profit.goodsSoldTotalQuantity);
                    	});
                        pageService.unmask('profit-list-spinner');
                    });
                };

                $scope.search = function(){
                	//console.info("start:"+$scope.profitSearch.startDate.getTime());
                	//console.info("end:"+$scope.profitSearch.endDate.getTime());
                    if ($scope.profitSearch.startDate.getTime() > $scope.profitSearch.endDate.getTime()){
                        alertService.warning("开始时间不能大于结束时间。");
                    } else {
                    	$scope.machineIds = [];
                        var machineInfos = filterFilter($scope.machineList, function (info) {
                            return info.selected;
                        });
                        _.forEach(machineInfos, function(machine) {
                            $scope.machineIds.push(machine.id);
                        });
                        if ($scope.machineIds.length < 1) {
                        	alertService.warning("请选择左侧设备");
                            
                        } else{
                        	$scope.refreshData(true);
                        }
                    }
                };

                $scope.export = function(){
                	alertService.warning("正在开发中...");
//                    if ($scope.startDate($scope.profitSearch.startDate) > $scope.endDate($scope.profitSearch.endDate)){
//                        alertService.warning("开始时间不能大于结束时间。");
//                    } else {
//                    	$scope.machineIds = [];
//                        var machineInfos = filterFilter($scope.machineList, function (info) {
//                            return info.selected;
//                        });
//                        _.forEach(machineInfos, function(machine) {
//                            $scope.machineIds.push(machine.id);
//                        });
//                        if ($scope.machineIds.length > 0) {
//                            reportService.exportProfit($scope.machineIds);
//                        } else {
//                            alertService.warning("请选择需要补货的设备。");
//                        }
//                    }
                };
                
             // Disable weekend selection
                $scope.disabled = function(date, mode) {
                  return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
                };

                $scope.toggleMin = function() {
                  $scope.minDate = $scope.minDate ? null : new Date();
                };
                $scope.toggleMin();
                $scope.maxDate = new Date(2020, 5, 22);

                $scope.startOpen = function() {
                  $scope.status.startOpen = true;
                };
                
                $scope.endOpen = function() {
                    $scope.status.endOpen = true;
                  };

                $scope.setDate = function(year, month, day) {
                  $scope.dt = new Date(year, month, day);
                };

                $scope.dateOptions = {
                  formatYear: 'yy',
                  startingDay: 1
                };

                $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                $scope.format = $scope.formats[0];

                $scope.status = {
                	startOpen: false,
                	endOpen: false
                };
                
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                var afterTomorrow = new Date();
                afterTomorrow.setDate(tomorrow.getDate() + 2);
                $scope.events =
                  [
                    {
                      date: tomorrow,
                      status: 'full'
                    },
                    {
                      date: afterTomorrow,
                      status: 'partially'
                    }
                  ];

                $scope.getDayClass = function(date, mode) {
                  if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0,0,0,0);

                    for (var i=0;i<$scope.events.length;i++){
                      var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                      if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                      }
                    }
                  }

                  return '';
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .directive('dateRangePicker', [
            function () {
                return {
                    restrict: 'A',
                    scope: {},
                    controller: function () {
                        $('#dateRangePicker').daterangepicker({
                            format: 'YYYY/M/D',
                            "locale": {
                                "format": "MM/DD/YYYY",
                                "separator": " - ",
                                "applyLabel": "确定",
                                "cancelLabel": "取消",
                                "fromLabel": "从",
                                "toLabel": "到",
                                "customRangeLabel": "自定义",
                                "weekLabel": "周",
                                "daysOfWeek": [
                                    "日",
                                    "一",
                                    "二",
                                    "三",
                                    "四",
                                    "五",
                                    "六"
                                ],
                                "monthNames": [
                                    "一月",
                                    "二月",
                                    "三月",
                                    "四月",
                                    "五月",
                                    "六月",
                                    "七月",
                                    "八月",
                                    "九月",
                                    "十月",
                                    "十一月",
                                    "十二月"
                                ],
                                "firstDay": 1
                            }
                        });
                    },
                    replace: false
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .directive('appReportFillGoodsList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.report.fill-goods-list.html',
                    controller: 'widgets.report.FillGoodsListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .directive('appReportOrderList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.report.order-list.html',
                    controller: 'widgets.report.OrderListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report')
        .directive('appReportProfitList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.report.profit-list.html',
                    controller: 'widgets.report.ProfitListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.report').filter('payStatus', [function () {
        return function (input) {
            if (input == 'PAY_SUCCESS') {
                return "支付成功";
            } else if (input == 'PAY_FAILED') {
                return "支付失败";
            } else if (input == 'AUTO_REFUND') {
                return "自动退款";
            } else if (input == 'SYS_REFUND') {
                return "人工退款";
            } else {
                return input;
            }
        }
    }]);
    angular.module('module.widgets.report').filter('deliveryStatus', [function () {
        return function (input) {
            if (input == 'FALL') {
                return "出货成功";
            } else if (input == 'NOT_FALL') {
                return "出货失败";
            } else if (input == 'IR_NOT_FALL') {
                return "未出货";
            } else if (input == 'WAITING_FALL') {
                return "等待出货";
            } else {
                return input;
            }
        }
    }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.role')
        .controller('widgets.role.RoleFormController', [
            '$scope',
            'roleData',
            '$timeout',
            '$modalInstance',
            'roleService',
            'pageService',
            'alertService',
            function ($scope, roleData, $timeout, $modalInstance, roleService, pageService, alertService) {
                $scope.roleInfo = roleData;
                $scope.invalidMessage = {};
                $scope.formTitle = '新增用户角色';
                if ($scope.roleInfo.roleId) {
                    $scope.roleInfo.roleId = parseInt($scope.roleInfo.roleId);
                    $scope.formTitle = '修改用户角色';
                }

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.roleInfo.roleId) {
                    	roleService.updateUserRole($scope.roleInfo).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('');
                             } else {
	                    		alertService.success('用户角色修改已保存。');
	                            $modalInstance.close($scope.roleInfo);
                             }
                        });
                    } else {
                    	roleService.createUserRole($scope.roleInfo).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('！');
                            } else {
	                    		alertService.success('用户角色创建成功。');
	                            $modalInstance.close($scope.roleInfo);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.role')
        .controller('widgets.role.RoleListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'roleService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, roleService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.refreshData = function(init){
            		roleService.getAllUserRole().then(function(cResp) {
                        $scope.roleInfos = cResp;
                    });
                };
                $scope.refreshData(true);


                $scope.openForm = function(roleInfo){
                    var form = $modal.open({
                        templateUrl: 'widgets.role.role-form.html',
                        controller: 'widgets.role.RoleFormController',
                        size: 'lg',
                        resolve: {
                        	roleData: function () {
                                return roleInfo ? _.assign({}, roleInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newRoleInfo) {
                        if (newRoleInfo) {
                            $scope.refreshData();
                        }
                    });
                };
                
                $scope.openRuleForm = function(roleInfo){
                    var form = $modal.open({
                        templateUrl: 'widgets.role.role-rule-form.html',
                        controller: 'widgets.role.RoleRuleFormController',
                        size: 'lg',
                        resolve: {
                        	roleData: function () {
                                return roleInfo ? _.assign({}, roleInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newRoleInfo) {
                        if (newRoleInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.delete = function(roleInfo){
                	roleService.deleteUserRole(roleInfo.roleId).then(function(resp){
                		if (resp.result === -1) {
                         	alertService.error('该角色已赋给其他用户，所以不能删除。');
                         } else {
                        	 alertService.success('角色删除成功。');
                             $scope.refreshData();
                         }
                    });
                };
                
	
                }]);
})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.role')
        .controller('widgets.role.RoleRuleFormController', [
            '$scope',
            'roleData',
            '$timeout',
            '$modalInstance',
            'roleService',
            'pageService',
            'alertService',
            function ($scope, roleData, $timeout, $modalInstance, roleService, pageService, alertService) {
            	
            	$scope.roleInfo = roleData;
                $scope.invalidMessage = {};
                $scope.rules = [];
                
                if ($scope.roleInfo.rules) {
                	var ruleStr = roleData.rules;
                	var ruleArr = ruleStr.split(",");
                    for (var n=0; n<ruleArr.length; n++) {
                    	$scope.rules.push(ruleArr[n]);
                    }
                }

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };
                
                roleService.getAllRule().then(function(resp){
                	$scope.ruleList = resp
                });

                $scope.save = function(){
                	$scope.roleInfo.rules = $scope.rules.join(',');
                	roleService.updateUserRole($scope.roleInfo).then(function(resp){
                		 if (resp.result === -1) {
                         	alertService.warning('');
                         } else {
                    		alertService.success('角色授权成功。');
                            $modalInstance.close($scope.roleInfo);
                         }
                    });
                };
                
                $scope.selectAll = function(ruleCode){
                	_.forEach($scope.ruleList, function(rule) {
                        if (rule.ruleCode.startsWith(ruleCode)){
                        	$scope.rules.push(rule.ruleCode);
                        }
                	});
                	$scope.rules = _.union($scope.rules);
                };
                
                $scope.cancelAll = function(ruleCode){
                	_.forEach($scope.ruleList, function(rule) {
                        if (rule.ruleCode.startsWith(ruleCode)){
                        	 _.remove($scope.rules, function(n) {
                        		  return n == rule.ruleCode;
                        	});
                        }
                	});
                };
                
                $scope.import = function(){
                	_.forEach($scope.ruleList, function(rule) {
                		//console.info("rule-import:"+rule.ruleCode);
                		rule.status = '1';
                		rule.type = '1';
                		rule.pathOrAction = '';
                		rule.ruleCondition = '';
                		roleService.createUserRule(rule).then(function(resp){
                    		
                        });
                	});
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.role')
        .directive('appRoleList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.role.role-list.html',
                    controller: 'widgets.role.RoleListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .controller('widgets.system.AndroidUpdateAllController', [
            '$scope',
            'versionData',
            '$modalInstance',
            'systemService',
            'machineService',
            'pageService',
            'alertService',
            function ($scope, versionData, $modalInstance, systemService, machineService, pageService, alertService) {
                $scope.versionInfo = versionData;
                $scope.invalidMessage = {};
                $scope.selected = {};
                $scope.formTitle = '升级所有机器';
                $scope.needUpdate = {};
                $scope.needUpdate.onlineMachines = [];
                $scope.needUpdate.machines = [];
                var ego_online_machineIds = [];
                systemService.getAllOnlineMachines().then(function (reps) {
                    angular.forEach(reps, function (machine) {
                        ego_online_machineIds.push(machine.machineId);
                    });
                    systemService.getAllMachinesLessThanCurrentAndroidVersion($scope.versionInfo.versionCode).then(function (reps) {
                        angular.forEach(reps, function (machine, key) {
                            $scope.needUpdate.machines.push(machine.machineId);
                            if (_.contains(ego_online_machineIds, machine.machineId)) {
                                $scope.needUpdate.onlineMachines.push(machine.machineId);
                            }
                        });
                    });
                });
                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                $scope.update = function () {
                    if (!$scope.selected.name) {
                        alertService.warning("请先选择升级全部还是只升级在线机器!");
                        return;
                    }

                    var machineUpdateInfo = {
                        machineIds: $scope.machineIds,
                        versionId: $scope.versionInfo.versionId
                    };
                    if ($scope.selected.name == 'all') {
                        if ($scope.needUpdate.machines.length == 0) {
                            alertService.warning("选择升级的机器个数为0!");
                            return;
                        }
                        machineUpdateInfo.machineIds = $scope.needUpdate.machines;
                    }
                    if ($scope.selected.name == 'online') {
                        if ($scope.needUpdate.onlineMachines.length == 0) {
                            alertService.warning("选择升级的机器个数为0!");
                            return;
                        }
                        machineUpdateInfo.machineIds = $scope.needUpdate.onlineMachines;
                    }
                    pageService.mask('version-upload-form');
                    machineService.createMachineMessageForVersion(machineUpdateInfo).then(function (resp) {
                        pageService.unmask('version-upload-form');
                        if (resp.result === -1) {
                            alertService.warning('版本推送失败！');
                        } else {
                            alertService.success("提交成功!");
                            $modalInstance.dismiss();
                        }
                    });
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .controller('widgets.system.AndroidVersionFormController', [
            '$scope',
            'versionData',
            '$timeout',
            '$modalInstance',
            'systemService',
            'pageService',
            'alertService',
            'appConfig',
            function ($scope, versionData, $timeout, $modalInstance, systemService, pageService, alertService, appConfig) {
                $scope.versionInfo = versionData;
                $scope.invalidMessage = {};
                $scope.formTitle = '新增安卓版本';
                if ($scope.versionInfo.versionId) {
                    $scope.versionInfo.versionId = parseInt($scope.versionInfo.versionId);
                    $scope.formTitle = '修改安卓版本';
                }


                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                $scope.save = function () {
                    if ($scope.versionInfo.versionId) {
                        systemService.updateMobileVersionInfo($scope.versionInfo).then(function (resp) {
                            if (resp.result === -1) {
                                alertService.warning('修改后的名称与已有名称冲突！');
                            } else {
                                alertService.success('安卓版本修改已保存。');
                                $modalInstance.close($scope.versionInfo);
                            }
                        });
                    } else {
                        systemService.createMobileVersionInfo($scope.versionInfo).then(function (resp) {
                            if (resp.result === -1) {
                                alertService.warning('该安卓版本已经创建过，不需要重复建立！');
                            } else {
                                alertService.success('安卓版本创建成功。');
                                $modalInstance.close($scope.versionInfo);
                            }
                        });
                    }
                };

                $scope.upload = function () {
                    pageService.mask('version-upload-form');
                    var file = $scope.versionInfo.versionFile;
                    if (_.endsWith(file.name.toLowerCase(), '.apk')) {
                        var callback = function (apkInfoString) {
                            if (apkInfoString) {
                                var apkInfo = angular.fromJson(apkInfoString);
                                var url = apkInfo.apkDownLoadingUrl;
                                $scope.versionInfo.versionDownloadUrl = appConfig.imageServer.url + url;
                                $scope.versionInfo.versionNumber = apkInfo.versionNumber;
                                $scope.versionInfo.versionCode = apkInfo.versionCode;
                                $scope.versionInfo.controlBoardType = apkInfo.controlBoard;
                            }
                            pageService.unmask('version-upload-form');
                        };
                        systemService.uploadApk($scope.versionInfo, callback);
                    } else {
                        pageService.unmask('advertisement-upload-form');
                        alertService.warning("文件类型不支持！");
                    }

                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .controller('widgets.system.AndroidVersionListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'systemService',
            'userService',
            'pageService',
            function ($scope, $modal, $timeout, $state, systemService, userService, pageService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.versionInfos = [];

                $scope.refreshData = function (init) {
                    pageService.mask('versionTable');
                    systemService.getAllMobileVersionInfo().then(function (cResp) {
                        $scope.versionInfos = cResp;
                        pageService.unmask('versionTable');
                    });
                };
                $scope.refreshData(true);


                $scope.openForm = function (versionInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.system.android-version-form.html',
                        controller: 'widgets.system.AndroidVersionFormController',
                        resolve: {
                            versionData: function () {
                                return versionInfo ? _.assign({}, versionInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newVersionInfo) {
                        if (newVersionInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.updateAll = function (versionInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.system.android-update-all.html',
                        controller: 'widgets.system.AndroidUpdateAllController',
                        resolve: {
                            versionData: function () {
                                return versionInfo ? _.assign({}, versionInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .controller('widgets.system.PayTypeFormController', [
            '$scope',
            'typeData',
            '$timeout',
            '$modalInstance',
            'systemService',
            'pageService',
            'alertService',
            function ($scope, typeData, $timeout, $modalInstance, systemService, pageService, alertService) {
                $scope.payType = typeData;
                $scope.invalidMessage = {};
                $scope.formTitle = '新增支付方式';
                if ($scope.payType.id) {
                    $scope.payType.id = parseInt($scope.payType.id);
                    $scope.formTitle = '修改支付方式';
                }



                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.payType.id) {
                    	systemService.updateProvidePayType($scope.payType).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('修改后的名称与已有名称冲突！');
                             } else {
	                    		alertService.success('支付方式修改已保存。');
	                            $modalInstance.close($scope.payType);
                             }
                        });
                    } else {
                    	systemService.createProvidePayType($scope.payType).then(function(resp){
                    		if (resp.result === -1) {
                            	alertService.warning('该支付方式已经创建过，不需要重复建立！');
                            } else {
	                    		alertService.success('支付方式创建成功。');
	                            $modalInstance.close($scope.payType);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .controller('widgets.system.PayTypeListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'systemService',
            'userService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, systemService, userService, pageService, alertService) {
            	$scope.currentUser = userService.getCurrentUser();
            	$scope.providePayTypes = [];
            	
                $scope.refreshData = function(init){
                    pageService.mask('pay-type-list-spinner');
                    systemService.getAllProvidePayType().then(function(cResp) {
                        $scope.providePayTypes = cResp;
                        pageService.unmask('pay-type-list-spinner');
                    });
                };
                $scope.refreshData(true);


                $scope.openForm = function(providePayType){
                    var form = $modal.open({
                        templateUrl: 'widgets.system.pay-type-form.html',
                        controller: 'widgets.system.PayTypeFormController',
                        resolve: {
                            typeData: function () {
                                return providePayType ? _.assign({}, providePayType) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function(newPayType) {
                        if (newPayType) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.delete = function(providePayType){
                	systemService.deleteProvidePayType(providePayType.id).then(function(){
                        alertService.success('支付方式删除成功。');
                        $scope.refreshData();
                    });
                };

            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .directive('appSystemAndroidVersionList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.system.android-version-list.html',
                    controller: 'widgets.system.AndroidVersionListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.system')
        .directive('appSystemPayTypeList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.system.pay-type-list.html',
                    controller: 'widgets.system.PayTypeListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.EditPasswordController', [
            '$scope',
            'userName',
            '$timeout',
            '$modalInstance',
            'userService',
            'alertService',
            function ($scope, userName, $timeout, $modalInstance, userService, alertService) {
            	//console.info("userName:"+userName);
                $scope.userName = userName;
                $scope.invalidMessage = {};
                $scope.formTitle = '修改密码';

                var validatePwd = function (){
                    var isValid = true;
                    $scope.invalidMessage.$infoForm = null;
                    if ($scope.user.newPwd1 && $scope.user.newPwd2
                        && $scope.user.newPwd1 !== $scope.user.newPwd2) {
                        $scope.invalidMessage.$infoForm = '第二次输入的新密码与第一次输入的新密码不一致！';
                        isValid = false;
                    }
                    return isValid;
                };

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if (!validatePwd()) {
                        return;
                    }
                    userService.editPwd({
                    	userName: userName,
                        password: $scope.user.password
                    }, $scope.user.newPwd1).then(function(resp){
                        if (resp.result === 1) {
                            alertService.success("密码修改成功");
                            $scope.dismiss();
                        } else if (resp.result === -11) {
                            alertService.error("原密码输入错误，请重新输入！");
                        } else {
                            $scope.invalidMessage.$infoForm = resp.errorMsg;
                        }
                    });
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.LoginController', [
            '$scope',
            'userService',
            function ($scope, userService) {

                $scope.user = {"remember-me":true,"remember":true};
                $scope.invalidMessage = {};

                $scope.$watch('user.username', function () {
                    $scope.invalidMessage.$form = "";
                });

                $scope.$watch('user.password', function () {
                    $scope.invalidMessage.$form = '';
                });

                $scope.$watch('user.remember', function (value) {
                    $scope.user["remember-me"] = value ;
                });

                $scope.login = function () {
                    userService.login($scope.user).then(function(){
                        userService.getUserByName($scope.user.username).then(function(resp){
                            userService.setCurrentUser(resp);
                            $scope.postSignIn();
                        });
                    }, function(){
                        $scope.invalidMessage.$form = '用户不存在或者密码错误！';
                    })
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.UserFormController', [
            '$scope',
            'userData',
            '$timeout',
            '$modalInstance',
            'userService',
            'pageService',
            'alertService',
            function ($scope, userData, $timeout, $modalInstance, userService, pageService, alertService) {
                $scope.userInfo = userData;
                $scope.formTitle = '新增用户';
                $scope.isEdit = false;
                if ($scope.userInfo.userId) {
                	$scope.isEdit = true;
                    $scope.userInfo.userId = parseInt($scope.userInfo.userId);
                    $scope.formTitle = '修改用户';
                }

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.userInfo.userId) {
                    	userService.updateUserInfo($scope.userInfo).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('');
                             } else {
	                    		alertService.success('用户修改已保存。');
	                            $modalInstance.close($scope.userInfo);
                             }
                        });
                    } else {
                    	userService.createUserInfo($scope.userInfo).then(function(resp){
                            if (resp.userId === -1) {
                                alertService.error('用户名:' + $scope.userInfo.userName + '已经存在!');
                                $modalInstance.close();
                            } else {
	                    		alertService.success('用户创建成功。');
	                            $modalInstance.close($scope.userInfo);
                            }
                        });
                    }
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.UserListController', [
            '$scope',
            '$modal',
            '$timeout',
            '$state',
            'userService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, $modal, $timeout, $state, userService, orgService, pageService, alertService) {
                $scope.currentUser = userService.getCurrentUser();
                $scope.userOrgId = '';
                $scope.currentPage = 1;
                $scope.itemsPerPage = 20;
                $scope.userInfos = [];
                $scope.treeDataList = [];
                $scope.treeOptions = {multiSelection: false, nodeChildren: "childrens"};

                $scope.showSelected = function (sel) {
                    //console.info("$scope.selectedNode:"+sel.orgId);
                    $scope.userOrgId = sel.orgId;
                    $scope.refreshData(true);
                };

                orgService.getAllOrgStructure().then(function (cResp) {
                    $scope.treeData = cResp;
                    $scope.expandedNodes = [$scope.treeData[0]];
                    if ($scope.treeData.length > 0 && $scope.treeData[0].childrens) {
                        $scope.expandedNodes.push($scope.treeData[0].childrens[0]);
                    }
                });


                $scope.refreshData = function (init) {
                    pageService.mask('user-list-spinner');
                    userService.getAllUsers({
                        orgId: $scope.userOrgId,
                        pageStart: $scope.currentPage - 1,
                        pageSize: $scope.itemsPerPage
                    }).then(function (cResp) {
                        $scope.userInfos = cResp.currentList;
                        $scope.totalSize = cResp.totalSize;
                        pageService.unmask('user-list-spinner');
                    });
                };

                $scope.openForm = function (userInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.user.user-form.html',
                        controller: 'widgets.user.UserFormController',
                        size: 'lg',
                        resolve: {
                            userData: function () {
                                return userInfo ? _.assign({}, userInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newUserInfo) {
                        if (newUserInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.openOrgForm = function (userInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.user.user-org-form.html',
                        controller: 'widgets.user.UserOrgFormController',
                        size: 'md',
                        resolve: {
                            userData: function () {
                                return userInfo ? _.assign({}, userInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newUserInfo) {
                        if (newUserInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.openRoleForm = function (userInfo) {
                    var form = $modal.open({
                        templateUrl: 'widgets.user.user-role-form.html',
                        controller: 'widgets.user.UserRoleFormController',
                        size: 'lg',
                        resolve: {
                            userData: function () {
                                return userInfo ? _.assign({}, userInfo) : {};
                            }
                        },
                        backdrop: false,
                        windowClass: 'browse-origin-modal'
                    });

                    form.result.then(function (newUserInfo) {
                        if (newUserInfo) {
                            $scope.refreshData();
                        }
                    });
                };

                $scope.delete = function (userInfo) {
                    userService.deleteUserInfo(userInfo.userId).then(function (resp) {
                        if (resp.result === -1) {
                            alertService.error('删除失败。');
                        } else {
                            alertService.success('用户删除成功。');
                            $scope.refreshData();
                        }
                    });
                };

                $scope.pageChanged = function (currentPage) {
                    $scope.currentPage = currentPage;
                    $scope.refreshData();
                };

            }]);
})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.UserOrgFormController', [
            '$scope',
            'userData',
            '$timeout',
            '$modalInstance',
            'userService',
            'orgService',
            'pageService',
            'alertService',
            function ($scope, userData, $timeout, $modalInstance, userService, orgService, pageService, alertService) {
                $scope.userInfo = userData.userInfo;
                $scope.invalidMessage = {};
                $scope.treeData = [];
                $scope.selectedNodes = [];
                $scope.treeOptions = {multiSelection: true, nodeChildren: "childrens"};

                $scope.dismiss = function () {
                    $modalInstance.dismiss();
                };

                orgService.getAllOrgStructure().then(function (cResp) {
                    $scope.treeData = cResp;
                    orgService.getUserOrgs($scope.userInfo.userName).then(function (resp) {
                        var selected = [];
                        for (var i = 0; i < resp.length; i++) {
                            selected.push(resp[i]);
                        }
                        $scope.selectedNodes = selected;
                        $scope.expandedNodes = [$scope.treeData[0]];
                    });
                });

                $scope.saveUserOrg = function () {
                    var orgIds = [];
                    angular.forEach($scope.selectedNodes, function (value, key) {
                        orgIds.push(value.orgId);
                    });
                    var data = {
                        'userId': $scope.userInfo.userId,
                        'orgIds': orgIds.join(",")
                    };
                    userService.saveUserOrgLink(data).then(function (resp) {
                        if (resp.result === -1) {
                            alertService.warning('用户授权组织失败!');
                        } else {
                            alertService.success('用户授权组织成功.');
                            $modalInstance.close($scope.userInfo);
                        }
                    });
                };
            }
        ])
    ;

})
(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.UserPersonalFormController', [
            '$scope',
            'userName',
            '$timeout',
            '$modalInstance',
            'userService',
            'pageService',
            'alertService',
            function ($scope, userName, $timeout, $modalInstance, userService, pageService, alertService) {
            	$scope.userName = userName;
            	//console.info("userName:"+$scope.userName);
                userService.getUserByName($scope.userName).then(function(resp){
                	$scope.userInfo = resp.userInfo;
                	if ($scope.userInfo.userId) {
                    	$scope.isEdit = true;
                        $scope.userInfo.userId = parseInt($scope.userInfo.userId);
                    }
                });
                
                $scope.isEdit = false;

                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                $scope.save = function(){
                    if ($scope.isEdit) {
                    	userService.updateUserInfo($scope.userInfo).then(function(resp){
                    		 if (resp.result === -1) {
                             	alertService.warning('');
                             } else {
	                    		alertService.success('用户修改已保存。');
	                    		$scope.dismiss();
                             }
                        });
                    } 
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .controller('widgets.user.UserRoleFormController', [
            '$scope',
            'userData',
            '$timeout',
            '$modalInstance',
            'userService',
            'orgService',
            'roleService',
            'pageService',
            'alertService',
            function ($scope, userData, $timeout, $modalInstance, userService, orgService, roleService, pageService, alertService) {
            	$scope.userInfo = userData;
                $scope.invalidMessage = {};
                
                $scope.dismiss = function(){
                    $modalInstance.dismiss();
                };

                roleService.getAllUserRoleByUserId().then(function(cResp) {
                	$scope.roleList = cResp;
                });
                
                roleService.getAllUserSelfRoleByUserId($scope.userInfo.userId).then(function(cResp) {
                	$scope.roleSelfList = cResp;
                	$scope.userInfo.role = [];
                    _.forEach($scope.roleSelfList, function(role) {
                    	$scope.userInfo.role.push(role.roleId);
                    });
                });
                
                $scope.saveUserRole = function(){
                	var data = {
                		'userId':$scope.userInfo.userId,
                		'roles':$scope.userInfo.role.join(',')
                	};
                	userService.saveUserRoleLink(data).then(function(resp){
                		if (resp.result === -1) {
                        	alertService.warning('！');
                        } else {
                    		alertService.success('用户授权角色成功。');
                            $modalInstance.close($scope.userInfo);
                        }
                    });
                };
            }
        ]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .directive('appLogin', [
            function () {
                return {
                    restrict: 'E',
                    scope: {
                        postSignIn: '&'
                    },
                    templateUrl: 'widgets.user.login.html',
                    controller: 'widgets.user.LoginController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .directive('appUserList', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: 'widgets.user.user-list.html',
                    controller: 'widgets.user.UserListController',
                    replace: true
                };
            }]);

})(window, window.angular);
(function (window, angular) {
    "use strict";

    angular.module('module.widgets.user')
        .directive('focusMe', function($timeout) {
        return {
            restrict: 'A',
            scope: { trigger: '@focusMe' },
            link: function(scope, element) {
                scope.$watch('trigger', function(value) {
                    if(value === "true") {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    });
    
})(window, window.angular);
angular.module("module.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("advertise.finish.push.html","<app-advertise-finish-push-list></app-advertise-finish-push-list>\n");
$templateCache.put("advertise.list.html","<app-advertise-list></app-advertise-list>\n");
$templateCache.put("advertise.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("footer.main.html","<footer class=\"main-footer\">\n  <p class=\"center-block text-center\">© {{year}} 前海易购 版权所有</p>\n</footer>");
$templateCache.put("goods.create.html","<div class=\"row\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h3 ng-if=\"!isEdit\">新建商品\n                <button class=\"btn btn-default pull-right\" ng-click=\"cancel()\">取消并返回</button>\n            </h3>\n            <h3 ng-if=\"isEdit\">修改商品\n                <button class=\"btn btn-default pull-right\" ng-click=\"cancel()\">取消并返回</button>\n            </h3>\n        </div>\n    </div>\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <h5 class=\"panel-title\">商品图片：</h5>\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"form-horizontal\" ng-submit=\"upload()\" enctype=\"multipart/form-data\">\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"inputName\" class=\"col-md-2 control-label\">商品图片：</label>\n\n                        <div class=\"col-md-2\">\n                            <input type=\"file\" file-model=\"goods.skuPicFile\" required class=\"form-control\">\n                        </div>\n                        <div class=\"col-md-2\">\n                            <button type=\"submit\" class=\"btn btn-success\">上传</button>\n                        </div>\n                        <label for=\"inputName\" class=\"col-md-2 control-label\" ng-show=\"goods.skuPicUrl\">图片展示：</label>\n\n                        <div class=\"col-md-4\">\n                            <img width=\"200\" height=\"160\" ng-src=\"{{goods.skuPicUrl}}\" ng-show=\"goods.skuPicUrl\">\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <h5 class=\"panel-title\">商品基本信息：</h5>\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"goodsBaseForm\" novalidate>\n                <fieldset>\n                    <div class=\"row col-md-12\">\n                        <div class=\"form-group\">\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">商品品牌：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" ng-model=\"goods.skuPackageType\"\n                                       class=\"form-control\" placeholder=\"商品品牌\" required>\n                            </div>\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">商品名称：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" ng-model=\"goods.skuSubject\"\n                                       class=\"form-control\" placeholder=\"商品的简称\" required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">成本价(分)：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" ng-model=\"goods.skuOriginalPrice\"\n                                       class=\"form-control\" ng-pattern=\"/^[1-9]d*|0$/\" placeholder=\"仅为数字，单位为分\" required>\n                            </div>\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">零售价(分)：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" ng-model=\"goods.skuSellingPrice\"\n                                       class=\"form-control\" ng-pattern=\"/^[1-9]d*|0$/\" placeholder=\"仅为数字，单位为分\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">商品规格：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" ng-model=\"goods.skuSize\"\n                                       class=\"form-control\" placeholder=\"如：100ML\" required>\n                            </div>\n                            <label for=\"inputName\" class=\"col-md-2 control-label\">商品图片：</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" ng-disabled=\"true\" ng-model=\"goods.skuPicUrl\" required\n                                       placeholder=\"必须先上传广告图片或视频\" class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12 text-center\">\n                            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"goodsBaseForm.$invalid\">保&nbsp;&nbsp;&nbsp;&nbsp;存</button>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("goods.list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <h3>\n                商品管理&nbsp;&nbsp;&nbsp;&nbsp;\n                <button class=\"btn btn-primary\" ng-click=\"newGoods()\"\n                        ng-if=\"$root.haveAuth(\'050302\', currentUser.rules)\">\n                    <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建商品\n                </button>\n            </h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form class=\"form-horizontal\" name=\"searchForm\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 col-md-offset-1 control-label\">商品品牌</label>\n\n                    <div class=\"col-md-2\">\n                        <select ng-model=\"goods.skuBrand\" class=\"form-control\">\n                            <option value=\"\">--</option>\n                            <option value=\"{{skuBrand}}\" ng-repeat=\"skuBrand in allFilterBrand\">\n                                {{skuBrand}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button type=\"button\" ng-click=\"search()\" ng-disabled=\"searchForm.$invalid\"\n                                class=\"btn btn-success\"><i class=\"fa fa-search\"></i> 查询\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"goods-list-spinner\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover \">\n                <tr>\n                    <th>商品品牌</th>\n                    <th>商品名称</th>\n                    <th>商品规格</th>\n                    <th>成本价(分)</th>\n                    <th>零售价(分)</th>\n                    <th>商品图片</th>\n                    <th>添加时间</th>\n                    <th>操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"goods in goodsList\">\n                    <td>\n                        {{goods.skuPackageType}}\n                    </td>\n                    <td>\n                        {{goods.skuSubject}}\n                    </td>\n                    <td>\n                        {{goods.skuSize}}\n                    </td>\n                    <td>\n                        {{goods.skuOriginalPrice}}\n                    </td>\n                    <td>\n                        {{goods.skuSellingPrice}}\n                    </td>\n                    <td>\n                        <img width=\"40\" height=\"32\" ng-src=\"{{goods.skuPicUrl}}\" ng-show=\"goods.skuPicUrl\">\n                    </td>\n                    <td>\n                        {{goods.gmtCreated | date : \'yyyy-MM-dd HH:mm\'}}\n                    </td>\n                    <td>\n                        <button class=\"btn btn-xs btn-primary\"\n                                data-ng-click=\"editGoods(goods)\" ng-if=\"$root.haveAuth(\'050303\', currentUser.rules)\">修改\n                        </button>\n                        <button class=\"btn btn-xs btn-danger\"\n                                data-ng-click=\"delete(goods)\" ng-if=\"$root.haveAuth(\'050304\', currentUser.rules)\"><i\n                                class=\"fa fa-trash-o\"></i>&nbsp;删除\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"row text-center\">\n            <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                        max-size=\"6\"\n                        items-per-page=\"itemsPerPage\"\n                        total-items=\"pageGoods.totalElements\"\n                        ng-model=\"currentPage\"\n                        ng-change=\"pageChanged(currentPage)\"\n                        previous-text=\"&lt;\" next-text=\"&gt;\"\n                        first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n        </div>\n    </div>\n</div>");
$templateCache.put("goods.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("help.main.html","<div class=\"content-wrapper\">\n	<section class=\"content\">\n		<div ui-view></div>\n	</section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("home.dashboard.html","<aside ng-class=\"{\'control-sidebar-open\': openedOrg}\" class=\"control-sidebar no-padding control-sidebar-light\">\n    <div class=\"box box-widget no-border no-shadow\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">组织列表</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" ng-click=\"closeOrg()\" class=\"btn btn-box-tool\"><i class=\"fa fa-times\"></i></button>\n            </div>\n            <!-- /.box-tools -->\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <treecontrol class=\"tree-classic\" tree-model=\"treeData\"\n                         on-selection=\"showSelected(node)\" expanded-nodes=\"expandedNodes\"\n                         options=\"treeOptions\"> {{node.orgName}}\n            </treecontrol>\n        </div>\n        <!-- /.box-body -->\n    </div>\n\n</aside>\n<!-- /.control-sidebar -->\n<!-- Add the sidebar\'s background. This div must be placed\n     immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n\n<div class=\"box box-widget\">\n    <div class=\"box-body table-responsive\">\n        <form class=\"form-inline\" novalidate>\n            <div class=\"input-group\">\n                <input type=\"text\" disabled value=\"{{currentOrg}}\" class=\"form-control\" placeholder=\"组织名称\">\n                          <span class=\"input-group-btn\">\n                            <button ng-click=\"openOrg()\" class=\"form-control btn btn-default\" type=\"button\"><i class=\"fa fa-sitemap\"></i>选择组织</button>\n                          </span>\n            </div>\n            <!-- /input-group -->\n            <div class=\"form-group\" style=\"margin: 0 10px;\">\n                <label style=\"margin-right: 10px\" class=\"control-label\">机器编号:</label>\n                <input style=\"max-width: 120px;\" type=\"text\" ng-model=\"searchMachine.machineCode\" class=\"form-control\"\n                       placeholder=\"查询机器编号\"/>\n            </div>\n            <div class=\"form-group\" style=\"margin: 0 10px;\">\n                <label style=\"margin-right: 10px\" class=\"control-label\">出货状态:</label>\n\n                <select ng-model=\"searchMachine.online\" style=\"min-width: 80px\" class=\"form-control\">\n                    <option value=\"\">全部</option>\n                    <option value=\"true\">出货成功</option>\n                    <option value=\"false\">出货失败</option>\n                </select>\n            </div>\n            <div class=\"form-group\" style=\"margin: 10px;\">\n                <button type=\"button\" ng-click=\"refreshData()\" class=\"form-control btn btn-success\">\n                    <i class=\"fa fa-search\"></i> 查询\n                </button>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box bg-red\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-star-o\"></i></span>\n\n            <div class=\"info-box-content\">\n                <span class=\"info-box-text\">上月销售金额</span>\n                <span class=\"info-box-number\">¥193139.22</span>\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" style=\"width: 100%\"></div>\n                </div>\n                <span class=\"progress-description\">\n                      销售数量:180\n                  </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box bg-green\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-bookmark-o\"></i></span>\n\n            <div class=\"info-box-content\">\n                <span class=\"info-box-text\">当月累计金额</span>\n                <span class=\"info-box-number\">¥13648.66</span>\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" style=\"width: 100%\"></div>\n                </div>\n                <span class=\"progress-description\">\n                      销售数量:180\n                  </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box bg-aqua\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-flag-o\"></i></span>\n\n            <div class=\"info-box-content\">\n                <span class=\"info-box-text\">今日销售金额</span>\n                <span class=\"info-box-number\">¥410.88</span>\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" style=\"width: 100%\"></div>\n                </div>\n                <span class=\"progress-description\">\n                      销售数量:180\n                  </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div onclick=\"alert(1)\" style=\"cursor: pointer;\" class=\"info-box bg-yellow\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-cloud\"></i></span>\n\n            <div class=\"info-box-content\">\n                <span class=\"info-box-text\">在线机器数量</span>\n                <span class=\"info-box-number\">41410(89.22%)</span>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" style=\"width: 88%\"></div>\n                </div>\n                  <span class=\"progress-description\">\n                      机器总数:50021\n                  </span>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"orderMoneyLine\" style=\"width: 100%;height:400px;overflow:auto;\"></div>");
$templateCache.put("home.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("login.main.html","<app-login post-sign-in=\"gotoHome()\"></app-login>");
$templateCache.put("machine.aisle-goods-list.html","<app-machine-aisle-goods-list machine-id = {{machineId}}></app-machine-aisle-goods-list>");
$templateCache.put("machine.aisle-list.html","<app-machine-aisle-list template-id = {{templateId}}></app-machine-aisle-list>");
$templateCache.put("machine.aisle-template.html","<app-machine-aisle-template-list></app-machine-aisle-template-list>");
$templateCache.put("machine.copy.html","<div ng-if=\"$root.haveAuth(\'010501\', currentUser.rules)\" class=\"center-block box box-widget no-padding\" style=\"max-width: 430px\">\n    <h3>使用说明</h3>\n    <h4>先调整好一台机器的货道陈列,然后其他机器可以复制这台机器的陈列</h4>\n    <div class=\"box-header with-border\">\n        <h3 class=\"box-title \">复制机器货道信息,请输入<span class=\"text-warning\">完整机器编号</span></h3>\n    </div>\n    <form>\n        <div class=\"box-body\">\n            <div class=\"form-group\">\n                <label for=\"inputFrom\" class=\"control-label\">从</label>\n                <input type=\"text\" ng-model=\"copy.from\" class=\"form-control\" id=\"inputFrom\" placeholder=\"设备编号\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputTo\" class=\"control-label\">复制到</label>\n                <input type=\"text\" ng-model=\"copy.to\" class=\"form-control\" id=\"inputTo\" placeholder=\"设备编号\">\n            </div>\n        </div>\n        <div class=\"box-footer text-center\">\n            <button type=\"submit\" ng-if=\"$root.haveAuth(\'010502\', currentUser.rules)\" data-ng-click=\"machineCopy()\" class=\"btn btn-default\">提交</button>\n        </div>\n    </form>\n</div>");
$templateCache.put("machine.list.html","<app-machine-list></app-machine-list>");
$templateCache.put("machine.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("machine.map.html","<div class=\"row\" style=\"height:730px\" id=\"machine-map\"></div>");
$templateCache.put("machine.type.html","<app-machine-type-list></app-machine-type-list>");
$templateCache.put("navbar.main.html","<div ng-show=\"$state.current.name!=\'login\'\">\n    <header class=\"main-header\">\n        <!-- Logo -->\n        <a href=\"\" ng-click=\"gotoMachineList()\" class=\"logo\">\n            <!-- mini logo for sidebar mini 50x50 pixels -->\n            <span class=\"logo-mini\">\n                <img src=\"images/logo.png\" class=\"navbar-header-logo\">\n            </span>\n            <!-- logo for regular state and mobile devices -->\n            <span class=\"logo-lg\">\n                <img src=\"images/logo.png\" class=\"navbar-header-logo\">\n                 前海易购\n            </span>\n        </a>\n        <!-- Header Navbar: style can be found in header.less -->\n        <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n            <!-- Sidebar toggle button-->\n            <a class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n                <span class=\"sr-only\">Toggle navigation</span>\n            </a>\n\n            <div class=\"navbar-custom-menu\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"hidden-xs hidden-sm hidden-md\">\n                        <a href=\"#\" class=\"dropdown-toggle\" aria-expanded=\"false\">\n                            上次登录IP:&nbsp;{{currentUser.lastLoginIp}}\n                        </a>\n                    </li>\n                    <li class=\"hidden-xs hidden-sm hidden-md\">\n                        <a href=\"#\" class=\"dropdown-toggle\" aria-expanded=\"false\">\n                            上次登录时间:&nbsp;{{currentUser.lastLoginTime | date : \'yyyy-MM-dd HH:mm:ss\'}}\n                        </a>\n                    </li>\n                    <!-- Messages: style can be found in dropdown.less-->\n                    <li class=\"dropdown messages-menu\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                            <i class=\"fa fa-envelope-o\"></i>\n                            <!--<span class=\"label label-success\">4</span>-->\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"header\">暂无消息</li>\n                            <li class=\"footer\"><a href=\"\">查看全部消息</a></li>\n                        </ul>\n                    </li>\n                    <!-- Notifications: style can be found in dropdown.less -->\n                    <li class=\"dropdown notifications-menu\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                            <i class=\"fa fa-bell-o\"></i>\n                            <span ng-if=\"currentUser.regIp!=currentUser.lastLoginIp\"\n                                  class=\"label label-warning\">1</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li ng-show=\"currentUser.regIp==currentUser.lastLoginIp\" class=\"header\">暂无告警</li>\n                            <li ng-if=\"currentUser.regIp!=currentUser.lastLoginIp\" class=\"header\">上次登录IP:{{currentUser.lastLoginIp}}</li>\n                            <li ng-if=\"currentUser.regIp!=currentUser.lastLoginIp\" class=\"header\">本次登录IP:{{currentUser.regIp}}</li>\n                            <li class=\"footer\"><a href=\"\">查看所有告警</a></li>\n                        </ul>\n                    </li>\n                    <!-- User Account: style can be found in dropdown.less -->\n                    <li>\n                        <a href=\"\" ng-click=\"gotoUserInfo(currentUser.userName)\">\n                            <i class=\"fa fa-user\"></i>&nbsp;{{currentUser.userName}}\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"\" ng-click=\"editPassword(currentUser.userName)\">\n                            <i class=\"fa fa-key\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"\" ng-click=\"logout()\">\n                            <i class=\"fa fa-sign-out\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n\n    <!-- =============================================== -->\n\n    <!-- Left side column. contains the sidebar -->\n    <aside class=\"main-sidebar\">\n        <!-- sidebar: style can be found in sidebar.less -->\n        <section class=\"sidebar\">\n            <!-- sidebar menu: : style can be found in sidebar.less -->\n            <ul class=\"sidebar-menu\">\n                <li class=\"header\">菜单</li>\n                <li ng-class=\"{\'active\': currentTab==\'home.dashboard\'}\">\n                    <a href=\"\">\n                        <i class=\"fa fa-dashboard\"></i><span>仪表台</span>\n                        <small class=\"label pull-right bg-green\">new</small>\n                    </a>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'01\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine\'}\"\n                    class=\"treeview\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fax\"></i>\n                        <span>设备管理</span>\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li ng-if=\"$root.haveAuth(\'0101\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine.type\'}\">\n                            <a href=\"\" ng-click=\"gotoMachineType()\"><i class=\"fa fa-cog\"></i>机器类型</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0102\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine.aisle\'}\">\n                            <a href=\"\" ng-click=\"gotoAisleTemplate()\"><i class=\"fa fa-table\"></i>货道模板</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0103\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine.list\'}\">\n                            <a href=\"\" ng-click=\"gotoMachineList()\"><i class=\"fa fa-android\"></i>设备列表</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0104\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine.map\'}\">\n                            <a href=\"\" ng-click=\"gotoMachineMap()\"><i class=\"fa fa-map-marker\"></i>设备地图</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0105\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'machine.copy\'}\">\n                            <a href=\"\" ng-click=\"gotoMachineCopy()\"><i class=\"fa fa-copy\"></i>设备复制</a>\n                        </li>\n                    </ul>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'02\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'promotion\'}\"\n                    class=\"treeview\">\n                    <a href=\"\">\n                        <i class=\"fa fa-shopping-cart\"></i>\n                        <span>促销管理</span>\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li ng-if=\"$root.haveAuth(\'02\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoPromotionDesc()\"><i class=\"fa fa-th-large\"></i>促销描述</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'02\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoPromotionList()\"><i class=\"fa fa-list\"></i>促销活动</a>\n                        </li>\n                    </ul>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'03\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'advertise\'}\"\n                    class=\"treeview\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-list-alt\"></i> <span>广告管理</span>\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li ng-if=\"$root.haveAuth(\'0301\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoAdvertise()\"><i class=\"fa fa-list-alt\"></i>广告资源</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0302\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoFinishPushAdvertise()\"><i class=\"fa fa-desktop\"></i>已推送广告</a>\n                        </li>\n                    </ul>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'04\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'report\'}\"\n                    class=\"treeview\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-bar-chart\"></i> <span>报表管理</span>\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li ng-if=\"$root.haveAuth(\'0401\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'report.list\'}\">\n                            <a href=\"\" ng-click=\"gotoOrderList()\"><i class=\"fa fa-bar-chart\"></i>订单列表</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0402\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'report.fill\'}\">\n                            <a href=\"\" ng-click=\"gotoFillGoodsList()\"><i class=\"fa fa-area-chart\"></i>补货统计</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0403\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'report.profit\'}\">\n                            <a href=\"\" ng-click=\"gotoProfitReport()\"><i class=\"fa fa-line-chart\"></i>利润统计</a>\n                        </li>\n                    </ul>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'05\', currentUser.rules)\" ng-class=\"{\'active\': currentTab==\'system\'}\"\n                    class=\"treeview\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-cogs\"></i> <span>系统管理</span>\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li ng-if=\"$root.haveAuth(\'0501\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoPayTypeList()\"><i class=\"fa fa-money\"></i>支付方式</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0502\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoAndroidVersionList()\"><i class=\"fa fa-android\"></i>安卓版本</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0503\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoGoods()\"><i class=\"fa fa-tag\"></i>商品管理</a>\n                        </li>\n                        <li ng-if=\"$root.haveAuth(\'0504\', currentUser.rules)\">\n                            <a href=\"\" ng-click=\"gotoEgocard()\"><i class=\"fa fa-credit-card\"></i>充易购卡</a>\n                        </li>\n                    </ul>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'0901\', currentUser.rules)\">\n                    <a href=\"\" data-ng-click=\"gotoOrgTree()\">\n                        <i class=\"fa fa-university\"></i><span>组织管理</span>\n                    </a>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'0902\', currentUser.rules)\">\n                    <a href=\"\" data-ng-click=\"gotoUserList()\">\n                        <i class=\"fa fa-users\"></i><span>用户管理</span>\n                    </a>\n                </li>\n                <li ng-if=\"$root.haveAuth(\'0903\', currentUser.rules)\">\n                    <a href=\"\" data-ng-click=\"gotoRoleList()\">\n                        <i class=\"fa fa-cog\"></i><span>角色管理</span>\n                    </a>\n                </li>\n            </ul>\n        </section>\n        <!-- /.sidebar -->\n    </aside>\n</div>");
$templateCache.put("org.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <app-org-list></app-org-list>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("promotion.desc.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <h3>\n                促销描述\n            </h3>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2>第二瓶半价</h2>\n\n        <p class=\"text-success\">消费者购买指定产品，第一瓶原价，60秒内购买第二瓶，只需支付半价。</p>\n\n        <p>例如:</p>\n\n        <p>消费者购买百事可乐600ml，第一瓶3.5元，60秒内购买第二瓶，只需支付1.75元。</p>\n    </div>\n    <div class=\"col-md-6\">\n        <h2>抽奖</h2>\n\n        <p class=\"text-success\">微信账号或支付宝账号，购买指定产品九次，第十瓶免单。</p>\n\n        <p>例如:</p>\n\n        <p>微信账号或支付宝账号，购买百事可乐600ml九次，第十瓶支付0.01元。</p>\n    </div>\n</div>\n");
$templateCache.put("promotion.list.html","<div class=\"row\">\n    <div class=\"box box-widget\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">活动列表</h3>\n\n            <div class=\"box-tools\">\n                <div class=\"input-group input-group-sm\">\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-primary pull-right\" ng-click=\"newGoods()\">\n                            <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建活动\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" us-spinner spinner-key=\"goods-list-spinner\">\n            <table class=\"table table-hover table-striped\">\n                <tr>\n                    <th>活动名称</th>\n                    <th>开始时间</th>\n                    <th>结束时间</th>\n                    <th>活动类型</th>\n                    <th>参与机器</th>\n                    <th>参与商品</th>\n                </tr>\n                <tr ng-repeat=\"promotion in promotions\">\n                    <td>\n                        {{promotion.promotionName}}\n                    </td>\n                    <td>\n                        {{promotion.promotionStartTime}}\n                    </td>\n                    <td>\n                        {{promotion.promotionEndTime}}\n                    </td>\n                    <td>\n                        {{promotion.promotionType}}\n                    </td>\n                    <td>\n                        {{promotion.promotionMachine}}\n                    </td>\n                    <td>\n                        {{promotion.promotionProduct}}\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer text-center clearfix\">\n            <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                        max-size=\"6\"\n                        items-per-page=\"10\"\n                        total-items=\"10\"\n                        ng-model=\"pageSize\"\n                        ng-change=\"\"\n                        previous-text=\"&lt;\" next-text=\"&gt;\"\n                        first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("promotion.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("report.fill-goods-list.html","<app-report-fill-goods-list></app-report-fill-goods-list>");
$templateCache.put("report.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("report.order-list.html","<app-report-order-list></app-report-order-list>");
$templateCache.put("report.profit-list.html","<app-report-profit-list></app-report-profit-list>");
$templateCache.put("role.list.html","<app-role-list></app-role-list>\n");
$templateCache.put("role.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("system.android.html","<app-system-android-version-list></app-system-android-version-list>");
$templateCache.put("system.egocard.html","<div us-spinner spinner-key=\"egocard-list-spinner\" class=\"row\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">易购卡充值</div>\n        <div class=\"panel-body\">\n            <form class=\"form-horizontal\" novalidate>\n                <div class=\"form-group\">\n                    <label ng-if=\"$root.haveAuth(\'050401\', currentUser.rules)\"\n                           class=\"col-md-2 control-label\">公司名称</label>\n\n                    <div ng-if=\"$root.haveAuth(\'050401\', currentUser.rules)\" class=\"col-md-2\">\n                        <select ng-model=\"searchParam.clientType\" class=\"form-control\">\n                            <option value=\"NHGL\">南湖国旅</option>\n                        </select>\n                    </div>\n                    <div ng-if=\"$root.haveAuth(\'050401\', currentUser.rules)\" class=\"col-md-1\">\n                        <button type=\"button\" ng-click=\"search()\" class=\"btn btn-success\">查询</button>\n                    </div>\n\n                    <label ng-if=\"$root.haveAuth(\'050402\', currentUser.rules)\"\n                           class=\"col-md-2 control-label\">充值总金额</label>\n\n                    <div ng-if=\"$root.haveAuth(\'050402\', currentUser.rules)\" class=\"col-md-2\">\n                        <input type=\"text\" ng-model=\"egocardPay.totalMoney\" class=\"form-control\"/>\n                    </div>\n                    <div ng-if=\"$root.haveAuth(\'050402\', currentUser.rules)\" class=\"col-md-2\">\n                        <button type=\"button\" ng-click=\"separate()\" class=\"btn btn-success\">平均分到每张卡</button>\n                    </div>\n                    <div ng-if=\"$root.haveAuth(\'050402\', currentUser.rules)\" class=\"col-md-1\">\n                        <button ng-disabled=\"disenableRecharge\" type=\"button\" ng-click=\"recharge()\"\n                                class=\"btn btn-success\">充值\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n\n        <table class=\"table table-striped table-hover \">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>卡号</th>\n                <th>卡状态</th>\n                <th>卡余额({{nowTotalAmount/100 | currency:\"￥\" }})</th>\n                <th>充值金额</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"egocard in egocards\">\n                <td class=\"col-md-2 text-left\">{{$index+1}}</td>\n                <td class=\"col-md-3 text-left\">{{egocard.egocardNumber}}</td>\n                <td class=\"col-md-2 text-left\">{{egocard.egocardStatus | egocardstatus}}</td>\n                <td class=\"col-md-2 text-left\">{{egocard.amount/100 | currency:\"￥\"}}</td>\n                <td class=\"col-md-3\">\n                    <input ng-readonly=\"egocard.egocardStatus==\'lost\'\" type=\"number\" ng-model=\"egocard.rechargeMoney\"\n                           class=\"form-control\"/>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");
$templateCache.put("system.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("system.pay.html","<app-system-pay-type-list></app-system-pay-type-list>");
$templateCache.put("user.list.html","<app-user-list></app-user-list>");
$templateCache.put("user.main.html","<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <div ui-view></div>\n    </section>\n</div>\n<app-footer></app-footer>");
$templateCache.put("widgets.advertise.advertise-finish-push-list.html","<div class=\"row\">\n    <div class=\"col-md-12\" ng-if=\"$root.haveAuth(\'0302\', currentUser.rules)\">\n        <div class=\"box box-widget\">\n            <div class=\"box-header\">\n                <h3 class=\"box-title\">已推送广告</h3>\n                <div class=\"box-tools\">\n                    <form class=\"form-inline\" novalidate>\n                        <div class=\"form-group\" style=\"margin: 0 10px;\">\n                            <label class=\"control-label\">设备编号:</label>\n                            <input type=\"text\" ng-model=\"searchInfo.machineCode\" class=\"form-control\"\n                                   placeholder=\"机器编号\"/>\n                        </div>\n                        <div class=\"form-group\" style=\"margin: 0 10px;\">\n                            <button type=\"button\" ng-click=\"search()\"\n                                    class=\"btn btn-success\"><i class=\"fa fa-search\"></i>查询\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div us-spinner spinner-key=\"advertisePushTable\" class=\"box-body table-responsive no-padding\">\n                <table class=\"table table-striped table-hover\">\n                    <tr>\n                        <th>设备编号</th>\n                        <th>设备名称</th>\n                        <th>广告名称</th>\n                        <th>广告类型</th>\n                        <th>优先级</th>\n                        <th>推送日期</th>\n                        <th>开始日期</th>\n                        <th>结束日期</th>\n                        <th>开始时间</th>\n                        <th>结束时间</th>\n                        <th>操作</th>\n                    </tr>\n                    <tr ng-repeat=\"advertiseInfo in advertiseInfos\">\n                        <td>\n                            {{advertiseInfo.machineCode}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.machineName}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementName}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementType == \'1\' ? \'视频\' : \'图片\'}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementLevel | advertiseLevel}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.gmtCreated | date : \'yyyy-MM-dd\'}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementStartDay}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementEndDay}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementStartTime}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementEndTime}}\n                        </td>\n                        <td>\n                            <button class=\"btn btn-xs bg-purple\"\n                                    data-ng-click=\"openForm(advertiseInfo)\"\n                                    ng-if=\"$root.haveAuth(\'030201\', currentUser.rules)\">预览\n                            </button>\n                            <button class=\"btn btn-xs btn-danger\"\n                                    data-ng-click=\"delete(advertiseInfo)\"\n                                    confirm-title=\"确认\"\n                                    confirm-ok=\"确定\"\n                                    confirm-cancel=\"取消\"\n                                    confirm=\"确定删除已推送到【{{advertiseInfo.machineCode}}】机器的广告：【{{advertiseInfo.advertisementName}}】?\"\n                                    confirm-settings=\"{size: \'md\'}\"\n                                    ng-if=\"$root.haveAuth(\'030202\', currentUser.rules)\">删除\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"row text-center\">\n                <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                            max-size=\"6\"\n                            items-per-page=\"itemsPerPage\"\n                            total-items=\"pageFinishPush.totalSize\"\n                            ng-model=\"currentPage\"\n                            ng-change=\"pageChanged(currentPage)\"\n                            previous-text=\"&lt;\" next-text=\"&gt;\"\n                            first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.advertise.advertise-form.html","<div class=\"advertisement-form-bc\" us-spinner spinner-key=\"advertisement-upload-form\">\n	<div class=\"modal-body\">\n		<legend>{{formTitle}}</legend>\n		<div class=\"panel panel-primary\">\n		    <div class=\"panel-heading\">\n		        <h6 class=\"panel-title\">上传广告文件</h6>\n		    </div>\n		    <div class=\"panel-body\">\n		    	<form class=\"form-horizontal\" ng-submit=\"upload()\" enctype=\"multipart/form-data\">\n					<fieldset>\n						<div class=\"form-group\">\n							<label for=\"inputName\" class=\"col-md-2 control-label\">广告文件</label>\n							<div class=\"col-md-3\">\n		                        <select ng-model=\"advertiseInfo.advertisementType\" class=\"form-control\" required>\n		                        	<option value=\"0\">图片</option>\n		                        	<option value=\"1\">视频</option>\n		                        </select>\n		                    </div>\n							<div class=\"col-md-5\">\n								<input type=\"file\" file-model=\"advertiseInfo.advertiseFile\" required class=\"form-control\">\n							</div>\n							<div class=\"col-md-2\">\n								<button type=\"submit\" class=\"btn btn-success\">上传</button>\n							</div>\n						</div>\n						<div class=\"form-group\" ng-show=\"progressValueNow > 0 && progressValueNow <= 100\">\n							<div class=\"progress\">\n							  <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" \n							  		aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n							    <span class=\"sr-only\">40% Complete (success)</span>\n							  </div>\n							</div>\n						</div>\n					</fieldset>\n				</form>\n		    </div>\n		</div>\n		<div class=\"panel panel-primary\">\n		    <div class=\"panel-heading\">\n		        <h6 class=\"panel-title\">文件预览</h6>\n		    </div>\n		    <div class=\"panel-body\">\n		    	<fieldset>\n		        	<label for=\"input-params\" ng-click=\"showFile = !showFile;\" ng-init=\"showFile = false;\">\n		                <i class=\"fa fa-chevron-circle-right\" ng-if=\"!showFile\"></i>\n		                <i class=\"fa fa-chevron-circle-down\" ng-if=\"showFile\"></i>\n		                <span ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'0\'\">图片广告</span>\n		                <span ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'1\'\">视频广告</span>预览\n		            </label>\n		        	<div class=\"row\" ng-if=\"showFile\">\n		        		<div class=\"form-group col-md-12 text-center\">\n		        			<img width=\"500\" height=\"350\" ng-src=\"{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}\" \n			        		ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'0\'\">\n			        		<video width=\"500\" height=\"350\"  \n			        		ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'1\'\"\n			        		ng-src=\"{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}\" controls=\"controls\" type=\"video/mp4\">\n			        		</video>\n		        		</div>\n		        	</div>\n		        </fieldset>\n		    </div>\n		</div>\n		<div class=\"panel panel-primary\">\n		    <div class=\"panel-heading\">\n		        <h6 class=\"panel-title\">广告基本信息</h6>\n		    </div>\n		    <div class=\"panel-body\">\n		    	<form class=\"form-horizontal\" ng-submit=\"save()\" name=\"advertiseForm\">\n		            <fieldset>\n		                <div class=\"form-group\">\n		                    <label class=\"col-md-2 control-label\">广告名称</label>\n		                    <div class=\"col-md-4\">\n		                        <input type=\"text\" ng-model=\"advertiseInfo.advertisementName\" required class=\"form-control\">\n		                    </div>\n		                    <label class=\"col-md-2 control-label\">优先级</label>\n		                    <div class=\"col-md-4\">\n		                        <select ng-model=\"advertiseInfo.advertisementLevel\" required class=\"form-control\">\n		                        	<option value=\"11\">初始广告</option>\n		                        	<option value=\"12\">默认广告</option>\n		                        	<option value=\"13\">轮播广告</option>\n		                        </select>\n		                    </div>\n		                </div>\n		                <div class=\"form-group\">\n		                    <label class=\"col-md-2 control-label\">广告类型</label>\n		                    <div class=\"col-md-4\">\n		                        <select ng-model=\"advertiseInfo.advertisementType\" ng-disabled=\"true\" class=\"form-control\" required>\n		                        	<option value=\"0\">图片</option>\n		                        	<option value=\"1\">视频</option>\n		                        </select>\n		                    </div>\n		                    <label class=\"col-md-2 control-label\" ng-show=\"advertiseInfo.advertisementType==\'0\'\">显示时间</label>\n		                    <div class=\"col-md-4\" ng-show=\"advertiseInfo.advertisementType==\'0\'\">\n		                        <input type=\"text\" ng-model=\"advertiseInfo.advertisementShowTime\" class=\"form-control\">\n		                    </div>\n		                </div>\n		                <div class=\"form-group\">\n		                    <label class=\"col-md-2 control-label\">下载链接</label>\n		                    <div class=\"col-md-10\">\n		                        <input type=\"text\" ng-model=\"advertiseInfo.advertisementDownloadUrl\" required ng-disabled=\"true\" class=\"form-control\">\n		                    </div>\n							<input type=\"text\" ng-model=\"advertiseInfo.advertisementSize\" ng-hide=\"true\">\n		                </div>\n		            </fieldset>\n			        <div class=\"modal-footer\">\n			            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n			            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"advertiseForm.$invalid\" value=\"保存\">\n			        </div>\n			    </form>\n		    </div>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("widgets.advertise.advertise-list.html","<div class=\"row\">\n    <div class=\"col-md-12\" ng-if=\"$root.haveAuth(\'0301\', currentUser.rules)\">\n        <div class=\"box box-widget\">\n            <div class=\"box-header\">\n                <h3 class=\"box-title\">广告列表</h3>\n\n                <div class=\"box-tools\">\n                    <button class=\"btn bg-purple\" ng-click=\"openForm()\"\n                            ng-if=\"$root.haveAuth(\'030102\', currentUser.rules)\">\n                        新建广告\n                    </button>\n                </div>\n            </div>\n            <div us-spinner spinner-key=\"advertiseTable\" ng-if=\"$root.haveAuth(\'030101\', currentUser.rules)\" class=\"box-body table-responsive no-padding\">\n                <table class=\"table table-striped table-hover \">\n                    <tr>\n                        <th>ID</th>\n                        <th>广告名称</th>\n                        <th>广告类型</th>\n                        <th>显示时间</th>\n                        <th>下载链接</th>\n                        <th>资源大小</th>\n                        <th>优先级</th>\n                        <th>操作\n                            <button class=\"btn btn-xs btn-default\"\n                                    ng-click=\"refreshData(true)\">刷新\n                            </button>\n                        </th>\n                    </tr>\n                    <tr ng-repeat=\"advertiseInfo in advertiseInfos\">\n                        <td>\n                            {{advertiseInfo.advertisementId}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementName}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementType == \'1\' ? \'视频\' : \'图片\'}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementShowTime}}\n                        </td>\n                        <td>\n                            <abbr title=\"{{advertiseInfo.advertisementDownloadUrl}}\">{{advertiseInfo.advertisementDownloadUrl\n                                | characters:30 :true}}</abbr>\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementSize | advertiseSize}}\n                        </td>\n                        <td>\n                            {{advertiseInfo.advertisementLevel | advertiseLevel}}\n                        </td>\n                        <td>\n                            <button class=\"btn bg-purple btn-xs\"\n                                    data-ng-click=\"openForm(advertiseInfo)\"\n                                    ng-if=\"$root.haveAuth(\'030103\', currentUser.rules)\">修改\n                            </button>\n                            <button class=\"btn btn-danger btn-xs\"\n                                    data-ng-click=\"delete(advertiseInfo)\"\n                                    confirm-title=\"确认\"\n                                    confirm-ok=\"确定\"\n                                    confirm-cancel=\"取消\"\n                                    confirm=\"确定删除广告：{{advertiseInfo.advertisementName}}?\"\n                                    confirm-settings=\"{size: \'sm\'}\"\n                                    ng-if=\"$root.haveAuth(\'030104\', currentUser.rules)\">删除\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"row text-center\">\n                <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                            max-size=\"6\"\n                            items-per-page=\"itemsPerPage\"\n                            total-items=\"totalSize\"\n                            ng-model=\"currentPage\"\n                            ng-change=\"pageChanged(currentPage)\"\n                            previous-text=\"&lt;\" next-text=\"&gt;\"\n                            first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.advertise.advertise-view-form.html","<div class=\"advertisement-form-bc\" us-spinner\n	spinner-key=\"advertisement-upload-form\">\n	<div class=\"modal-body\">\n		<div class=\"panel panel-primary\">\n			<div class=\"panel-heading\">\n				<h6 class=\"panel-title\">文件预览</h6>\n			</div>\n			<div class=\"panel-body\">\n				<form action=\"\">\n					<fieldset>\n						<label for=\"input-params\"> <span\n							ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'0\'\">图片广告</span>\n							<span\n							ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'1\'\">视频广告</span>预览\n						</label>\n						<div class=\"row\">\n							<div class=\"form-group col-md-12 text-center\">\n								<img width=\"500\" height=\"350\"\n									ng-src=\"{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}\"\n									ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'0\'\">\n								<video width=\"500\" height=\"350\"\n									ng-show=\"advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType==\'1\'\"\n									ng-src=\"{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}\"\n									controls=\"controls\" type=\"video/mp4\">\n								</video>\n							</div>\n						</div>\n					</fieldset>\n					<div class=\"modal-footer\">\n						<a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("widgets.goods.goods-org-form.html","<div class=\"goods-org-form-bc\">\n    <form class=\"form-horizontal\" name=\"goodsBaseForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>To【{{goodsInfo.skuPackageType}}--{{goodsInfo.skuSubject}}】授权组织</legend>\n                <div class=\"panel panel-primary\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">组织</h6>\n				    </div>\n				    <div class=\"panel-body\">\n						<fieldset>\n							<input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\" ng-model=\"predicate\">\n							<treecontrol class=\"tree-classic\" tree-model=\"treeData\" on-selection=\"showSelected(node)\" \n								filter-expression=\"predicate\" filter-comparator=\"comparator\" \n						    	expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n							     {{node.orgName}}\n							 </treecontrol>\n						</fieldset>\n				    </div>\n				</div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.aisle-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" name=\"aisleTempalteForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">货道编号</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"aisleTemplate.aisleName\" ng-disabled=\"true\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">商品名称</label>\n                    <div class=\"col-md-10\">\n                    	<span class=\"form-control\">{{aisleTemplate.goodsSkuInfo.skuPackageType}}{{aisleTemplate.goodsSkuInfo.skuSubject}}{{aisleTemplate.goodsSkuInfo.skuSize}}</span>\n                        <!-- <input type=\"text\" ng-model=\"aisleTemplate.goodsSkuInfo.skuSubject\" ng-disabled=\"true\" required class=\"form-control\"> -->\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">商品选择</label>\n                    <div class=\"col-md-3\">\n                    	<select ng-model=\"goods.skuPackageType\" class=\"form-control\" ng-change=\"getAllFilterSubject(goods.skuPackageType)\">\n                        	<option value=\"{{skuBrand}}\" ng-repeat=\"skuBrand in allFilterBrand\">\n	                    		{{skuBrand}}\n	                    	</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"allFilterSubject\">\n                        <select ng-model=\"goods.skuSubject\" class=\"form-control\" ng-change=\"getAllFilterGoods(goods.skuPackageType, goods.skuSubject)\">\n	                    	<option value=\"{{skuSubject}}\" ng-repeat=\"skuSubject in allFilterSubject\">\n	                    		{{skuSubject}}\n	                    	</option>\n	                    </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"allFilterGoods\">\n                        <select ng-model=\"aisleTemplate.goodsSkuInfo.skuId\" class=\"form-control\" ng-change=\"showGoods(aisleTemplate.goodsSkuInfo.skuId)\">\n	                    	<option value=\"{{goodsItem.skuId}}\" ng-repeat=\"goodsItem in allFilterGoods\">\n	                    		{{goodsItem.skuSize}}\n	                    	</option>\n	                    </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">商品价(分)</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"aisleTemplate.aisleGoodsPrice\" required placeholder=\"仅为数字，单位为分\"\n                               ng-pattern=\"/^[1-9]d*|0$/\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">默认库存</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"aisleTemplate.defaultGoodsStock\" required class=\"form-control\" ng-pattern=\"/^[1-9]d*|0$/\">\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"aisleTempalteForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.aisle-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>\n                    货道模板<span ng-show=\"machineAisleTemplateDesc.templateName\">({{machineAisleTemplateDesc.templateName}})</span>--->货道设置\n                    <button class=\"btn btn-default pull-right\" ng-click=\"cancel()\">返回</button>\n                </h3>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"machine-aisle-list-spinner\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover \">\n                <tr>\n                    <th>序号</th>\n                    <th>货道编号</th>\n                    <th>商品品牌</th>\n                    <th>商品名称</th>\n                    <th>商品规格</th>\n                    <th>商品价格(分)</th>\n                    <th>默认库存</th>\n                    <th>操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"machineAisleTemplate in machineAisleTemplates\">\n                    <td>\n                        {{$index+1}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.aisleName}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.goodsSkuInfo.skuPackageType}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.goodsSkuInfo.skuSubject}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.goodsSkuInfo.skuSize}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.aisleGoodsPrice}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplate.defaultGoodsStock}}\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"openFormAisle(machineAisleTemplate)\">修改\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.machine.aisle-template-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"aisleTempalteDescForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">模板名称</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"aisleTemplateDesc.templateName\" required placeholder=\"输入唯一的模板名称\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">机器类型</label>\n                    <div class=\"col-md-4\">\n                    	<select ng-model=\"aisleTemplateDesc.machineTypeInfo.machineTypeId\" class=\"form-control\" required ng-if=\"!isEdit\">\n                        	<option value=\"{{machineType.machineTypeId}}\" ng-repeat=\"machineType in machineTypeList\"\n			    					ng-selected=\"{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}\">{{machineType.typeName}}</option>\n                        </select>\n                        <select ng-model=\"aisleTemplateDesc.machineTypeInfo.machineTypeId\" class=\"form-control\" required ng-if=\"isEdit\" ng-disabled=\"true\">\n                        	<option value=\"{{machineType.machineTypeId}}\" ng-repeat=\"machineType in machineTypeList\"\n			    					ng-selected=\"{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}\">{{machineType.typeName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">应用场景</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" ng-model=\"aisleTemplateDesc.applySceneDesc\" required placeholder=\"输入应用场景描述\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.name\">\n                    <i class=\"fa fa-warning\"></i>{{invalidMessage.name}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"aisleTempalteDescForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.aisle-template-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>\n            货道模板&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-primary\" ng-click=\"openForm()\" ng-show=\"$root.haveAuth(\'010202\', currentUser.rules)\">\n                <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建模板\n            </button>\n        </h3>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"machine-template-aisle-list-spinner\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover\">\n                <tr>\n                    <th>ID</th>\n                    <th>模板名称</th>\n                    <th>机型名称</th>\n                    <th>应用场景描述</th>\n                    <th>操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"machineAisleTemplateDesc in machineAisleTemplateDescs\">\n                    <td>\n                        {{$index+1}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplateDesc.templateName}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplateDesc.machineTypeInfo.typeName}}\n                    </td>\n                    <td>\n                        {{machineAisleTemplateDesc.applySceneDesc}}\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"setAisle(machineAisleTemplateDesc)\"\n                                ng-show=\"$root.haveAuth(\'010205\', currentUser.rules)\">设置货道\n                        </button>\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"openForm(machineAisleTemplateDesc)\"\n                                ng-show=\"$root.haveAuth(\'010203\', currentUser.rules)\">修改\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.machine.machine-address-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" name=\"machineAddressForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>设置机器地址</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">机器地址</label>\n                    <div class=\"col-md-3\">\n                    	<select ng-model=\"machineAddress.provinceId\" class=\"form-control\" required ng-change=\"showCityList(machineAddress.provinceId)\">\n                        	<option value=\"{{province.provinceId}}\" ng-repeat=\"province in provinceList\"\n                        			ng-selected=\"{{province.provinceId == machineAddress.provinceId}}\">\n	                    		{{province.name}}\n	                    	</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"cityList\">\n                        <select ng-model=\"machineAddress.cityId\" class=\"form-control\" required ng-change=\"showAreaList(machineAddress.cityId)\">\n	                    	<option value=\"\"></option>\n	                    	<option value=\"{{city.cityId}}\" ng-repeat=\"city in cityList\"\n	                    			ng-selected=\"{{machineAddress.cityId == city.cityId}}\">\n	                    		{{city.name}}\n	                    	</option>\n	                    </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"areaList\">\n                        <select ng-model=\"machineAddress.areaId\" class=\"form-control\" required>\n	                    	<option value=\"\"></option>\n	                    	<option value=\"{{area.areaId}}\" ng-repeat=\"area in areaList\"\n	                    			ng-selected=\"{{area.areaId == machineAddress.areaId}}\">\n	                    		{{area.name}}\n	                    	</option>\n	                    </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">详细地址</label>\n                    <div class=\"col-md-9\">\n                        <input type=\"text\" ng-model=\"machineAddress.moreDetailInfo\" required placeholder=\"设备详细地址\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.name\">\n                    <i class=\"fa fa-warning\"></i>{{invalidMessage.name}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"machineAddressForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.machine-aisle-goods-form.html","<div class=\"machine-aisle-goods-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"aisleGoodsForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">货道编号</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"machineAisleInfo.aisleName\" ng-disabled=\"true\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">商品名称</label>\n                    <div class=\"col-md-10\">\n                    	<span class=\"form-control\">{{machineAisleInfo.goodsSkuInfo.skuPackageType}}{{machineAisleInfo.goodsSkuInfo.skuSubject}}{{machineAisleInfo.goodsSkuInfo.skuSize}}</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">商品选择</label>\n                    <div class=\"col-md-3\">\n                    	<select ng-model=\"goods.skuPackageType\" class=\"form-control\" ng-change=\"getAllFilterSubject(goods.skuPackageType)\">\n                        	<option value=\"{{skuBrand}}\" ng-repeat=\"skuBrand in allFilterBrand\">\n	                    		{{skuBrand}}\n	                    	</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"allFilterSubject\">\n                        <select ng-model=\"goods.skuSubject\" class=\"form-control\" ng-change=\"getAllFilterGoods(goods.skuPackageType, goods.skuSubject)\">\n	                    	<option value=\"{{skuSubject}}\" ng-repeat=\"skuSubject in allFilterSubject\">\n	                    		{{skuSubject}}\n	                    	</option>\n	                    </select>\n                    </div>\n                    <div class=\"col-md-3\" ng-show=\"allFilterGoods\">\n                        <select ng-model=\"machineAisleInfo.goodsSkuInfo.skuId\" class=\"form-control\" ng-change=\"showGoods(machineAisleInfo.goodsSkuInfo.skuId)\">\n	                    	<option value=\"{{goodsItem.skuId}}\" ng-repeat=\"goodsItem in allFilterGoods\">\n	                    		{{goodsItem.skuSize}}\n	                    	</option>\n	                    </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">销售价(元)</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"machineAisleInfo.aisleGoodsPrice\" required placeholder=\"仅为数字和小数\" ng-pattern=\"/^[0-9]+(.[0-9]{1,2})?$/\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">是否销售</label>\n                    <div class=\"col-md-4\">\n                        <select ng-model=\"machineAisleInfo.isSaleEnabled\" class=\"form-control\" required>\n                        	<option value=\"N\">否</option>\n                        	<option value=\"Y\">是</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">成本价(元)</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"machineAisleInfo.aisleOriginalPrice\" required placeholder=\"仅为数字和小数\" ng-pattern=\"/^[0-9]+(.[0-9]{1,2})?$/\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">默认库存</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"machineAisleInfo.defaultGoodsStock\" required class=\"form-control\" ng-disabled=\"true\">\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"aisleGoodsForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.machine-aisle-goods-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>\n                    货道商品<span ng-show=\"machineBaseInfo.machineName\">({{machineBaseInfo.machineName}})</span>\n                    --->缺货率:{{machineAisleStockInfo.sumOutOfStock/machineAisleStockInfo.sumOfDefaultStock*100 |\n                    number:2}}%,\n                    断货率:{{machineAisleStockInfo.runOutOfAisle/machineAisleStockInfo.sumOfAisle*100 | number:2}}%\n                    <button class=\"btn btn-default pull-right\" ng-click=\"cancel()\">返回</button>\n                </h3>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"machine-aisle-goods-list-spinner\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover\">\n                <tr>\n                    <th>序号</th>\n                    <th>货道编号</th>\n                    <th>商品品牌</th>\n                    <th>商品名称</th>\n                    <th>商品规格</th>\n                    <th>成本价格</th>\n                    <th>销售价格</th>\n                    <th>是否销售</th>\n                    <th>库存数量</th>\n                    <th>默认库存</th>\n                    <th ng-if=\"$root.haveAuth(\'010312\', currentUser.rules)\">操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"machineAisleInfo in machineAisleInfos\">\n                    <td>\n                        {{$index+1}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.aisleName}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.goodsSkuInfo.skuPackageType}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.goodsSkuInfo.skuSubject}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.goodsSkuInfo.skuSize}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.aisleOriginalPrice | currency:\"￥\"}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.aisleGoodsPrice | currency:\"￥\"}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.isSaleEnabled == \'Y\' ? \'是\' : \'否\'}}\n                    </td>\n                    <td ng-class=\"{danger:machineAisleInfo.goodsStock<3}\">\n                        {{machineAisleInfo.goodsStock | fullOrEmpty}}\n                    </td>\n                    <td>\n                        {{machineAisleInfo.defaultGoodsStock | fullOrEmpty}}\n                    </td>\n                    <td ng-if=\"$root.haveAuth(\'010312\', currentUser.rules)\">\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"openFormAisle(machineAisleInfo)\">修改\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.machine.machine-apply-template-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" name=\"applyAisleTempalteForm\" ng-submit=\"save()\" novalidate >\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>应用机器模板</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">机器类型</label>\n                    <div class=\"col-md-6\">\n                        <select ng-model=\"machineTypeId\" ng-disabled=\"disabled||selectedMachineTypeId\" class=\"form-control\" required ng-change=\"showTemplateDesc(machineTypeId)\">\n                        	<option value=\"\"></option>\n                        	<option ng-selected=\"selectedMachineTypeId==machineType.machineTypeId\" value=\"{{machineType.machineTypeId}}\" ng-repeat=\"machineType in machineTypeList\">{{machineType.typeName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\" ng-show=\"machineAisleTemplateDescList\">\n                    <label class=\"col-md-2 control-label\">绑定模板</label>\n                    <div class=\"col-md-6\">\n                        <select ng-model=\"bindingTemplateView.goodsAisleTemplateId\" class=\"form-control\" required>\n                        	<option value=\"\"></option>\n                        	<option value=\"{{machineAisleTemplateDesc.goodsAisleTemplateId}}\" ng-repeat=\"machineAisleTemplateDesc in machineAisleTemplateDescList\">\n                                {{machineAisleTemplateDesc.templateName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.errorMsg\">\n                    <i class=\"fa fa-warning\"></i>您选择的机器有{{invalidMessage.errorMsg}}多个机型,无法应用单个模板\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"applyAisleTempalteForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.machine-detail-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" name=\"machineBaseForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>【{{machineInfo.machineCode}}】的详细信息</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">设备名称</label>\n                    <div class=\"col-md-9\">\n                        <input type=\"text\" ng-model=\"machineInfo.machineName\" ng-disabled=\"true\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">机器类型</label>\n                    <div class=\"col-md-9\">\n                        <input type=\"text\" ng-model=\"machineInfo.machineTypeInfo.typeName\" ng-disabled=\"true\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">模板名称</label>\n                    <div class=\"col-md-9\">\n                        <input type=\"text\" ng-model=\"machineInfo.machineAisleTemplateDescription.templateName\" ng-disabled=\"true\" class=\"form-control\">\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.machine-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" name=\"machineBaseForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">设备名称</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"machineInfo.machineName\" required placeholder=\"设备自定义名称\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\" ng-show=\"$root.haveAuth(\'010309\', currentUser.rules)\">\n                    <label class=\"col-md-2 control-label\">支付方式</label>\n                    <div ng-class=\"$index==5||$index==10?\'col-md-offset-2\':\'\'\" class=\"col-md-2\" ng-repeat=\"payType in payTypeList\" required>\n                        <label class=\"control-label\">\n	                         <input type=\"checkbox\" checklist-model=\"machineInfo.providePayType\" checklist-value=\"payType.id\"> {{payType.payName}}\n	                    </label>\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.name\">\n                    <i class=\"fa fa-warning\"></i>{{invalidMessage.name}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"machineBaseForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.machine-list.html","<div class=\"row\">\n    <div class=\"col-md-12\" ng-if=\"$root.haveAuth(\'010301\', currentUser.rules)\">\n        <!-- Control Sidebar -->\n        <aside ng-class=\"{\'control-sidebar-open\': openedOrg}\" class=\"control-sidebar no-padding control-sidebar-light\">\n            <div class=\"box box-widget no-border no-shadow\">\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">组织列表</h3>\n\n                    <div class=\"box-tools pull-right\">\n                        <button type=\"button\" ng-click=\"closeOrg()\" class=\"btn btn-box-tool\"><i class=\"fa fa-times\"></i></button>\n                    </div>\n                    <!-- /.box-tools -->\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                    <treecontrol class=\"tree-classic\" tree-model=\"treeData\"\n                                 on-selection=\"showSelected(node)\" expanded-nodes=\"expandedNodes\"\n                                 options=\"treeOptions\"> {{node.orgName}}\n                    </treecontrol>\n                </div>\n                <!-- /.box-body -->\n            </div>\n\n        </aside>\n        <!-- /.control-sidebar -->\n        <!-- Add the sidebar\'s background. This div must be placed\n             immediately after the control sidebar -->\n        <div class=\"control-sidebar-bg\"></div>\n\n        <div class=\"box box-widget\">\n            <div class=\"box-body table-responsive\">\n                <form class=\"form-inline\" novalidate>\n                    <div class=\"input-group\">\n                        <input type=\"text\" disabled value=\"{{currentOrg}}\" class=\"form-control\" placeholder=\"组织名称\">\n                          <span class=\"input-group-btn\">\n                            <button ng-click=\"openOrg()\" class=\"form-control btn btn-default\" type=\"button\"><i class=\"fa fa-sitemap\"></i>选择组织</button>\n                          </span>\n                    </div>\n                    <!-- /input-group -->\n                    <div class=\"form-group\" style=\"margin: 0 10px;\">\n                        <label style=\"margin-right: 10px\" class=\"control-label\">机器编号:</label>\n                        <input style=\"max-width: 120px;\" type=\"text\" ng-model=\"searchMachine.machineCode\" class=\"form-control\"\n                               placeholder=\"查询机器编号\"/>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 0 10px;\">\n                        <label style=\"margin-right: 10px\" class=\"control-label\">在线状态:</label>\n\n                        <select ng-model=\"searchMachine.online\" style=\"min-width: 80px\" class=\"form-control\">\n                            <option value=\"\">全部</option>\n                            <option value=\"true\">在线</option>\n                            <option value=\"false\">离线</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 10px;\">\n                        <button type=\"button\" ng-click=\"refreshData()\" class=\"form-control btn btn-success\">\n                            <i class=\"fa fa-search\"></i> 查询\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div us-spinner spinner-key=\"machine-list-spinner\" class=\"col-md-12\">\n            <div class=\"box box-widget\">\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">设备列表<span class=\"badge\">{{pageMachine.totalElements}}</span></h3>\n                </div>\n                <div class=\"box-body table-responsive no-padding\" style=\"overflow-x: visible\">\n                    <table class=\"table table-striped table-hover\">\n                        <tr>\n                            <th>机器编号</th>\n                            <th>机器名称</th>\n                            <th>所在组织</th>\n                            <th>支付方式</th>\n                            <th>注册时间</th>\n                            <th style=\"text-align: center\">\n                                <button class=\"btn btn-xs btn-warning text-center\"\n                                        data-ng-click=\"bindingTemplate()\"\n                                        tooltip=\"绑定模板\" tooltip-trigger tooltip-placement=\"top\"\n                                        ng-if=\"$root.haveAuth(\'010305\', currentUser.rules)\">绑定模板\n                                </button>\n                                <button class=\"btn btn-xs btn-success text-center\"\n                                        data-ng-click=\"openPushAdvertise()\"\n                                        tooltip=\"推送广告\" tooltip-trigger tooltip-placement=\"top\"\n                                        ng-if=\"$root.haveAuth(\'010311\', currentUser.rules)\">推送广告\n                                </button>\n                                <button class=\"btn btn-xs btn-success text-center\"\n                                        data-ng-click=\"openPushVersion()\"\n                                        tooltip=\"推送版本\" tooltip-trigger tooltip-placement=\"top\"\n                                        ng-if=\"$root.haveAuth(\'010310\', currentUser.rules)\">推送版本\n                                </button>\n                            </th>\n                        </tr>\n                        <tr ng-repeat=\"machine in machineInfos\">\n                            <td><input type=\"checkbox\" ng-model=\"machine.selected\">&nbsp;&nbsp;{{machine.machineCode}}\n                            </td>\n                            <td>{{machine.machineName}}</td>\n                            <td>{{machine.organizationName}}</td>\n                            <td>{{machine.payNames}}</td>\n                            <td>{{machine.gmtCreated |\n                                date : \'yyyy-MM-dd HH:mm\'}}\n                            </td>\n                            <td style=\"text-align: center\">\n                                <button ng-if=\"machine.machineTypeInfo && $root.haveAuth(\'010306\', currentUser.rules)\"\n                                        data-ng-click=\"gotoMachineAisleGoods(machine.machineId)\"\n                                        class=\"btn btn-xs btn-primary\">查看货道\n                                </button>\n                                <div class=\"btn-group hidden-md hidden-lg\">\n                                    <a class=\"btn\" href=\"\" data-ng-click=\"openForm(machine)\" ng-if=\"$root.haveAuth(\'010302\', currentUser.rules)\">\n                                        <i class=\"fa fa-gear\"></i>\n                                    </a>\n                                    <a class=\"btn\" href=\"\" data-ng-click=\"openOrgForm(machine)\" ng-if=\"$root.haveAuth(\'010308\', currentUser.rules)\">\n                                        <i class=\"fa fa-sitemap\"></i>\n                                    </a>\n                                    <a class=\"btn\" href=\"\" ng-if=\"$root.haveAuth(\'010307\', currentUser.rules)\" data-ng-click=\"reboot(machine.machineId)\"\n                                       confirm=\"确定重启机器：{{machine.machineCode}}?\"\n                                       confirm-settings=\"{size: \'sm\'}\"\n                                       confirm-title=\"确认\">\n                                        <i class=\"fa fa-refresh\"></i>\n                                    </a>\n                                    <a class=\"btn\" href=\"\" ng-if=\"$root.haveAuth(\'010304\', currentUser.rules)\" data-ng-click=\"delete(machine)\"\n                                       confirm=\"确定删除设备：{{machine.machineCode}}?删除后不能恢复。\"\n                                       confirm-settings=\"{size: \'sm\'}\"\n                                       confirm-title=\"确认\">\n                                        <i class=\"fa fa-trash-o\"></i>\n                                    </a>\n                                </div>\n                                <div ng-if=\"$root.haveAuth(\'010303\', currentUser.rules)||$root.haveAuth(\'010302\', currentUser.rules)||$root.haveAuth(\'010308\', currentUser.rules)||$root.haveAuth(\'010307\', currentUser.rules)||$root.haveAuth(\'010304\', currentUser.rules)\"\n                                     class=\"btn-group hidden-sm hidden-xs\" dropdown is-open=\"status.isopen\">\n                                    <button type=\"button\" class=\"btn btn-xs btn-primary dropdown-toggle\"\n                                            dropdown-toggle>&nbsp;&nbsp;操&nbsp;&nbsp;作&nbsp;&nbsp;<span\n                                            class=\"caret\"></span>\n                                    </button>\n                                    <ul class=\"dropdown-menu\">\n                                        <li ng-if=\"$root.haveAuth(\'010303\', currentUser.rules)\">\n                                            <a href=\"\" ng-click=\"openAddressForm(machine.machineId)\">\n                                                机器地址\n                                            </a>\n                                        </li>\n                                        <li ng-if=\"$root.haveAuth(\'010302\', currentUser.rules)\">\n                                            <a href=\"\" data-ng-click=\"openForm(machine)\">修改机器</a>\n                                        </li>\n                                        <li ng-if=\"$root.haveAuth(\'010308\', currentUser.rules)\">\n                                            <a href=\"\" data-ng-click=\"openOrgForm(machine)\">授权组织</a>\n                                        </li>\n                                        <li role=\"separator\" class=\"divider\"></li>\n                                        <li ng-if=\"$root.haveAuth(\'010307\', currentUser.rules)\">\n                                            <a href=\"\" data-ng-click=\"reboot(machine.machineId)\"\n                                               confirm=\"确定重启机器：{{machine.machineCode}}?\"\n                                               confirm-settings=\"{size: \'md\'}\">\n                                                重启机器\n                                            </a>\n                                        </li>\n                                        <li ng-if=\"$root.haveAuth(\'010304\', currentUser.rules)\">\n                                            <a href=\"\" data-ng-click=\"delete(machine)\"\n                                               confirm=\"确定删除设备：{{machine.machineCode}}?删除后不能恢复。\"\n                                               confirm-settings=\"{size: \'md\'}\"\n                                               confirm-title=\"确认\">\n                                                删除机器\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            <span tooltip=\"{{machine.offlineOrOnlineTime | date : \'yyyy-MM-dd HH:mm\'}}\" tooltip-trigger\n                                  tooltip-placement=\"top\" ng-hide=\"machine.online\" class=\"label label-default\">离线</span>\n                            <span tooltip=\"{{machine.offlineOrOnlineTime | date : \'yyyy-MM-dd HH:mm\'}}\" tooltip-trigger\n                                  tooltip-placement=\"top\" ng-show=\"machine.online\" class=\"label label-success\">在线</span>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"row text-center\">\n                    <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                                max-size=\"6\"\n                                items-per-page=\"searchMachine.pageSize\"\n                                total-items=\"pageMachine.totalElements\"\n                                ng-model=\"searchMachine.pageNumber\"\n                                ng-change=\"pageChanged(searchMachine.pageNumber)\"\n                                previous-text=\"&lt;\" next-text=\"&gt;\"\n                                first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.machine.machine-org-form.html","<div class=\"machine-org-form-bc\">\n    <form class=\"form-horizontal\" name=\"machineBaseForm\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>To【{{machineInfo.machineCode}}】授权组织</legend>\n                <div class=\"panel panel-primary\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">组织</h6>\n				    </div>\n				    <div class=\"panel-body\">\n						<fieldset>\n							<input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\" ng-model=\"predicate\">\n							<treecontrol class=\"tree-classic\" tree-model=\"treeData\" on-selection=\"showSelected(node)\" \n								filter-expression=\"predicate\" filter-comparator=\"comparator\" \n						    	expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n							     {{node.orgName}}\n							 </treecontrol>\n						</fieldset>\n				    </div>\n				</div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.push-advertise-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" ng-disabled=\"pushForm.$invalid\" >\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>推送广告</legend>\n                <div class=\"panel panel-primary\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">设置广告播放时间</h6>\n				    </div>\n				    <div class=\"panel-body\">\n							<fieldset>\n								<div class=\"form-group\">\n									<label for=\"inputName\" class=\"col-md-3 control-label\">开始播放日期</label>\n									<div class=\"col-md-3\">\n										<p class=\"input-group\">\n							                <input ng-readonly=\"true\" class=\"form-control\" show-weeks=\"false\" is-open=\"status.startOpen\" datepicker-popup=\"yyyy-MM-dd\"\n							                ng-model=\"advertiseSend.advertisementStartDay\" required=\"true\"/>\n										    <span class=\"input-group-btn\">\n										        <button type=\"button\" class=\"btn btn-default\" ng-click=\"startOpen()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n										    </span>\n							            </p>\n				                    </div>\n				                    <label for=\"inputName\" class=\"col-md-3 control-label\">结束播放日期</label>\n									<div class=\"col-md-3\">\n										<p class=\"input-group\">\n							                <input ng-readonly=\"true\" class=\"form-control\" show-weeks=\"false\" is-open=\"status.endOpen\" datepicker-popup=\"yyyy-MM-dd\"\n							                ng-model=\"advertiseSend.advertisementEndDay\" required=\"true\"/>\n										    <span class=\"input-group-btn\">\n										        <button type=\"button\" class=\"btn btn-default\" ng-click=\"endOpen()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n										    </span>\n							            </p>\n				                    </div>\n								</div>\n								<div class=\"form-group \">\n									<label for=\"inputName\" style=\"margin-top: 33px\" class=\"col-md-3 control-label center-block\">开始播放时间</label>\n									<div class=\"col-md-3\">\n										<timepicker ng-model=\"advertiseSend.advertisementStartTime\" required show-spinners=\"true\" readonly-input=\"true\" show-meridian=\"false\"></timepicker>\n									</div>\n									<label for=\"inputName\" style=\"margin-top: 33px\" class=\"col-md-3  control-label center-block\">结束播放时间</label>\n									<div class=\"col-md-3\">\n										<timepicker ng-model=\"advertiseSend.advertisementEndTime\" required show-spinners=\"true\" readonly-input=\"true\" show-meridian=\"false\"></timepicker>\n				                    </div>\n								</div>\n							</fieldset>\n				    </div>\n				</div>\n                <div us-spinner spinner-key=\"advertiseTable\" class=\"table-responsive\">\n					<table class=\"table table-striped table-hover\">\n							<tr>\n								<th>ID</th>\n								<th>广告名称</th>\n								<th>广告类型</th>\n								<th>优先级</th>\n								<th>下载链接</th>\n							</tr>\n							<tr ng-repeat=\"advertiseInfo in advertiseInfos\">\n					    		<td>\n					    			<input type=\"checkbox\" ng-model=\"advertiseInfo.selected\">&nbsp;&nbsp;{{advertiseInfo.advertisementId}}\n					    		</td>\n		                        <td>\n		                            {{advertiseInfo.advertisementName}}\n		                        </td>\n		                        <td>\n		                            {{advertiseInfo.advertisementType == \'1\' ? \'视频\' : \'图片\'}}\n		                        </td>\n		                        <td>\n		                            {{advertiseInfo.advertisementLevel | advertiseLevel}}\n		                        </td>\n		                        <td>\n		                        	<abbr title=\"{{advertiseInfo.advertisementDownloadUrl}}\">{{advertiseInfo.advertisementDownloadUrl | characters:20 :true}}</abbr>\n		                        </td>\n					    	</tr>\n						</tbody>\n					</table>\n					<div class=\"row text-center\">\n						<pagination class=\"pagination-sm\" boundary-links=\"true\"\n									max-size=\"6\"\n									items-per-page=\"itemsPerPage\"\n									total-items=\"totalSize\"\n									ng-model=\"currentPage\"\n									ng-change=\"pageChanged(currentPage)\"\n									previous-text=\"&lt;\" next-text=\"&gt;\"\n									first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n					</div>\n				</div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"pushForm.$invalid\" value=\"推送\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.push-version-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\">\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>推送安卓程序版本</legend>\n                <div us-spinner spinner-key=\"versionTable\" class=\"table-responsive\">\n                    <table class=\"table table-striped table-hover\">\n\n                        <tr>\n                            <th>ID</th>\n                            <th>程序版本</th>\n                            <th>安卓版本</th>\n                            <th>控制板类型</th>\n                            <th>版本描述</th>\n                            <th>下载链接</th>\n                            <th>状态</th>\n                        </tr>\n                        <tr ng-repeat=\"versionInfo in versionInfos\">\n                            <td>\n                                <input type=\"checkbox\" ng-model=\"versionInfo.selected\">&nbsp;&nbsp;{{versionInfo.versionId}}\n                            </td>\n                            <td>\n                                {{versionInfo.versionNumber}}\n                            </td>\n                            <td>\n                                {{versionInfo.versionCode}}\n                            </td>\n                            <td>\n                                {{versionInfo.controlBoardType | controlBoardType }}\n                            </td>\n                            <td>\n                                <abbr title=\"{{versionInfo.versionDesc}}\">{{versionInfo.versionDesc | characters:12\n                                    :true}}</abbr>\n                            </td>\n                            <td>\n                                <abbr title=\"{{versionInfo.versionDownloadUrl}}\">{{versionInfo.versionDownloadUrl |\n                                    characters:20 :true}}</abbr>\n                            </td>\n                            <td>\n                                {{versionInfo.versionStatus?\'启用\':\'禁用\'}}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"推送\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.type-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"machineTypeForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">类型名称</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"machineType.typeName\" required placeholder=\"输入唯一的类型名称\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">屏幕尺寸</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"machineType.screenSize\" required placeholder=\"例如32、7等\" ng-pattern=\"/^[1-9]d*/\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">货道行数</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"machineType.aisleRowNumber\" required placeholder=\"例如6行等\" ng-pattern=\"/^[1-9]d*/\" class=\"form-control\">\n                    </div>\n                    <label class=\"col-md-2 control-label\">货道列数</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"number\" ng-model=\"machineType.aisleColumnNumber\" required placeholder=\"例如6列等\" ng-pattern=\"/^[1-9]d*/\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">触屏</label>\n                    <div class=\"col-md-4\">\n                        <select ng-model=\"machineType.enableTouch\" required class=\"form-control\">\n                        	<option value=\"0\">否</option>\n                        	<option value=\"1\">是</option>\n                        </select>\n                    </div>\n                    <label class=\"col-md-2 control-label\">选货按键</label>\n                    <div class=\"col-md-4\">\n                        <select ng-model=\"machineType.haveSelectGoodsButton\" required class=\"form-control\">\n                        	<option value=\"0\">没有</option>\n                        	<option value=\"1\">有</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">数字键盘</label>\n                    <div class=\"col-md-4\">\n                        <select ng-model=\"machineType.haveNumberKeyboard\" required class=\"form-control\">\n                        	<option value=\"0\">没有</option>\n                        	<option value=\"1\">有</option>\n                        </select>\n                    </div>\n                    <label class=\"col-md-2 control-label\">控制板</label>\n                    <div class=\"col-md-4\">\n                        <select ng-model=\"machineType.controlBoardType\" required class=\"form-control\">\n                        	<option value=\"EG\">易购</option>\n                        	<option value=\"ZJ\">中吉</option>\n                            <option value=\"NEG\">新易购</option>\n                            <option value=\"YC\">易触</option>\n                            <option value=\"JY\">金雨</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.name\">\n                    <i class=\"fa fa-warning\"></i>{{invalidMessage.name}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"machineTypeForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.machine.type-list.html","<div class=\"col-md-12\">\n    <h3>\n        设备类型&nbsp;&nbsp;&nbsp;&nbsp;\n        <button class=\"btn btn-primary\" ng-click=\"openForm()\" ng-if=\"$root.haveAuth(\'010102\', currentUser.rules)\">\n            <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建类型\n        </button>\n    </h3>\n    <div us-spinner spinner-key=\"machine-type-list-spinner\" class=\"box-body table-responsive\">\n        <table class=\"table table-striped table-hover \">\n            <tr>\n                <th>ID</th>\n                <th>类型名称</th>\n                <th>货道行数</th>\n                <th>货道列数</th>\n                <th>屏幕尺寸</th>\n                <th>触屏</th>\n                <th>选货按键</th>\n                <th>数字键盘</th>\n                <th>控制板类型</th>\n                <th>操作\n                    <button class=\"btn btn-xs btn-default pull-right\"\n                            ng-click=\"refreshData(true)\">刷新\n                    </button>\n                </th>\n            </tr>\n\n            <tr ng-repeat=\"machineType in machineTypes\">\n                <td>\n                    <input type=\"checkbox\">\n                </td>\n                <td>\n                    {{machineType.typeName}}\n                </td>\n                <td>\n                    {{machineType.aisleRowNumber}}\n                </td>\n                <td>\n                    {{machineType.aisleColumnNumber}}\n                </td>\n                <td>\n                    {{machineType.screenSize}}\n                </td>\n                <td>\n                    {{machineType.enableTouch==\'1\' ? \'是\':\'否\'}}\n                </td>\n                <td>\n                    {{machineType.haveSelectGoodsButton==\'1\' ? \'有\':\'没有\'}}\n                </td>\n                <td>\n                    {{machineType.haveNumberKeyboard==\'1\' ? \'有\':\'没有\'}}\n                </td>\n                <td ng-switch=\"machineType.controlBoardType\">\n                    <span ng-switch-when=\"ZJ\">中吉</span>\n                    <span ng-switch-when=\"NEG\">新易购</span>\n                    <span ng-switch-when=\"JY\">金雨</span>\n                    <span ng-switch-when=\"YC\">易触</span>\n                    <span ng-switch-default>易购</span>\n                </td>\n                <td>\n                    <button class=\"btn btn-sm btn-primary\"\n                            data-ng-click=\"openForm(machineType)\"\n                            ng-if=\"$root.haveAuth(\'010103\', currentUser.rules)\">修改\n                    </button>\n                    <button class=\"btn btn-sm btn-danger\"\n                            data-ng-click=\"delete(machineType)\"\n                            confirm=\"确定删除机器类型：{{machineType.typeName}}?\" confirm-settings=\"{size: \'sm\'}\"\n                            ng-if=\"$root.haveAuth(\'010104\', currentUser.rules)\"><i class=\"fa fa-trash-o\"></i>&nbsp;删除\n                    </button>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>");
$templateCache.put("widgets.org.org-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"orgForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">组织名称</label>\n                    <div class=\"col-md-8\">\n                        <input type=\"text\" ng-model=\"orgInfo.orgFormName\" required placeholder=\"输入组织名称\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.$infoForm\">\n                    <i class=\"fa fa-warning\"></i>{{$scope.invalidMessage.$infoForm}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"orgForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.org.org-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <h3>组织架构&nbsp;&nbsp;&nbsp;&nbsp;</h3>\n            </div>\n        </div>\n    </div>\n    <script type=\"text/ng-template\" id=\"nodes_renderer.html\">\n        <div ui-tree-handle class=\"tree-node tree-node-content\">\n            <a class=\"btn btn-success btn-xs\" ng-if=\"node.childrens && node.childrens.length > 0\" data-nodrag\n               ng-click=\"toggle(this)\"><span\n                    class=\"glyphicon\"\n                    ng-class=\"{\n          \'glyphicon-chevron-right\': collapsed,\n          \'glyphicon-chevron-down\': !collapsed\n        }\"></span></a>\n            {{node.orgName}}\n            <button class=\"pull-right btn btn-danger btn-xs\" data-nodrag ng-click=\"delete(node)\"\n                    tooltip=\"删除组织\" tooltip-trigger tooltip-placement=\"top\" confirm=\"删除后将不能恢复，确定删除该组织吗?\"\n                    ng-if=\"$root.haveAuth(\'090104\', currentUser.rules)\">\n                <i class=\"fa fa-trash-o\"></i>&nbsp;删除\n            </button>\n            <button class=\"pull-right btn btn-primary btn-xs\" type=\"submit\" data-nodrag\n                    ng-click=\"openForm(node, \'edit\')\"\n                    tooltip=\"编辑组织\" tooltip-trigger tooltip-placement=\"top\"\n                    ng-if=\"$root.haveAuth(\'090103\', currentUser.rules)\">\n                <i class=\"fa fa-pencil-square-o\"></i>&nbsp;编辑\n            </button>\n            <button class=\"pull-right btn btn-primary btn-xs\" type=\"submit\" data-nodrag ng-click=\"openForm(node, \'add\')\"\n                    tooltip=\"新增组织\" tooltip-trigger tooltip-placement=\"top\"\n                    ng-if=\"$root.haveAuth(\'090102\', currentUser.rules)\">\n                <i class=\"fa fa-plus\"></i>&nbsp;新增\n            </button>\n        </div>\n        <ol ui-tree-nodes=\"\" ng-model=\"node.childrens\" ng-class=\"{hidden: collapsed}\">\n            <li ng-repeat=\"node in node.childrens\" ui-tree-node ng-include=\"\'nodes_renderer.html\'\">\n            </li>\n        </ol>\n    </script>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div ui-tree id=\"tree-root\" ng-if=\"$root.haveAuth(\'090101\', currentUser.rules)\">\n                <ol ui-tree-nodes ng-model=\"data\">\n                    <li ng-repeat=\"node in data\" ui-tree-node\n                        ng-include=\"\'nodes_renderer.html\'\"></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.org.org-tree.html","<treecontrol class=\"tree-classic\" tree-model=\"treeData\" \n	on-selection=\"showSelected(node)\" options=\"treeOptions\">\n    {{node.orgName}}\n</treecontrol>");
$templateCache.put("widgets.report.fill-goods-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>\n                    补货查询&nbsp;&nbsp;&nbsp;&nbsp;\n                    <button class=\"btn btn-default pull-right\" ng-click=\"export()\"\n                            ng-if=\"$root.haveAuth(\'040202\', currentUser.rules)\">导出Excel\n                    </button>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">组织</h6>\n                </div>\n                <div class=\"panel-body ego-tree-height\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\"\n                                   ng-model=\"predicate\">\n                            <treecontrol class=\"tree-classic\" tree-model=\"treeData\"\n                                         on-selection=\"showSelected(node)\" filter-expression=\"predicate\"\n                                         filter-comparator=\"comparator\" expanded-nodes=\"expandedNodes\"\n                                         options=\"treeOptions\"> {{node.orgName}}\n                            </treecontrol>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">设备</h6>\n                </div>\n                <div class=\"panel-body ego-tree-height\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\" ng-model=\"myQuery\">\n\n                            <div ivh-treeview=\"tree\"\n                                 ivh-treeview-expand-to-depth=\"1\"\n                                 ivh-treeview-filter=\"myQuery\">\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">补货列表</h6>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\">\n                            <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-11\">\n                                    </div>\n                                    <div class=\"col-md-1 text-right\">\n                                        <button type=\"button\" ng-click=\"search()\" class=\"btn btn-success\"><i\n                                                class=\"fa fa-search\"></i> 查询\n                                        </button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"bs-component\">\n                        <div us-spinner spinner-key=\"agentTable\" class=\"table-responsive\">\n                            <table class=\"table table-striped table-hover\">\n                                <thead>\n                                <tr>\n                                    <th>商品名称</th>\n                                    <th>待补货数量</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr ng-repeat=\"goods in fillGoodsList\">\n                                    <td>\n                                        {{goods.goodsSubject}}\n                                    </td>\n                                    <td>\n                                        {{goods.needFillStock}}\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.report.order-list.html","<div class=\"row\">\n    <div class=\"col-md-12\" ng-if=\"$root.haveAuth(\'040101\', currentUser.rules)\">\n\n        <!-- Control Sidebar -->\n        <aside ng-class=\"{\'control-sidebar-open\': openedOrg}\" class=\"control-sidebar no-padding control-sidebar-light\">\n            <div class=\"box box-widget no-border no-shadow\">\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">组织列表</h3>\n\n                    <div class=\"box-tools pull-right\">\n                        <button type=\"button\" ng-click=\"closeOrg()\" class=\"btn btn-box-tool\"><i\n                                class=\"fa fa-times\"></i></button>\n                    </div>\n                    <!-- /.box-tools -->\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                    <treecontrol class=\"tree-classic\" tree-model=\"treeData\" selected-node=\"selectedNode\"\n                                 on-selection=\"selectOrg(node)\" expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n                        {{node.orgName}}\n                    </treecontrol>\n                </div>\n                <!-- /.box-body -->\n            </div>\n        </aside>\n        <!-- /.control-sidebar -->\n        <!-- Add the sidebar\'s background. This div must be placed\n             immediately after the control sidebar -->\n        <div class=\"control-sidebar-bg\"></div>\n\n        <div class=\"box box-widget\">\n            <div class=\"box-body\">\n                <form class=\"form-inline\" novalidate>\n                    <div class=\"input-group\">\n                        <input type=\"text\" disabled value=\"{{selectedNode.orgName}}\" class=\"form-control\" placeholder=\"组织名称\">\n                          <span class=\"input-group-btn\">\n                            <button ng-click=\"openOrg()\" class=\"form-control btn btn-default\" type=\"button\"><i\n                                    class=\"fa fa-sitemap\"></i>选择组织\n                            </button>\n                          </span>\n                    </div>\n                    <!-- /input-group -->\n                    <div class=\"form-group\" style=\"margin: 0 10px;\">\n                        <label class=\"control-label\">订单时间:</label>\n\n                        <input type=\"text\" ng-model=\"orderSearch.startEndDate\" class=\"form-control\" id=\"dateRangePicker\" date-range-picker>\n\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 0 10px;\">\n                        <label class=\"control-label\">机器编号:</label>\n\n                        <input style=\"max-width: 120px;\" type=\"text\" ng-model=\"orderSearchPlus.machineCode\" class=\"form-control\"\n                               placeholder=\"模糊查询编号\"/>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 0 10px;\">\n                        <label class=\"control-label\">支付类型:</label>\n\n                        <select ng-model=\"orderSearchPlus.payType\" style=\"min-width: 88px\" class=\"form-control\">\n                            <option value=\"\">--</option>\n                            <option value=\"{{payType.payName}}\" ng-repeat=\"payType in payTypeList\">\n                                {{payType.payName}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 10px;\">\n                        <button type=\"button\" ng-click=\"search()\" ng-disabled=\"orderForm.$invalid\"\n                                class=\"btn btn-success\"><i class=\"fa fa-search\"></i> 查询\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div us-spinner spinner-key=\"order-list-spinner\" class=\"col-md-12\">\n            <div class=\"box box-widget\">\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">订单查询</h3>\n                    <div class=\"box-tools\">\n                        <div class=\"input-group\">\n                            <button class=\"btn btn-default pull-right\" ng-click=\"export()\"\n                                    ng-disabled=\"exportDisabled\"\n                                    ng-if=\"$root.haveAuth(\'040102\', currentUser.rules)\">导出Excel\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"box-body table-responsive no-padding\">\n                    <table class=\"table table-striped table-hover\">\n                        <tr>\n                            <th>机器编号</th>\n                            <th>支付类型</th>\n                            <th>订单金额</th>\n                            <th>订单状态</th>\n                            <th>出货状态</th>\n                            <th>所在货道</th>\n                            <th>商品名称</th>\n                            <th>售出价格</th>\n                            <th>售出数量</th>\n                            <th>订单时间</th>\n                        </tr>\n                        <tr ng-repeat=\"orderDetail in orderDetails\">\n                            <td>\n                                {{orderDetail.machineName}}\n                            </td>\n                            <td>\n                                {{orderDetail.payType}}\n                            </td>\n                            <td>\n                                {{orderDetail.orderTotalAmount/100 | currency:\"￥\"}}\n                            </td>\n                            <td>\n                                <a ng-if=\"$root.haveAuth(\'040103\', currentUser.rules)\"\n                                   ng-click=\"showPayLine(orderDetail.payType,orderDetail.payLineNumber,orderDetail.machineName)\"\n                                   role=\"button\" class=\"btn-link\">{{orderDetail.orderStatus | payStatus}}</a>\n                                <span ng-if=\"!$root.haveAuth(\'040103\', currentUser.rules)\">{{orderDetail.orderStatus | payStatus}}</span>\n                            </td>\n                            <td>\n                                {{orderDetail.shipmentStatus | deliveryStatus}}\n                            </td>\n                            <td>\n                                {{orderDetail.aisleName}}\n                            </td>\n                            <td>\n                                {{orderDetail.goodsSkuSubject}}\n                            </td>\n                            <td>\n                                {{orderDetail.goodsSoldPrice/100 | currency:\"￥\"}}\n                            </td>\n                            <td>\n                                {{orderDetail.goodsSoldQuantity}}\n                            </td>\n                            <td>\n                                {{orderDetail.gmtCreated | date : \'yyyy-MM-dd HH:mm:ss\' }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"row text-center\">\n                    <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                                max-size=\"6\"\n                                items-per-page=\"itemsPerPage\"\n                                total-items=\"pageOrder.totalElements\"\n                                ng-model=\"currentPage\"\n                                ng-change=\"pageChanged(currentPage)\"\n                                previous-text=\"&lt;\" next-text=\"&gt;\"\n                                first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.report.org-form.html","<div class=\"machine-org-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>选择组织</legend>\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <h6 class=\"panel-title\">组织</h6>\n                    </div>\n                    <div class=\"panel-body\">\n                        <fieldset>\n                            <treecontrol class=\"tree-classic\" tree-model=\"treeData\" selected-node=\"selectedNode\"\n                                         expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n                                {{node.orgName}}\n                            </treecontrol>\n                        </fieldset>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>");
$templateCache.put("widgets.report.payline-form.html","<div class=\"machine-form-bc\">\n    <form class=\"form-horizontal\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>支付流水信息---{{payLineInfo.payType}}</legend>\n                <div ng-if=\"payLineInfo.hasPay===true\">\n                    <div ng-switch on=\"payLineInfo.payType\">\n                        <div ng-switch-when=\"微信\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">微信交易编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.transactionId}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.totalFee/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n\n                        </div>\n                        <div ng-switch-when=\"支付宝\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付宝交易编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.tradeNo}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.buyerPayAmount/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付宝账号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.buyerLogonId}}</label>\n                            </div>\n\n                        </div>\n                        <div ng-switch-when=\"羊城通\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.logicalCardNo}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.amount/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡内余额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.balance/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                        </div>\n                        <div ng-switch-when=\"深圳通\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.logicalCardNo}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.amount/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡内余额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.balance/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                        </div>\n                        <div ng-switch-when=\"光明卡\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.egocardPayCardNumber}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.egocardPayAmount/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                        </div>\n                        <div ng-switch-when=\"易购卡\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">机器编号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.machineCode}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">卡号:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.egocardPayCardNumber}}</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-offset-2 col-md-3 text-right\">支付金额:</label>\n                                <label class=\"col-md-5 text-left\">{{payLineInfo.record.egocardPayAmount/100 |\n                                    currency:\"￥\"}}</label>\n                            </div>\n                        </div>\n                        <div ng-switch-default>\n                            暂时不支持查询支付明细\n                        </div>\n                    </div>\n                </div>\n                <h3 ng-if=\"payLineInfo.hasPay===false\">未找到支付流水,有可能用户未支付成功!</h3>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.report.profit-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <h3>\n                    利润统计&nbsp;&nbsp;&nbsp;&nbsp;\n                </h3>\n            </div>\n            <div class=\"col-md-2\" ng-show=\"false\">\n                <button class=\"btn btn-default\" ng-click=\"export()\" ng-if=\"$root.haveAuth(\'040302\', currentUser.rules)\">\n                    导出Excel\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">组织</h6>\n                </div>\n                <div class=\"panel-body ego-tree-height\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\"\n                                   ng-model=\"predicate\">\n                            <treecontrol class=\"tree-classic\" tree-model=\"treeData\"\n                                         on-selection=\"showSelected(node)\" filter-expression=\"predicate\"\n                                         filter-comparator=\"comparator\" expanded-nodes=\"expandedNodes\"\n                                         options=\"treeOptions\"> {{node.orgName}}\n                            </treecontrol>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">设备</h6>\n                </div>\n                <div class=\"panel-body ego-tree-height\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"过滤关键字\" ng-model=\"myQuery\">\n\n                            <div ivh-treeview=\"tree\"\n                                 ivh-treeview-expand-to-depth=\"2\"\n                                 ivh-treeview-use-checkboxes=\"true\"\n                                 ivh-treeview-on-cb-change=\"changeCallback(ivhNode)\"\n                                 ivh-treeview-filter=\"myQuery\">\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">利润统计列表</h6>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <form class=\"form-horizontal\" name=\"orderForm\" novalidate>\n                                <div class=\"form-group\">\n                                    <label class=\"col-md-2 control-label\">订单时间</label>\n\n                                    <div class=\"col-md-4\">\n                                        <p class=\"input-group\">\n                                            <input class=\"form-control\" ng-readonly=\"true\" show-weeks=\"false\"\n                                                   is-open=\"status.startOpen\" datepicker-popup=\"yyyy-MM-dd\"\n                                                   ng-model=\"profitSearch.startDate\" datepicker-options=\"dateOptions\"\n                                                   required=\"true\"/>\n										    <span class=\"input-group-btn\">\n										        <button type=\"button\" class=\"btn btn-default\" ng-click=\"startOpen()\"><i\n                                                        class=\"glyphicon glyphicon-calendar\"></i></button>\n										    </span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <p class=\"input-group\">\n                                            <input class=\"form-control\" ng-readonly=\"true\" show-weeks=\"false\"\n                                                   is-open=\"status.endOpen\" datepicker-popup=\"yyyy-MM-dd\"\n                                                   ng-model=\"profitSearch.endDate\" required=\"true\"/>\n										    <span class=\"input-group-btn\">\n										        <button type=\"button\" class=\"btn btn-default\" ng-click=\"endOpen()\"><i\n                                                        class=\"glyphicon glyphicon-calendar\"></i></button>\n										    </span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <button type=\"button\" ng-click=\"search()\" ng-disabled=\"orderForm.$invalid\"\n                                                class=\"btn btn-success\"><i class=\"fa fa-search\"></i> 查询\n                                        </button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"bs-component\">\n                        <div us-spinner spinner-key=\"agentTable\" class=\"table-responsive\">\n                            <table class=\"table table-striped table-hover\">\n                                <tr>\n                                    <th>商品名称</th>\n                                    <th>销售数量</th>\n                                    <th>进货总金额</th>\n                                    <th>销售总金额</th>\n                                    <th>销售利润</th>\n                                    <th>利润率</th>\n                                </tr>\n                                <tr ng-repeat=\"profit in profitList | orderBy:\'-soldTotalAmount\'\">\n                                    <td>\n                                        {{profit.goodsSkuSubject}}\n                                    </td>\n                                    <td>\n                                        {{profit.goodsSoldTotalQuantity}}\n                                    </td>\n                                    <td>\n                                        {{profit.purchaseTotalAmount/100 | currency:\"￥\"}}\n                                    </td>\n                                    <td>\n                                        {{profit.soldTotalAmount/100 | currency:\"￥\"}}\n                                    </td>\n                                    <td>\n                                        {{profit.profitTotalAmount/100 | currency:\"￥\"}}\n                                    </td>\n                                    <td>\n                                        {{profit.profitTotalAmount/profit.soldTotalAmount*100 | number:2}}%\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <th>\n                                        合计\n                                    </th>\n                                    <th>\n                                        {{profitTotal.goodsSoldTotalQuantity}}\n                                    </th>\n                                    <th>\n                                        {{profitTotal.purchaseTotalAmount/100 | currency:\"￥\"}}\n                                    </th>\n                                    <th>\n                                        {{profitTotal.soldTotalAmount/100 | currency:\"￥\"}}\n                                    </th>\n                                    <th>\n                                        {{profitTotal.profitTotalAmount/100 | currency:\"￥\"}}\n                                    </th>\n                                    <th>\n\n                                    </th>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.role.role-form.html","<div class=\"user-role-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"roleForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">角色名</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" ng-model=\"roleInfo.roleName\" required placeholder=\"如：管理员，财务\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">角色级别</label>\n                    <div class=\"col-md-4\">\n                    	<select ng-model=\"roleInfo.level\" required class=\"form-control\">\n                        	<option value=\"1\">系统管理</option>\n                        	<option value=\"2\">运营管理</option>\n                        	<option value=\"3\">基础运营</option>\n                        </select>\n                    </div>\n                    <label class=\"col-md-2 control-label\">状态</label>\n                    <div class=\"col-md-4\">\n                    	<select ng-model=\"roleInfo.status\" required class=\"form-control\">\n                        	<option value=\"1\">启用</option>\n                        	<option value=\"0\">禁用</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">角色描述</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" ng-model=\"roleInfo.description\" required placeholder=\"角色具体职责详细描述\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.$infoForm\">\n                    <i class=\"fa fa-warning\"></i>{{$scope.invalidMessage.$infoForm}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"roleForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.role.role-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <h3>\n                    角色管理&nbsp;&nbsp;&nbsp;&nbsp;\n                    <button class=\"btn btn-primary\" ng-click=\"openForm()\"\n                            ng-if=\"$root.haveAuth(\'090302\', currentUser.rules)\">\n                        <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建角色\n                    </button>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" ng-if=\"$root.haveAuth(\'090301\', currentUser.rules)\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">角色列表</h6>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"bs-component\">\n                        <div us-spinner spinner-key=\"agentTable\" class=\"table-responsive\">\n                            <table class=\"table table-striped table-hover \">\n                                <tr>\n                                    <th>序号</th>\n                                    <th>角色名</th>\n                                    <th>角色级别</th>\n                                    <th>状态</th>\n                                    <th>描述</th>\n                                    <th>创建时间</th>\n                                    <th>操作</th>\n                                </tr>\n                                <tr ng-repeat=\"roleInfo in roleInfos\">\n                                    <td>\n                                        {{$index + 1}}\n                                    </td>\n                                    <td>\n                                        {{roleInfo.roleName}}\n                                    </td>\n                                    <td>\n                                        {{roleInfo.level | roleLevel}}\n                                    </td>\n                                    <td>\n                                        {{roleInfo.status==\'1\' ? \'启用\':\'禁用\'}}\n                                    </td>\n                                    <td>\n                                        <abbr title=\"{{roleInfo.description}}\">{{roleInfo.description}}</abbr>\n                                    </td>\n                                    <td>\n                                        {{roleInfo.gmtCreated | date : \'yyyy-MM-dd HH:mm\'}}\n                                    </td>\n                                    <td>\n                                        <button class=\"btn btn-sm btn-primary\"\n                                                data-ng-click=\"openForm(roleInfo)\"\n                                                ng-if=\"$root.haveAuth(\'090303\', currentUser.rules)\">修改\n                                        </button>\n                                        <button class=\"btn btn-sm btn-primary\"\n                                                data-ng-click=\"openRuleForm(roleInfo)\"\n                                                ng-if=\"$root.haveAuth(\'090305\', currentUser.rules)\">设置权限\n                                        </button>\n                                        <button class=\"btn btn-sm btn-danger\"\n                                                data-ng-click=\"delete(roleInfo)\"\n                                                confirm=\"确定删除角色：{{roleInfo.roleName}}?\" confirm-settings=\"{size: \'sm\'}\"\n                                                ng-if=\"$root.haveAuth(\'090304\', currentUser.rules)\"><i\n                                                class=\"fa fa-trash-o\"></i>&nbsp;删除\n                                        </button>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.role.role-rule-form.html","<div class=\"user-role-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"roleForm\" novalidate>\n        <div class=\"modal-body\">\n        	<legend>角色授权</legend>\n            <fieldset>\n            	<div class=\"panel panel-primary\" ng-repeat=\"firstRule in ruleList | filter : {\'level\':\'1\'} : true | orderBy:\'ruleCode\'\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">\n							<label for=\"input-params\" ng-click=\"showLabel = !showLabel;\" ng-init=\"showLabel = false;\">\n				                <i class=\"fa fa-chevron-circle-right\" ng-if=\"!showLabel\"></i>\n				                <i class=\"fa fa-chevron-circle-down\" ng-if=\"showLabel\"></i>\n				                <span >&nbsp;&nbsp;{{firstRule.name}}</span>\n				            </label>\n				            <button type=\"button\" class=\"btn btn-xs btn-success\" style=\"float:right\" ng-click=\"cancelAll(firstRule.ruleCode)\"><i class=\"fa fa-square-o\"></i>&nbsp;全不选</button>\n				            <button type=\"button\" class=\"btn btn-xs btn-success\" style=\"float:right\" ng-click=\"selectAll(firstRule.ruleCode)\"><i class=\"fa fa-check-square-o\"></i>&nbsp;全选</button>\n						</h6>\n				    </div>\n				    <div class=\"panel-body\" ng-if=\"showLabel\">\n				    	<div class=\"row\" ng-repeat=\"secondRule in ruleList | filter : {\'upRuleCode\':firstRule.ruleCode, \'level\':\'2\'} : true | orderBy:\'ruleCode\'\">\n			        		<div class=\"row\">\n			        			<div class=\"form-group col-md-12 text-center\">\n				                    <div ng-class=\"inputClass\" class=\"col-md-4\">\n				                        <label class=\"control-label\" style=\"font-size:16px\">\n					                        {{secondRule.name}}\n					                    </label>\n				                        <label class=\"control-label\">\n				                        	<button type=\"button\" class=\"btn btn-xs btn-primary\" ng-click=\"selectAll(secondRule.ruleCode)\"><i class=\"fa fa-check-square-o\"></i>&nbsp;全选</button>\n				                        	<button type=\"button\" class=\"btn btn-xs btn-primary\" ng-click=\"cancelAll(secondRule.ruleCode)\"><i class=\"fa fa-square-o\"></i>&nbsp;全不选</button>\n				                        </label>\n				                    </div>\n				        		</div>\n			        		</div>\n			        		<div class=\"row\">\n			        			<div class=\"form-group col-md-1 text-center\"></div>\n			        			<div class=\"form-group col-md-11 text-center\">\n				                    <div ng-class=\"inputClass\" class=\"col-md-2\" ng-repeat=\"threeRule in ruleList | filter : {\'upRuleCode\':secondRule.ruleCode, \'level\':\'3\'} : true | orderBy:\'ruleCode\'\">\n				                        <label class=\"control-label\">\n					                         <input type=\"checkbox\" checklist-model=\"rules\" checklist-value=\"threeRule.ruleCode\"> {{threeRule.name}}\n					                    </label>\n				                    </div>\n				        		</div>\n			        		</div>\n			        	</div>\n		    		</div>\n		    	</div>\n	        	\n	        	\n	        </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n        	<!-- <a href=\"\" class=\"btn btn-default\" ng-click=\"import()\">导入规则</a> -->\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"roleForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.system.android-update-all.html","<div class=\"android-version-form-bc\" us-spinner spinner-key=\"version-upload-form\">\n	<div class=\"modal-body\">\n		<legend>{{formTitle}}</legend>\n		<div class=\"panel panel-primary\">\n		    <div class=\"panel-heading\">\n		        <h6 class=\"panel-title\">待升级安卓版本信息</h6>\n		    </div>\n		    <div class=\"panel-body\">\n		    	<form class=\"form-horizontal\">\n					<fieldset>\n						<div class=\"form-group\">\n							<label class=\"col-md-3 control-label\">程序版本号:</label>\n							<div class=\"col-md-3\">\n								<p class=\"form-control-static\">{{versionInfo.versionNumber}}</p>\n							</div>\n							<label class=\"col-md-3 control-label\">安卓版本号:</label>\n							<div class=\"col-md-3\">\n								<p class=\"form-control-static\">{{versionInfo.versionCode}}</p>\n							</div>\n						</div>\n						<div class=\"form-group\">\n							<label class=\"col-md-3 control-label\">版本描述:</label>\n							<div class=\"col-md-9\">\n								<p class=\"form-control-static\">{{versionInfo.versionDesc}}</p>\n							</div>\n						</div>\n					</fieldset>\n				</form>\n		    </div>\n		</div>\n		<div class=\"panel panel-primary\">\n		    <div class=\"panel-heading\">\n		        <h6 class=\"panel-title\">待升级版本的机器情况</h6>\n		    </div>\n		    <div class=\"panel-body\">\n		    	<form class=\"form-horizontal\" ng-submit=\"update()\">\n		            <fieldset>\n						<div class=\"form-group\">\n							<div class=\"radio\">\n								<label>\n									<input type=\"radio\" name=\"optionsRadios\" ng-model=\"selected.name\" value=\"all\">\n									一共需要升级{{needUpdate.machines.length}}台机器(升级所有)\n								</label>\n							</div>\n							<div class=\"radio\">\n								<label>\n									<input type=\"radio\" name=\"optionsRadios\" ng-model=\"selected.name\" value=\"online\">\n									其中在线有{{needUpdate.onlineMachines.length}}台机器(升级在线)\n								</label>\n							</div>\n						</div>\n		            </fieldset>\n			        <div class=\"modal-footer\">\n			            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n			            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"升级\">\n			        </div>\n			    </form>\n		    </div>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("widgets.system.android-version-form.html","<div class=\"android-version-form-bc\" us-spinner spinner-key=\"version-upload-form\">\n    <div class=\"modal-body\">\n        <legend>{{formTitle}}</legend>\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                <h6 class=\"panel-title\">上传安卓版本文件</h6>\n            </div>\n            <div class=\"panel-body\">\n                <form class=\"form-horizontal\" ng-submit=\"upload()\" enctype=\"multipart/form-data\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label for=\"inputName\" class=\"col-md-3 control-label\">版本文件</label>\n\n                            <div class=\"col-md-4\">\n                                <input type=\"file\" file-model=\"versionInfo.versionFile\" required class=\"form-control\">\n                            </div>\n                            <div class=\"col-md-5\">\n                                <button type=\"submit\" class=\"btn btn-success\">上传</button>\n                            </div>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                <h6 class=\"panel-title\">安卓版本基本信息</h6>\n            </div>\n            <div class=\"panel-body\">\n                <form class=\"form-horizontal\" ng-submit=\"save()\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-3 control-label\">程序版本号</label>\n\n                            <div class=\"col-md-3\">\n                                <input type=\"text\" ng-model=\"versionInfo.versionNumber\" required class=\"form-control\">\n                            </div>\n                            <label class=\"col-md-3 control-label\">安卓版本号</label>\n\n                            <div class=\"col-md-3\">\n                                <input type=\"text\" ng-model=\"versionInfo.versionCode\" required class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-3 control-label\">版本状态</label>\n\n                            <div class=\"col-md-3\">\n                                <select ng-model=\"versionInfo.versionStatus\" class=\"form-control\">\n                                    <option value=\"0\">禁用</option>\n                                    <option value=\"1\">启用</option>\n                                    <option value=\"6\">发布</option>\n                                </select>\n                            </div>\n                            <label class=\"col-md-3 control-label\">控制板类型</label>\n\n                            <div class=\"col-md-3\">\n                                <select ng-model=\"versionInfo.controlBoardType\" required class=\"form-control\">\n                                    <option value=\"EG\">易购</option>\n                                    <option value=\"ZJ\">中吉</option>\n                                    <option value=\"NEG\">新易购</option>\n                                    <option value=\"YC\">易触</option>\n                                    <option value=\"JY\">金雨</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-3 control-label\">下载链接</label>\n\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" ng-model=\"versionInfo.versionDownloadUrl\" required\n                                       class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-3 control-label\">版本描述</label>\n\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" ng-model=\"versionInfo.versionDesc\" required class=\"form-control\">\n                            </div>\n                        </div>\n                    </fieldset>\n                    <div class=\"modal-footer\">\n                        <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n                        <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("widgets.system.android-version-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>\n            安卓版本&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-primary\" ng-click=\"openForm()\" ng-if=\"$root.haveAuth(\'050202\', currentUser.rules)\">\n                <i class=\"fa fa-pencil-square-o\"></i>&nbsp;新建安卓版本\n            </button>\n        </h3>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"versionTable\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover \">\n                <tr>\n                    <th>ID</th>\n                    <th>程序版本号</th>\n                    <th>安卓版本号</th>\n                    <th>控制板类型</th>\n                    <th>版本描述</th>\n                    <th>下载链接</th>\n                    <th>操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"versionInfo in versionInfos\">\n                    <td>\n                        {{versionInfo.versionId}}\n                    </td>\n                    <td>\n                        {{versionInfo.versionNumber}}\n                    </td>\n                    <td>\n                        {{versionInfo.versionCode}}\n                    </td>\n                    <td>\n                        {{versionInfo.controlBoardType | controlBoardType}}\n                    </td>\n                    <td>\n                        <abbr title=\"{{versionInfo.versionDesc}}\">{{versionInfo.versionDesc}}</abbr>\n                    </td>\n                    <td>\n                        {{versionInfo.versionDownloadUrl}}\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"openForm(versionInfo)\"\n                                ng-if=\"$root.haveAuth(\'050203\', currentUser.rules)\">修改\n                        </button>\n                        <button class=\"btn btn-sm btn-danger\"\n                                data-ng-click=\"updateAll(versionInfo)\"\n                                ng-if=\"$root.haveAuth(\'050204\', currentUser.rules)\"><i\n                                class=\"fa fa-exclamation-triangle\"></i>&nbsp;升级所有小于当前版本的机器\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.system.pay-type-form.html","<div class=\"pay-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\">\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">支付方式名称</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" ng-model=\"payType.payName\" required placeholder=\"输入支付方式的名称\" class=\"form-control\">\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.system.pay-type-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>\n            支付方式&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-primary\" ng-click=\"openForm()\" ng-if=\"$root.haveAuth(\'050102\', currentUser.rules)\">\n                <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建支付方式\n            </button>\n        </h3>\n    </div>\n    <div class=\"col-md-12 bs-component\">\n        <div us-spinner spinner-key=\"pay-type-list-spinner\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover\">\n                <tr>\n                    <th>ID</th>\n                    <th>支付方式</th>\n                    <th>操作\n                        <button class=\"btn btn-xs btn-default pull-right\"\n                                ng-click=\"refreshData(true)\">刷新\n                        </button>\n                    </th>\n                </tr>\n                <tr ng-repeat=\"payType in providePayTypes\">\n                    <td>\n                        {{payType.id}}\n                    </td>\n                    <td>\n                        {{payType.payName}}\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-primary\"\n                                data-ng-click=\"openForm(payType)\" ng-if=\"$root.haveAuth(\'050103\', currentUser.rules)\"><i\n                                class=\"fa  fa-pencil-square-o\"></i>&nbsp;修改\n                        </button>\n                        <button class=\"btn btn-sm btn-danger\"\n                                data-ng-click=\"delete(payType)\" ng-disabled=\"true\"\n                                ng-if=\"$root.haveAuth(\'050104\', currentUser.rules)\"><i class=\"fa fa-trash-o\"></i>&nbsp;删除\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.user.edit-password.html","<div class=\"channel-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\">\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\">用户名</label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" readonly=\"true\" value=\"{{userName}}\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\"><sup><i class=\"fa fa-asterisk text-danger\"></i></sup>原密码</label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"password\" ng-model=\"user.password\" class=\"form-control\" required placeholder=\"输入原密码\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\"><sup><i class=\"fa fa-asterisk text-danger\"></i></sup>新密码</label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"password\" ng-model=\"user.newPwd1\" class=\"form-control\" required placeholder=\"输入新密码\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\"><sup><i class=\"fa fa-asterisk text-danger\"></i></sup>新密码</label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"password\" ng-model=\"user.newPwd2\" class=\"form-control\" required placeholder=\"确认新密码\">\n                    </div>\n                </div>\n                <div class=\"alert alert-danger\" ng-if=\"invalidMessage.$infoForm\">\n                    <i class=\"fa fa-warning\"></i>{{invalidMessage.$infoForm}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.user.login.html","<div class=\"login-wrap login-box\">\n    <div class=\"login-logo\">\n        <a href=\"#\"><b>前海易购</b></a>\n    </div>\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <p class=\"login-box-msg\">用户登录</p>\n\n        <form ng-submit=\"login()\" autocomplete=\"off\">\n            <div class=\"form-group has-feedback\">\n                <label>用户名</label>\n                <input type=\"text\" class=\"form-control\" required\n                ng-model=\"user.username\" autofocus>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"input-key\">密码</label>\n                <input type=\"password\" id=\"input-key\" class=\"form-control\" required\n                       ng-model=\"user.password\">\n            </div>\n            <div class=\"alert alert-danger\" ng-if=\"invalidMessage.$form\">\n                <i class=\"fa fa-warning\"></i>{{invalidMessage.$form}}\n            </div>\n            <div class=\"form-group\">\n                <label>\n                    <input type=\"checkbox\" ng-model=\"user.remember\"> <span class=\"login-auto\">自动登录</span>\n                </label>\n                <input type=\"submit\" class=\"btn btn-success pull-right\" value=\"登录\">\n            </div>\n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>");
$templateCache.put("widgets.user.user-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"userForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>{{formTitle}}</legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">用户名</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" name=\"userName\" ng-model=\"userInfo.userName\" ng-pattern=\"/^[0-9A-Za-z_]{5,16}$/\" ng-disabled=\"isEdit\"\n                        required placeholder=\"6-16位字母、数字和下划线\" class=\"form-control\">\n                        <span ng-show=\"userForm.userName.$invalid\" class=\"help-block\">用户名不能为空,长度为5-16位,只能字母、数字和下划线组成.</span>\n                    </div>\n                    <label ng-if=\"!isEdit\" class=\"col-md-2 control-label\">密码</label>\n                    <label ng-if=\"isEdit\" class=\"col-md-2 control-label\">重置密码</label>\n                    <div class=\"col-md-4\">\n                        <input ng-if=\"!isEdit\" type=\"password\" ng-model=\"userInfo.password\" required placeholder=\"登录密码\" class=\"form-control\">\n                        <input ng-if=\"isEdit\" type=\"password\" ng-model=\"userInfo.password\" placeholder=\"重置密码才需要填写\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">中文名</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" name=\"chineseName\" ng-model=\"userInfo.chineseName\" ng-maxlength=\"8\" required placeholder=\"真实姓名\" class=\"form-control\">\n                        <span ng-show=\"userForm.chineseName.$invalid\" class=\"help-block\">真实姓名不能为空,最长为8位.</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">邮箱</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"email\" name=\"email\" ng-model=\"userInfo.email\" ng-pattern=\"/^([\\w-_]+(?:\\.[\\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\\.[a-z]{2,6})$/\" placeholder=\"电子邮箱地址\" class=\"form-control\">\n                        <span ng-show=\"userForm.email.$invalid\" class=\"help-block\">邮箱格式不正确.</span>\n                    </div>\n                    <label class=\"col-md-2 control-label\">手机号</label>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" name=\"mobile\" ng-model=\"userInfo.mobile\" ng-pattern=\"/(^(13\\d|15[^4,\\D]|17[13678]|18\\d)\\d{8}|170[^346,\\D]\\d{7})$/\" placeholder=\"常用手机号\" class=\"form-control\">\n                        <span ng-show=\"userForm.mobile.$invalid\" class=\"help-block\">手机号格式不正确.</span>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"userForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.user.user-list.html","<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>\n            用户列表&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-primary\" ng-click=\"openForm()\"\n                    ng-if=\"$root.haveAuth(\'090202\', currentUser.rules)\">\n                <i class=\"fa  fa-pencil-square-o\"></i>&nbsp;新建用户\n            </button>\n        </h3>\n    </div>\n    <div class=\"row\" ng-show=\"$root.haveAuth(\'090201\', currentUser.rules)\">\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">组织</h6>\n                </div>\n                <div class=\"panel-body ego-tree-height\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <treecontrol class=\"tree-classic\" tree-model=\"treeData\" on-selection=\"showSelected(node)\"\n                                         expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n                                {{node.orgName}}\n                            </treecontrol>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h6 class=\"panel-title\">用户列表</h6>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"bs-component\">\n                        <div us-spinner spinner-key=\"agentTable\" class=\"table-responsive\">\n                            <table class=\"table table-striped table-hover \">\n                                <tr>\n                                    <th>用户名</th>\n                                    <th>中文名</th>\n                                    <th>组织</th>\n                                    <th>手机号</th>\n                                    <th>创建时间</th>\n                                    <th>操作</th>\n                                </tr>\n                                <tr ng-repeat=\"user in userInfos\">\n                                    <td>\n                                        {{user.userInfo.userName}}\n                                    </td>\n                                    <td>\n                                        {{user.userInfo.chineseName}}\n                                    </td>\n                                    <td>\n                                        {{user.orgName}}\n                                    </td>\n                                    <td>\n                                        {{user.userInfo.mobile}}\n                                    </td>\n                                    <td>\n                                        {{user.userInfo.gmtCreated | date : \'yyyy-MM-dd HH:mm\'}}\n                                    </td>\n                                    <td>\n                                        <button class=\"btn btn-xs btn-primary\"\n                                                data-ng-click=\"openForm(user.userInfo)\"\n                                                ng-if=\"$root.haveAuth(\'090203\', currentUser.rules)\">修改\n                                        </button>\n                                        <button class=\"btn btn-xs btn-primary\"\n                                                data-ng-click=\"openOrgForm(user)\"\n                                                ng-if=\"$root.haveAuth(\'090205\', currentUser.rules)\">授权组织\n                                        </button>\n                                        <button class=\"btn btn-xs btn-primary\"\n                                                data-ng-click=\"openRoleForm(user.userInfo)\"\n                                                ng-if=\"$root.haveAuth(\'090206\', currentUser.rules)\">授权角色\n                                        </button>\n                                        <button class=\"btn btn-xs btn-danger\" ng-disabled=\"userInfo.userId===1\"\n                                                data-ng-click=\"delete(user.userInfo)\"\n                                                confirm=\"确定删除用户：{{user.userInfo.userName}}?\"\n                                                confirm-settings=\"{size: \'sm\'}\"\n                                                ng-show=\"$root.haveAuth(\'090204\', currentUser.rules)\"><i\n                                                class=\"fa fa-trash-o\"></i>&nbsp;删除\n                                        </button>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        <div class=\"row text-center\">\n                            <pagination class=\"pagination-sm\" boundary-links=\"true\"\n                                        max-size=\"6\"\n                                        items-per-page=\"itemsPerPage\"\n                                        total-items=\"totalSize\"\n                                        ng-model=\"currentPage\"\n                                        ng-change=\"pageChanged(currentPage)\"\n                                        previous-text=\"&lt;\" next-text=\"&gt;\"\n                                        first-text=\"&lt;&lt;\" last-text=\"&gt;&gt;\"></pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets.user.user-org-form.html","<div class=\"user-org-link-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"saveUserOrg()\">\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>给【用户:{{userInfo.userName}}】授权组织</legend>\n				<div class=\"panel panel-primary\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">组织</h6>\n				    </div>\n				    <div class=\"panel-body\">\n						<fieldset>\n							<treecontrol class=\"tree-classic\" selected-nodes=\"selectedNodes\" tree-model=\"treeData\"\n						    	expanded-nodes=\"expandedNodes\" options=\"treeOptions\">\n							     {{node.orgName}}\n							 </treecontrol>\n						</fieldset>\n				    </div>\n				</div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.user.user-personal-form.html","<div class=\"machine-type-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"save()\" name=\"userPersonalForm\" novalidate>\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>\n                    <small>上次登录时间:{{userInfo.lastLoginTime | date : \'yyyy-MM-dd HH:mm:ss\'}}</small>\n                </legend>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">中文名</label>\n\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" name=\"chineseName\" ng-model=\"userInfo.chineseName\" ng-maxlength=\"8\" required\n                               placeholder=\"真实姓名\" class=\"form-control\">\n                        <span ng-show=\"userPersonalForm.chineseName.$invalid\" class=\"help-block\">真实姓名不能为空,最长为8位.</span>\n                    </div>\n\n                    <label class=\"col-md-2 control-label\">上次登录IP</label>\n\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" readonly name=\"email\" ng-model=\"userInfo.lastLoginIp\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">邮箱</label>\n\n                    <div class=\"col-md-4\">\n                        <input type=\"email\" name=\"email\" ng-model=\"userInfo.email\"\n                               ng-pattern=\"/^([\\w-_]+(?:\\.[\\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\\.[a-z]{2,6})$/\"\n                               placeholder=\"电子邮箱地址\" class=\"form-control\">\n                        <span ng-show=\"userPersonalForm.email.$invalid\" class=\"help-block\">邮箱格式不正确.</span>\n                    </div>\n                    <label class=\"col-md-2 control-label\">手机号</label>\n\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" name=\"mobile\" ng-model=\"userInfo.mobile\"\n                               ng-pattern=\"/(^(13\\d|15[^4,\\D]|17[13678]|18\\d)\\d{8}|170[^346,\\D]\\d{7})$/\"\n                               placeholder=\"常用手机号\" class=\"form-control\">\n                        <span ng-show=\"userPersonalForm.mobile.$invalid\" class=\"help-block\">手机号格式不正确.</span>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" ng-disabled=\"userPersonalForm.$invalid\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");
$templateCache.put("widgets.user.user-role-form.html","<div class=\"user-org-link-form-bc\">\n    <form class=\"form-horizontal\" ng-submit=\"saveUserRole()\">\n        <div class=\"modal-body\">\n            <fieldset>\n                <legend>给【用户:{{userInfo.userName}}】授权角色</legend>\n				<div class=\"panel panel-primary\">\n				    <div class=\"panel-heading\">\n				        <h6 class=\"panel-title\">角色列表</h6>\n				    </div>\n				    <div class=\"panel-body\">\n						<div class=\"row\" ng-repeat=\"(key, value) in roleList | groupBy: \'level\' | orderBy:\'level\'\">\n			        		<div class=\"row\">\n			        			<div class=\"form-group col-md-12 text-center\">\n				                    <div ng-class=\"inputClass\" class=\"col-md-2\">\n				                        <label class=\"control-label\" style=\"font-size:16px\">\n					                        {{key}}--{{key | roleLevel : true}}\n					                    </label>\n				                    </div>\n				        		</div>\n			        		</div>\n			        		<div class=\"row\">\n			        			<div class=\"form-group col-md-1 text-center\"></div>\n			        			<div class=\"form-group col-md-11 text-center\">\n				                    <div ng-class=\"inputClass\" class=\"col-md-2\" ng-repeat=\"role in value | orderBy:\'roleId\'\">\n				                        <label class=\"control-label\">\n					                         <input type=\"checkbox\" checklist-model=\"userInfo.role\" checklist-value=\"role.roleId\"> {{role.roleName}}\n					                    </label>\n				                    </div>\n				        		</div>\n			        		</div>\n			        	</div>\n				    </div>\n				</div>\n                <div class=\"alert alert-danger\" ng-show=\"invalidMessage.$infoForm\">\n                    <i class=\"fa fa-warning\"></i>{{$scope.invalidMessage.$infoForm}}\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"\" class=\"btn btn-default\" ng-click=\"dismiss()\">关闭</a>\n            <input type=\"submit\" class=\"btn btn-submit-bc\" value=\"保存\">\n        </div>\n    </form>\n</div>\n");}]);