angular.module('hshs').directive('countdown', [
        'Util',
        '$interval',
        function (Util, $interval) {
            return {
                restrict: 'A',
                scope: { date: '@' },
                link: function (scope, element) {
                    var future;
                    future = new Date(scope.date);
                    $interval(function () {
                        var diff;
                        diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                        return element.html(Util.dhms(diff));
                    }, 1000);
                }
            };
        }
    ]).factory('Util', [function () {
            return {
                dhms: function (t) {
                    var days, hours, minutes, seconds, days1, hours1;
                    days = Math.floor(t / 86400);

                    t -= days * 86400;
                    hours = Math.floor(t / 3600) % 24;
                    t -= hours * 3600;
                    minutes = Math.floor(t / 60) % 60;
                    t -= minutes * 60;
                    seconds = t % 60;
                    return [
                        '<span>' + days + '<br><small>天</small></span>',
                        '<span>' + hours + '<br><small>时</small></span>',
                        '<span>' + minutes + '<br><small>分</small></span>',
                        '<span>' + seconds + '<br><small>秒</small></span>'
                    ].join(' ');
                }
            };
        }]);
