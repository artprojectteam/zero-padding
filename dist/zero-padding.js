/*!
Zero-Padding v0.0.1
Zero padding for number at JavaScript
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/zero-padding
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ZeroPadding = factory());
}(this, (function () { 'use strict';

  /**
   * @param {number} num - integer
   * @param {number} digit - include digit number of zero padding
   * @return {string}
   */
  var index = (function (num, digit) {
    if (typeof num !== 'number') num = parseFloat(num);

    var sign = num >= 0 ? '' : '-';
    num = Math.abs(num);

    var digitNumber = num > 0 ? Math.floor(Math.log(num) * Math.LOG10E + 1) : 1;

    var zero = '';
    for (var i = 0, iLen = digit - digitNumber; i < iLen; i++) {
      zero += '0';
    }

    return sign + zero + num;
  });

  return index;

})));
