// 静态资源版本号 helper：返回主题 source 下指定文件的 mtime 时间戳，
// 用于给 CSS/JS 引用加 ?v= 后缀，避免浏览器缓存旧资源。
const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('asset_version', function (rel) {
  try {
    const filePath = path.join(hexo.theme_dir, 'source', rel);
    return fs.statSync(filePath).mtime.getTime();
  } catch (e) {
    return Date.now();
  }
});
