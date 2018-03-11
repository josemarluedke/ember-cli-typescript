import stringUtils = require('ember-cli-string-utils');
import TestFrameworkDetector = require('../test-framework-detector');
import {BlueprintOptions} from "ember-cli/lib/models/blueprint";

export = TestFrameworkDetector.extend({
  description: 'Generates an instance initializer unit test.',
  locals: function(options: BlueprintOptions) {
    return {
      friendlyTestName: ['Unit', 'Instance Initializer', options.entity.name].join(' | '),
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix!)
    };
  }
});