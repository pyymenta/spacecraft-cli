'use strict';
exports.__esModule = true;
var cli_1 = require('./cli');
var spacecraft_1 = require('./spacecraft');
var locations_1 = require('./locations');
var spacecraft = new spacecraft_1['default'](locations_1.Earth, locations_1.Moon);
var cli = new cli_1['default'](process.stdin, process.stdout, spacecraft);
cli.start();
var latestX = 0;
var latestY = 0;
setInterval(function () {
    if (latestX !== spacecraft.x || latestY !== spacecraft.y) {
        latestX = spacecraft.x;
        latestY = spacecraft.y;
        console.log('(' + latestX + ', ' + latestY + ') # ' + cli.latestKeyPressed.toUpperCase());
    }
}, 100);
//# sourceMappingURL=main.js.map
