var Header = (function () { 'use strict';

var template = (function () {
    var glyphicons = [
        'cloud',
        'glass',
        'music',
        'star',
        'film',
        'off',
        'qrcode',
        'camera',
        'facetime-video',
        'picture',
        'tint',
        'screenshot',
        'leaf',
        'fire',
        'eye-open',
        'globe',
        'heart-empty',
        'flash',
        'send',
        'tower',
        'tree-conifer',
        'tree-deciduous',
        'cd',
        'tent',
        'apple',
        'grain',
        'sunglasses'
    ];

    var bootstrapClasses = [
        'success',
        'info',
        'warning',
        'danger'
    ];

    return {
        helpers: {
            randomGlyphicon: function() {
                return glyphicons[~~(Math.random()*glyphicons.length)];
            },
            randomBootstrapClass: function() {
                return bootstrapClasses[~~(Math.random()*bootstrapClasses.length)];
            }
        }
    }
}());

function renderMainFragment ( root, component ) {
	var div = createElement( 'div' );
	div.className = "page-header";
	
	var h1 = createElement( 'h1' );
	
	appendNode( h1, div );
	
	var span = createElement( 'span' );
	span.className = "glyphicon glyphicon-" + ( template.helpers.randomGlyphicon() ) + " text-" + ( template.helpers.randomBootstrapClass() );
	
	appendNode( span, h1 );
	appendNode( createText( " Inspiration Engine " ), h1 );
	
	var small = createElement( 'small' );
	
	appendNode( small, h1 );
	appendNode( createText( "Your procedural muse" ), small );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			span.className = "glyphicon glyphicon-" + ( template.helpers.randomGlyphicon() ) + " text-" + ( template.helpers.randomBootstrapClass() );
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function Header ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

Header.prototype.get = function get( key ) {
 	return key ? this._state[ key ] : this._state;
 };

Header.prototype.fire = function fire( eventName, data ) {
 	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
 	if ( !handlers ) return;
 
 	for ( var i = 0; i < handlers.length; i += 1 ) {
 		handlers[i].call( this, data );
 	}
 };

Header.prototype.observe = function observe( key, callback, options ) {
 	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;
 
 	( group[ key ] || ( group[ key ] = [] ) ).push( callback );
 
 	if ( !options || options.init !== false ) {
 		callback.__calling = true;
 		callback.call( this, this._state[ key ] );
 		callback.__calling = false;
 	}
 
 	return {
 		cancel: function () {
 			var index = group[ key ].indexOf( callback );
 			if ( ~index ) group[ key ].splice( index, 1 );
 		}
 	};
 };

Header.prototype.on = function on( eventName, handler ) {
 	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
 	handlers.push( handler );
 
 	return {
 		cancel: function () {
 			var index = handlers.indexOf( handler );
 			if ( ~index ) handlers.splice( index, 1 );
 		}
 	};
 };

Header.prototype.set = function set( newState ) {
 	this._set( newState );
 	( this._root || this )._flush();
 };

Header.prototype._flush = function _flush() {
 	if ( !this._renderHooks ) return;
 
 	while ( this._renderHooks.length ) {
 		var hook = this._renderHooks.pop();
 		hook.fn.call( hook.context );
 	}
 };

Header.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Header.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

function dispatchObservers( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function createElement( name ) {
	return document.createElement( name );
}

function detachNode( node ) {
	node.parentNode.removeChild( node );
}

function insertNode( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function appendNode( node, target ) {
	target.appendChild( node );
}

function createText( data ) {
	return document.createTextNode( data );
}

return Header;

}());