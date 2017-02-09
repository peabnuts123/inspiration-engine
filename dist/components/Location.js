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
        'Passage',
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
        'Dion Blaster',
        'Power Tennis'
    ];

    function randomArrayItem(array) {
        return array[~~(Math.random() * array.length)];
    }

    function randomLocationName() {
        var locationName = randomArrayItem(names) + " " + randomArrayItem(locations);

        if (Math.random() <= 0.15) {
            locationName += " of " + randomArrayItem(attributes);
        }

        return locationName;
    }

    function generateLocationNames(numRows, namesPerRow) {
        var names = [];
        for (var row = 0; row < numRows; row++) {
            var namesRow = [];
            for (var col = 0; col < namesPerRow; col++) {
                namesRow.push(randomLocationName());
            }

            names.push(namesRow);
        }

        return names;
    }

    return {
        helpers: {
            generateLocationNames: generateLocationNames
        },
        onrender: function () {
            this.set({
                generatedLocationRows: generateLocationNames(this.get('numRows'), this.get('numColumns'))
            })
        },
        data: function data() {
            return {
                generatedLocationRows: [],
                numRows: 10,
                numColumns: 3
            }
        }
    }

}());

function renderMainFragment ( root, component ) {
	var text = createText( "\r\n" );
	
	var h2 = createElement( 'h2' );
	
	appendNode( createText( "Locations" ), h2 );
	var text2 = createText( "\r\n\r\n" );
	
	var div = createElement( 'div' );
	div.className = "panel-group";
	div.id = "accordion";
	setAttribute( div, 'role', "tablist" );
	setAttribute( div, 'aria-multiselectable', "true" );
	
	var div1 = createElement( 'div' );
	div1.className = "panel panel-default";
	
	appendNode( div1, div );
	
	var div2 = createElement( 'div' );
	div2.className = "panel-heading";
	setAttribute( div2, 'role', "tab" );
	div2.id = "controlPanelHeading";
	
	appendNode( div2, div1 );
	
	var h4 = createElement( 'h4' );
	h4.className = "panel-title";
	
	appendNode( h4, div2 );
	
	var a = createElement( 'a' );
	a.className = "collapsed";
	setAttribute( a, 'role', "button" );
	setAttribute( a, 'data-toggle', "collapse" );
	setAttribute( a, 'data-parent', "#accordion" );
	a.href = "#controlsPanel";
	setAttribute( a, 'aria-expanded', "true" );
	setAttribute( a, 'aria-controls', "controlsPanel" );
	
	appendNode( a, h4 );
	appendNode( createText( "Controls " ), a );
	
	var small = createElement( 'small' );
	
	appendNode( small, a );
	
	var em = createElement( 'em' );
	
	appendNode( em, small );
	appendNode( createText( "Click to toggle" ), em );
	appendNode( createText( "\r\n        " ), div1 );
	
	var div3 = createElement( 'div' );
	div3.id = "controlsPanel";
	div3.className = "panel-collapse collapse";
	setAttribute( div3, 'role', "tabpanel" );
	setAttribute( div3, 'aria-labelledby', "controlPanelHeading" );
	
	appendNode( div3, div1 );
	
	var div4 = createElement( 'div' );
	div4.className = "panel-body";
	
	appendNode( div4, div3 );
	
	var form = createElement( 'form' );
	form.className = "form-horizontal";
	
	appendNode( form, div4 );
	appendNode( createText( "\r\n                    " ), form );
	
	var div5 = createElement( 'div' );
	div5.className = "form-group";
	
	appendNode( div5, form );
	
	var label = createElement( 'label' );
	label.htmlFor = "rowInput";
	label.className = "col-sm-2 control-label";
	
	appendNode( label, div5 );
	appendNode( createText( "Rows" ), label );
	appendNode( createText( "\r\n                        " ), div5 );
	
	var div6 = createElement( 'div' );
	div6.className = "col-sm-10";
	
	appendNode( div6, div5 );
	
	var input = createElement( 'input' );
	input.type = "number";
	input.className = "form-control";
	input.id = "rowInput";
	
	var input_updating = false;
	
	function inputChangeHandler () {
		input_updating = true;
		component.set({ numRows: input.value });
		input_updating = false;
	}
	
	addEventListener( input, 'change', inputChangeHandler );
	input.value = root.numRows;
	
	input.min = "1";
	
	appendNode( input, div6 );
	appendNode( createText( "\r\n\r\n                    " ), form );
	appendNode( createText( "\r\n                    " ), form );
	
	var div7 = createElement( 'div' );
	div7.className = "form-group";
	
	appendNode( div7, form );
	
	var label1 = createElement( 'label' );
	label1.htmlFor = "colInput";
	label1.className = "col-sm-2 control-label";
	
	appendNode( label1, div7 );
	appendNode( createText( "Columns" ), label1 );
	appendNode( createText( "\r\n                        " ), div7 );
	
	var div8 = createElement( 'div' );
	div8.className = "col-sm-10";
	
	appendNode( div8, div7 );
	
	var input1 = createElement( 'input' );
	input1.type = "number";
	input1.className = "form-control";
	input1.id = "colInput";
	
	var input1_updating = false;
	
	function input1ChangeHandler () {
		input1_updating = true;
		component.set({ numColumns: input1.value });
		input1_updating = false;
	}
	
	addEventListener( input1, 'change', input1ChangeHandler );
	input1.value = root.numColumns;
	
	input1.min = "1";
	
	appendNode( input1, div8 );
	appendNode( createText( "\r\n\r\n                    " ), form );
	appendNode( createText( "\r\n                    " ), form );
	
	var div9 = createElement( 'div' );
	div9.className = "form-group";
	
	appendNode( div9, form );
	
	var div10 = createElement( 'div' );
	div10.className = "col-sm-offset-2 col-sm-10";
	
	appendNode( div10, div9 );
	
	var button = createElement( 'button' );
	button.type = "button";
	button.className = "btn btn-primary";
	
	function clickHandler ( event ) {
		var root = this.__svelte.root;
		
		component.set({ generatedLocationRows: template.helpers.generateLocationNames(root.numRows, root.numColumns)});
	}
	
	addEventListener( button, 'click', clickHandler );
	
	button.__svelte = {
		root: root
	};
	
	appendNode( button, div10 );
	appendNode( createText( "Update" ), button );
	var text16 = createText( "\r\n\r\n" );
	
	var table = createElement( 'table' );
	table.className = "table table-striped table-hover";
	
	var tbody = createElement( 'tbody' );
	
	appendNode( tbody, table );
	var eachBlock_anchor = createComment();
	appendNode( eachBlock_anchor, tbody );
	var eachBlock_value = root.generatedLocationRows;
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}
	
	var text17 = createText( "\r\n\r\n\r\n" );

	return {
		mount: function ( target, anchor ) {
			insertNode( text, target, anchor );
			insertNode( h2, target, anchor );
			insertNode( text2, target, anchor );
			insertNode( div, target, anchor );
			insertNode( text16, target, anchor );
			insertNode( table, target, anchor );
			insertNode( text17, target, anchor );
		},
		
		update: function ( changed, root ) {
			if ( !input_updating ) input.value = root.numRows;
			
			if ( !input1_updating ) input1.value = root.numColumns;
			
			button.__svelte.root = root;
			
			var eachBlock_value = root.generatedLocationRows;
			
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
			removeEventListener( input, 'change', inputChangeHandler );
			removeEventListener( input1, 'change', input1ChangeHandler );
			removeEventListener( button, 'click', clickHandler );
			
			teardownEach( eachBlock_iterations, false );
			
			if ( detach ) {
				detachNode( text );
				detachNode( h2 );
				detachNode( text2 );
				detachNode( div );
				detachNode( text16 );
				detachNode( table );
				detachNode( text17 );
			}
		}
	};
}

function renderEachBlock ( root, eachBlock_value, row, row__index, component ) {
	var tr = createElement( 'tr' );
	tr.className = "text-center";
	
	var eachBlock1_anchor = createComment();
	appendNode( eachBlock1_anchor, tr );
	var eachBlock1_value = row;
	var eachBlock1_iterations = [];
	
	for ( var i = 0; i < eachBlock1_value.length; i += 1 ) {
		eachBlock1_iterations[i] = renderEachBlock1( root, eachBlock_value, row, row__index, eachBlock1_value, eachBlock1_value[i], i, component );
		eachBlock1_iterations[i].mount( eachBlock1_anchor.parentNode, eachBlock1_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( tr, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, row, row__index ) {
			var eachBlock1_value = row;
			
			for ( var i = 0; i < eachBlock1_value.length; i += 1 ) {
				if ( !eachBlock1_iterations[i] ) {
					eachBlock1_iterations[i] = renderEachBlock1( root, eachBlock_value, row, row__index, eachBlock1_value, eachBlock1_value[i], i, component );
					eachBlock1_iterations[i].mount( eachBlock1_anchor.parentNode, eachBlock1_anchor );
				} else {
					eachBlock1_iterations[i].update( changed, root, eachBlock_value, row, row__index, eachBlock1_value, eachBlock1_value[i], i );
				}
			}
			
			teardownEach( eachBlock1_iterations, true, eachBlock1_value.length );
			
			eachBlock1_iterations.length = eachBlock1_value.length;
		},
		
		teardown: function ( detach ) {
			teardownEach( eachBlock1_iterations, false );
			
			if ( detach ) {
				detachNode( tr );
			}
		}
	};
}

function renderEachBlock1 ( root, eachBlock_value, row, row__index, eachBlock1_value, generatedLocation, generatedLocation__index, component ) {
	var td = createElement( 'td' );
	
	var text = createText( generatedLocation );
	appendNode( text, td );

	return {
		mount: function ( target, anchor ) {
			insertNode( td, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, row, row__index, eachBlock1_value, generatedLocation, generatedLocation__index ) {
			text.data = generatedLocation;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( td );
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
	
	if ( options._root ) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call( this );
	}
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

function insertNode( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode( node ) {
	node.parentNode.removeChild( node );
}

function createText( data ) {
	return document.createTextNode( data );
}

function createElement( name ) {
	return document.createElement( name );
}

function appendNode( node, target ) {
	target.appendChild( node );
}

function setAttribute( node, attribute, value ) {
	node.setAttribute ( attribute, value );
}

function addEventListener( node, event, handler ) {
	node.addEventListener ( event, handler, false );
}

function removeEventListener( node, event, handler ) {
	node.removeEventListener ( event, handler, false );
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