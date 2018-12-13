'use strict'; // http://www.w3schools.com/js/js_strict.asp

function Token(session) {
    this._session = session;
}

Token.prototype.getOAuth = function () {
    return this._session.oAuth;
};

Token.prototype.setOAuth = function (oAuth) {
    this._session.oAuth = oAuth;
};

Token.prototype.getCredentials = function () {
    return this._session.credentials;
};

Token.prototype.setCredentials = function (credentials) {
    this._session.credentials = credentials;
};

module.exports = Token;