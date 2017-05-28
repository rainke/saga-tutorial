'use strict';
var execSync = require('child_process').execSync;
const DEFAULT_PORT = 7500;
function OpenBrowserPlugin() {
  var defaultOptions = {
    port: DEFAULT_PORT
  };

  this.options = {
    port: defaultOptions.port
  };
  this.firstRun = true;
}

OpenBrowserPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', () => {
    if(this.firstRun) {
      this.firstRun = false;
      var url = 'http://localhost:' + this.options.port;
      openBrowser(url);
    }
  });
};

function openBrowser(url) {
  try {
    execSync('ps cax | grep "Google Chrome"');
      execSync(
        'osascript openChrome.applescript ' + url,
        {cwd: __dirname, stdio: 'ignore'}
      );
    return true;
  } catch(err){
    //空
    console.log(err)
  }
}

module.exports = OpenBrowserPlugin;