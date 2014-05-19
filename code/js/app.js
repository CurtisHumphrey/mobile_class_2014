(function() {
  requirejs.config({
    paths: {
      text: "../../bower_components/requirejs-text/text",
      knockout: "../../bower_components/knockout/build/output/knockout-latest.debug",
      knockout_amd: "../../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
      jquery: "../../bower_components/jquery/dist/jquery",
      bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap"
    },
    baseUrl: '/code/js',
    shim: {
      'bootstrap': {
        deps: ['jquery'],
        exports: 'jQuery'
      }
    }
  });

  define(['knockout', 'knockout_amd', 'bootstrap'], function(ko, amd, bootstrap) {
    ko.amdTemplateEngine.defaultPath = "/ko_templates";
    ko.amdTemplateEngine.defaultSuffix = ".html";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
    $(document).ready(function() {
      console.log("jQuery Ready");
      return ko.applyBindings();
    });
  });

}).call(this);
