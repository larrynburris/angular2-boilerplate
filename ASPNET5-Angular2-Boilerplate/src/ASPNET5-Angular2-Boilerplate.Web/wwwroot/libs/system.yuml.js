System.trace = true;

window.showModuleRelationships = function () {
    var modules = Object.keys(System.loads)
      .map(function (moduleName) {
          return System.loads[moduleName];
      });

    function displayName(module) {
        return module.replace("http://localhost:2366/appScripts/", "")
                     .replace(".js", "")
                     .replace("./", "");
    }

    var moduleDefinitions = modules
        .filter(function (module) {
            return module.name.indexOf("appScripts") > -1;
        })
        .map(function (module) {
            var name = displayName(module.name);
            return "[" + name + "]";
        });

    var dependencyDefinitions = [];

    modules
      .filter(function (module) {
          return module.deps.length > 0 && module.name.indexOf("appScripts") > -1;
      })
      .forEach(function (module) {
          var name = displayName(module.name);

          var dependencies = module.deps
            .map(displayName)
            .map(function (dependencyName) {
                return "[" + name + "]->[" + dependencyName + "]"
            });
          dependencyDefinitions = dependencyDefinitions.concat(dependencies);
      });
    var definitions = moduleDefinitions.concat(dependencyDefinitions);
    var yumlRequest = "http://yuml.me/diagram/plain/class/" + definitions;
    window.open(yumlRequest);

};
