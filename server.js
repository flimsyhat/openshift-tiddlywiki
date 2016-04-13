var $tw = require("./boot/boot.js").TiddlyWiki();

// add tiddler repository to end of the persistent data dir
// (here 'wikis' has been added)

var $dir = process.env.OPENSHIFT_DATA_DIR + "wikis"

// modifying the boot arguments to use the openshift port and ip

$tw.boot.argv = [
  $dir,
  "--verbose",
  "--server",
  process.env.OPENSHIFT_NODEJS_PORT,
  "$:/core/save/all",
  "text/plain",
  "text/html",
  "sean",
  "G3ckosl#d",
  process.env.OPENSHIFT_NODEJS_IP,
];

$tw.boot.boot();
