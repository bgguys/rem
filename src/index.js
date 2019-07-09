/**
 * rem 初始化文件
 */

'use strict';

var BGDom = require('./dom');

var BGRem = (function() {

  var _e = {};

  var PSD_WIDTH = 360; // 默认 PSD 稿宽度 360
  var FONT_SIZE = 100;  // 默认字体是 100 px

	/**
	 * [rem 初始化方法]
	 * @param  {[Number]} psdWidth [PSD稿宽度, 默认 360]
	 * @param  {[Number]} fontSize [字体大小, 默认 100]
	 */
  _e.init = function(psdWidth, fontSize) {
    if (psdWidth) {
      PSD_WIDTH = psdWidth;
    }

    if (fontSize) {
      FONT_SIZE = fontSize;
    }

		// 获取 webview 尺寸
    BGDom.getWinSize(function() {
      setFontSize();
    });

    window.onresize = function() {
      setFontSize();
    };
  };

	// 设置 body 字体大小
  function setFontSize() {
    var clientWidth = document.documentElement.clientWidth;
    // document.documentElement.style.fontSize = (clientWidth / (PSD_WIDTH / TIMES) * FONT_SIZE) + 'px';
    document.documentElement.setAttribute('style', 'font-size:' + (clientWidth / PSD_WIDTH * FONT_SIZE) + 'px!important');
  }

  return _e;

})();

module.exports = BGRem;
