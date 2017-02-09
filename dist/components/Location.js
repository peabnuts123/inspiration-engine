var Location = (function () { 'use strict';

var template = (function () {
    var names = [
        'Really Dangerous',
        'Uncanny',
        'Forbidden',
        'Fantasy',
        'Dire',
        'Galloping',
        'Cartoon',
        'Miyazaki',
        'Silicon',
        'Frictional',
        'Barked',
        'Rough',
        'Hilly',
        'Vile',
        'Swampy',
        'Marshy',
        'Jarvis',
        'Andrews',
        'Entombed',
        'Magical',
        'Rocky',
        'Dark',
        'Beautiful',
        'Autumnal',
        'Villainous',
        'Calm',
        'Eastern',
        'Western',
        'Northern',
        'Southern',
        'Far',
        'Queens',
        'Uncharted',
        'Unplottable',
        'Marble',
        'Paper',
        'Golden',
        'Smokey',
        'Foggy',
        'Misty',
        'Rainy',
        'Thunder',
        'Windy',
        'Big Boss',
        'Smugglers',
        'Neon',
        'Blue',
        'Red',
        'Endless',
        'Wooded',
        'Flooded',
        'Godrics',
        'Salazaars',
        'Helgas',
        'Rowenas',
        'Hogwarts',
        'Bills',
        'Cao Cao',
        'Liu Bai',
        'Liu Bai',
        'Wai Lin',
        'Bo Hao',
        'Su Mai',
        'Har Gao',
        'Shigeru',
        'Miyamoto',
        'Rollo',
        'Solar',
        'Lam',
        'Sinoma',
        'Rubico',
        'Sino',
        'Kappa'
    ];

    var locations = [
        'Roads',
        'Valley',
        'Forest',
        'Fields',
        'Docks',
        'Gorge',
        'Encampment',
        'Jungle',
        'Plains',
        'Temple',
        'Farmlands',
        'Gulley',
        'Outcrop',
        'Trails',
        'Drylands',
        'Ocean',
        'Ethereal Plane',
        'Labyrinth',
        'Crag',
        'Cliffs',
        'Cavern',
        'Cave',
        'Mountain',
        'Sea',
        'Lake',
        'River',
        'Archives',
        'Dungeon',
        'Village',
        'Megacity',
        'Megalopolis',
        'Path',
        'Cove',
        'Bay',
        'Desert',
        'Casino',
        'Hideout',
        'Gardens',
        'Glade',
        'Hollow',
        'School',
        'Way',
        'Volcano',
        'Maze',
        'House',
        'passage',
        'Pass',
        'Ports',
        'Belt',
        'Starscape',
        'Plaza',
        'Ministry',
        'Castle'
    ];

    var attributes = [
        'Death',
        'Life',
        'Sacrifice',
        'Innovation',
        'Networking',
        'Magic',
        'Confusion',
        'Imminent Death',
        'Unity',
        'Harmony',
        'Chaos',
        'Entropy',
        'Order',
        'Unpredictability',
        'Resolution',
        'GabeN',
        'Time',
        'Fire',
        'Air',
        'Earth',
        'Water',
        'Lightening',
        'Jasaar',
        'Mystery',
        'Jas’kar',
        'Clarity',
        'Susan Jessica',
        'Witchcraft and Wizardry',
        'Might',
        'Advancement',
        'Popularity',
        'Ja’den Dionne',
        'Feline Dion',
        'Deon Blaster',
        'Power Tennis'
    ];

    function randomArrayItem(array) {
        return array[~~(Math.random()*array.length)];
    }

    return {
        helpers: {
            randomLocationName: function() {
                var locationName = randomArrayItem(names) + " " + randomArrayItem(locations);

                if (Math.random() <= 0.15) {
                    locationName += " of " + randomArrayItem(attributes);
                }

                return locationName;
            },
            iterationArray: function(length) {
                var array = [];
                for(var i=0; i<length; i++) {
                    array.push(i);
                }
                return array;
            }
        },
        data() {
            return {
                test: "Hello world"
            }
        }
    }
}());

function renderMainFragment ( root, component ) {
	var h2 = createElement( 'h2' );
	
	appendNode( createText( "Locations" ), h2 );
	var text1 = createText( "\r\n\r\n" );
	
	var table = createElement( 'table' );
	table.className = "table table-striped table-hover";
	
	var tbody = createElement( 'tbody' );
	
	appendNode( tbody, table );
	var eachBlock_anchor = createComment();
	appendNode( eachBlock_anchor, tbody );
	var eachBlock_value = template.helpers.iterationArray(10);
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( h2, target, anchor );
			insertNode( text1, target, anchor );
			insertNode( table, target, anchor );
		},
		
		update: function ( changed, root ) {
			var eachBlock_value = template.helpers.iterationArray(10);
			
			for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
				if ( !eachBlock_iterations[i] ) {
					eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
					eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
				} else {
					eachBlock_iterations[i].update( changed, root, eachBlock_value, eachBlock_value[i], i );
				}
			}
			
			teardownEach( eachBlock_iterations, true, eachBlock_value.length );
			
			eachBlock_iterations.length = eachBlock_value.length;
		},
		
		teardown: function ( detach ) {
			teardownEach( eachBlock_iterations, false );
			
			if ( detach ) {
				detachNode( h2 );
				detachNode( text1 );
				detachNode( table );
			}
		}
	};
}

function renderEachBlock ( root, eachBlock_value, number, number__index, component ) {
	var tr = createElement( 'tr' );
	tr.className = "text-center";
	
	var td = createElement( 'td' );
	
	appendNode( td, tr );
	var text = createText( template.helpers.randomLocationName() );
	appendNode( text, td );
	appendNode( createText( "\r\n            " ), tr );
	
	var td1 = createElement( 'td' );
	
	appendNode( td1, tr );
	var text2 = createText( template.helpers.randomLocationName() );
	appendNode( text2, td1 );

	return {
		mount: function ( target, anchor ) {
			insertNode( tr, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, number, number__index ) {
			text.data = template.helpers.randomLocationName();
			
			text2.data = template.helpers.randomLocationName();
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( tr );
			}
		}
	};
}

function Location ( options ) {
	options = options || {};
	
	this._state = Object.assign( template.data(), options.data );

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

Location.prototype.get = function get( key ) {
 	return key ? this._state[ key ] : this._state;
 };

Location.prototype.fire = function fire( eventName, data ) {
 	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
 	if ( !handlers ) return;
 
 	for ( var i = 0; i < handlers.length; i += 1 ) {
 		handlers[i].call( this, data );
 	}
 };

Location.prototype.observe = function observe( key, callback, options ) {
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

Location.prototype.on = function on( eventName, handler ) {
 	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
 	handlers.push( handler );
 
 	return {
 		cancel: function () {
 			var index = handlers.indexOf( handler );
 			if ( ~index ) handlers.splice( index, 1 );
 		}
 	};
 };

Location.prototype.set = function set( newState ) {
 	this._set( newState );
 	( this._root || this )._flush();
 };

Location.prototype._flush = function _flush() {
 	if ( !this._renderHooks ) return;
 
 	while ( this._renderHooks.length ) {
 		var hook = this._renderHooks.pop();
 		hook.fn.call( hook.context );
 	}
 };

Location.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Location.prototype.teardown = function teardown ( detach ) {
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

function createComment() {
	return document.createComment( '' );
}

function teardownEach( iterations, detach, start ) {
	for ( var i = ( start || 0 ); i < iterations.length; i += 1 ) {
		iterations[i].teardown( detach );
	}
}

return Location;

}());