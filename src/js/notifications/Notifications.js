L.Dropchop = L.Dropchop || {};
L.Dropchop.Notifications = L.Class.extend({

    statics: {},

    // defaults
    options: {},

    initialize: function (fileReader, options) {

        // override defaults with passed options
        L.setOptions(this, options);

        // create DOM element
        this.domElement = this._buildDomElement();

        // create notification center & locations
        this.hub = document.getElementById('notifications');

    } ,

    // used to add a notification to the DOM
    add: function ( options ) {

        // TODO: clean this up?
        params = {};
        params.text = options.text || 'THIS NOTIFICATION REQUIRES TEXT';
        params.time = options.time || 4000;
        params.type = options.type || 'default';

        // add a new notification to the stream
        var note = document.createElement('div');
        note.className = 'notification ' + options.type;
        note.innerHTML = options.text;
        this.hub.appendChild(note);

        // redefine for setTimeout() scope
        var _this = this;
        
        // TODO: add/remove notifications to an array to interact with them
        // instead of relying on setTimeout() dictating their existence.
        setTimeout(function () {
            _this.hub.removeChild( _this.hub.firstChild );
        }, params.time);

    },

    _buildDomElement: function() {
        var el = document.createElement('div');
        el.id = 'notifications';
        document.body.appendChild(el);
        return el;
    }

});
