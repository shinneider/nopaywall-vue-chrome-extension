module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/pages/popup/main.js',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/pages/options/main.js',
      title: 'Options'
    },
    devtools: {
      template: 'public/browser-extension.html',
      entry: './src/pages/devtools/main.js',
      title: 'Devtools'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src/pages/standalone/main.js',
      title: 'Standalone',
      filename: 'index.html'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/shared/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}
