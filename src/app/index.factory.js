(function() {
    'use strict';

    angular
        .module('charityfulfillment')
        .factory('windowDimensions', [
            '$window',
            function($window) {
                return {
                    height: function() {
                        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    },
                    width: function() {
                        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    }
                }
            }
        ])
        .factory('utils', function() {
            return {
                // Util for finding an object by its 'id' property among an array
                findByItemId: function findById(a, id) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].item_id == id) return a[i];
                    }
                    return null;
                },
                // serialize form
                serializeObject: function(form) {
                    var o = {};
                    var a = form.serializeArray();
                    $.each(a, function() {
                        if (o[this.name] !== undefined) {
                            if (!o[this.name].push) {
                                o[this.name] = [o[this.name]];
                            }
                            o[this.name].push(this.value || '');
                        } else {
                            o[this.name] = this.value || '';
                        }
                    });
                    return o;
                },
                // high density test
                isHighDensity: function() {
                    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
                },
                // touch device test
                isTouchDevice: function() {
                    return !!('ontouchstart' in window);
                },
                // local storage test
                lsTest: function() {
                    var test = 'test';
                    try {
                        localStorage.setItem(test, test);
                        localStorage.removeItem(test);
                        return true;
                    } catch (e) {
                        return false;
                    }
                },
                // show/hide card
                card_show_hide: function(card, begin_callback, complete_callback, callback_element) {
                    $(card).velocity({
                            scale: 0,
                            opacity: 0.2
                        }, {
                            duration: 400,
                            easing: [0.4, 0, 0.2, 1],
                            // on begin callback
                            begin: function() {
                                if (typeof begin_callback !== 'undefined') {
                                    begin_callback(callback_element);
                                }
                            },
                            // on complete callback
                            complete: function() {
                                if (typeof complete_callback !== 'undefined') {
                                    complete_callback(callback_element);
                                }
                            }
                        })
                        .velocity('reverse');
                }
            };
        })



})();
