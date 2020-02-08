const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
            indentWidth: 4,
            includePaths: [path.join(__dirname, 'styles')],
          }
      },
    }
  },
}