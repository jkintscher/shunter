/*
 * Implements FeatureFlag middleware for the Connect server
 * ========================================================
 *
 * It re-writes the request URL to the matching feature
 * directory, based on the specified feature flag manifest
 * file and the `account-id` cookie value.
 */

var DEFAULT_FEATURE = 'master';
var manifest = '';

function getManifest() {
  var file = './' + manifest;
  delete require.cache[require.resolve(file)];
  return require(file);
}

function isActiveForAccount(flag, id) {
  return flag.accounts.indexOf(id) > -1;
}

function getFeatureForAccount(id) {
  var flags = getManifest();
  for (var flag in flags) {
    if (isActiveForAccount(flags[flag], id)) {
      return flags[flag].head;
    }
  }
  return DEFAULT_FEATURE;
}

function delegateAccount(req, res, next) {
  var feature = getFeatureForAccount(req.cookies['account-id']);
  req.url = '/' + feature + req.url;
  next();
};

module.exports = function(flags_file) {
  manifest = flags_file;
  return delegateAccount;
};
