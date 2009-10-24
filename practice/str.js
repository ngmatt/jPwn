/**
 * Practice problems to test JavaScript string algorithm knowledge
 * 
 * @author ngmatt
 */
(function () {
    var
        $ = document.getElementByid,
        createEl = document.createElement,
        createTxt = document.createTextNode;

    var Str = window.Str = function (id, options) {
        this.id = id;
        this.options = options;
        this.strs = Array.prototype.splice.call(arguments, 2);
    };
   
    Str.prototype = {
        /**
         * 
         * @param {String} id DOM Id for element to printHtml in
         */
        printHtml: function () {
            var div = createEl("div");
            for (var i = 0; i < this.strs.length; i++) {
                div.appendChild(createEl("span").appendChild(createTxt(this.strs[i])));
            };
            $(id).appendChild(div);
        },
        /**
         * 
         */
        reverse: function () {

        }
    };

})();
