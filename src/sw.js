'use strict';
importScripts('js/sw-toolbox.js');
toolbox.precache([ 'index.html', 'css/main.css' ]);
toolbox.router.get('assets/*', toolbox.cacheFirst);
toolbox.router.get('*', toolbox.networkFirst, { networkTimeoutSeconds: 5 });
