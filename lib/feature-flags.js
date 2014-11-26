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
var root = '';

function getManifest() {
  var file = './' + manifest;
  delete require.cache[require.resolve(file)];
  return require(file);
}

function isActiveForAccount(flag, id) {
  return flag.indexOf(id) > -1;
}

function getFeatureForAccount(id) {
  var flags = getManifest();
  for (var flag in flags) {
    if (isActiveForAccount(flags[flag], id)) {
      return flag;
    }
  }
  return DEFAULT_FEATURE;
}

function delegateAccount(req, res, next) {
  var feature = getFeatureForAccount(req.cookies['account-id']);
  req.url = '/' + feature + root + req.url;
  next();
};

module.exports = function(flags_file, feature_root) {
  manifest = flags_file;
  if (feature_root) {
    root = '/' + feature_root;
  }
  return delegateAccount;
};
