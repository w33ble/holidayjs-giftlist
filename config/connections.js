/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

var url = require('url');
var conf = {};
if (process.env.MONGOLAB_URI) {
  var mongoParams = url.parse(process.env.MONGOLAB_URI);
  conf = {
    user: mongoParams.auth.split(':')[0],
    password: mongoParams.auth.split(':')[1],
    port: mongoParams.port,
    host: mongoParams.hostname,
    database: mongoParams.pathname.substring(1),
  };
}

var mongoConf = Object.assign({
  host: 'localhost',
  port: 27017,
  // user: 'username',
  // password: 'password',
  database: 'giftlist'
}, conf);

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  devMysqlServer: Object.assign({ adapter: 'sails-mongo' }, mongoConf),
  prodMysqlServer: Object.assign({ adapter: 'sails-mongo' }, mongoConf)

  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};