/*!
Zero-Padding v1.0.0
Zero padding for number at JavaScript
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/zero-padding
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ZeroPadding=t()}(this,function(){"use strict";return function(e,t){"number"!=typeof e&&(e=parseFloat(e));for(var o=e>=0?"":"-",n="",f=0,r=t-((e=Math.abs(e))>0?Math.floor(Math.log(e)*Math.LOG10E+1):1);f<r;f++)n+="0";return o+n+e}});
