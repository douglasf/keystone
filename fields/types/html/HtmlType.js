/*!
 * Module dependencies.
 */

var util = require('util'),
	super_ = require('../Type');

/**
 * HTML FieldType Constructor
 * @extends Field
 * @api public
 */

function html(list, path, options) {

	this._nativeType = String;
	this._defaultSize = 'full';

	// TODO: implement filtering, usage disabled for now
	options.nofilter = true;
	this.wysiwyg = options.wysiwyg || false;
	this.height = options.height || 180;
  this.enableImages = options.enableImages || false;
  this.enableCloudinaryUploads = options.enableCloudinaryUploads || false;
  this.enableHtmlPaste = options.enableHtmlPaste || false;

	
	this._properties = ['wysiwyg', 'height', 'enableImages', 'enableCloudinaryUploads', 'enableHtmlPaste'];

	html.super_.call(this, list, path, options);
}

/*!
 * Inherit from Field
 */

util.inherits(html, super_);


/*!
 * Export class
 */

exports = module.exports = html;
