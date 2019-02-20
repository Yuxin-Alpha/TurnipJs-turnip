const http = require('http');

class Application {
 
  /**
   * 构造函数
   */
  constructor() {
      this.callbackFunc;
  }

  /**
   * 开启http server并传入callback
   */
  listen(...args) {
      let server = http.createServer(this.callback());
      server.listen(...args);
  }

  /**
   * 挂载回调函数
   * @param {Function} fn 回调处理函数
   */
  use(fn) {
      this.callbackFunc = fn;
  }

  /**
   * 获取http server所需的callback函数
   * @return {Function} fn
   */
  callback() {
      return (req, res) => {
          this.callbackFunc(req, res);
      };
  }
}
module.exports = Application;