(function() {
  requirejs.config({
    paths: {
      text: "../../bower_components/requirejs-text/text",
      knockout: "../../bower_components/knockout/build/output/knockout-latest.debug",
      knockout_amd: "../../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
      jquery: "../../bower_components/jquery/dist/jquery",
      bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
      hammer: "../../bower_components/hammerjs/hammer",
      knockout_hammer: "../../bower_components/knockout-hammer/knockout-hammer"
    },
    baseUrl: '/code/js',
    shim: {
      'knockout_hammer': {
        deps: ['hammer', 'knockout'],
        exports: 'hammer'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: 'jQuery'
      }
    }
  });

  define(['knockout', 'knockout_amd', 'bootstrap', 'knockout_hammer'], function(ko, amd, bootstrap, hammer) {
    ko.amdTemplateEngine.defaultPath = "/ko_templates";
    ko.amdTemplateEngine.defaultSuffix = ".html";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
    $(document).ready(function() {
      console.log("jQuery Ready");
      return ko.applyBindings();
    });
  });

}).call(this);
