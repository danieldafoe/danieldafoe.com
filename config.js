// Config file for gulp tasks
'use strict';

module.exports = {
  jade: {
    settings: {
  		pretty: true
    }
  },
  rename: {
  	settings: {
		  suffix: '.min'
  	}
  },
  imagemin: {
    settings: {
      progressive: true
    }
  }
};