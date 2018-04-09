"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_conf_1 = require("./api-conf");
exports.handleAutorization = function (req, res, next) {
    var token = extractToken(req);
    if (!token) {
        res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        res.status(401).json({ message: 'Você precisa logar para autenticar.' });
    }
    else {
        jwt.verify(token, api_conf_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                res.status(403).json({ message: 'Não Autorizado.' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        // Authorization: Bearer HEADER.PAYLOAD.SIGNATURE
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
