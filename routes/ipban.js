// list of banned IPs
var banned = [
'127.0.0.1',
'192.168.2.12'
];

// middleware enabled or not
var enabled = true;

// the middleware function
module.exports = function(onoff) {
    
    console.log('in ipban.js');
    enabled = (onoff == 'on') ? true : false;
    
    return function(req, res, next) {
        if (enabled && banned.indexOf(req.connection.remoteAddress) > -1) {
            res.end('Banned');
        }
        else { next(); }
    }
    
};