var flags_manifest = '';

var getManifest = function() {
  var file = './' + flags_manifest;
  delete require.cache[require.resolve(file)];
  return require(file);
}

var isActiveForAccount = function(flag, id) {
  return flag.accounts.indexOf(id) > -1;
}

var delegateAccount = function(id) {
  var flags = getManifest();
  for (var flag in flags) {
    if (isActiveForAccount(flags[flag], id)) {
      return flags[flag].head;
    }
  }
  return 'master';
}

module.exports = function(flags_file) {
  flags_manifest = flags_file;

  return function(req, res, next) {
    var release = delegateAccount();
    req.url = '/' + release + req.url;
    next();
  };
};
