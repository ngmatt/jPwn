/**
 * imgtag.js
 * 
 * Image Tagger
 * Creates an interface to generate "facebook-like" tags to images.
 * When active, the user click will apply a bordered tag centered around the click.
 * When inactive, the existing tags will be highlighted when rolled over.
 * 
 * @author ngmatt
 */
function imgtag() {
    this.init.apply(this, arguments);
};

imgtag.prototype = {
    /**
     * Initialize image tagger
     */
    init: function (config) {
        this.image = null;
    },
    /**
     *  
     */          
    setimg: function (id) {
        var image = document.getElementById(id);
        if (image) {
            this.image = image;
        }
    },
    /**
     * 
     */
    addtag: function () {
        
    },
    /**
     * 
     */
    _addlink: function () {
        
    },
    /**
     * 
     */
    _addcssborder: function () {
      
    }
};