/* JSTypes is the constructor to append all prototype methods to and can be invoked using the new keyword
 * * * */

function JSTypes(){}

/* validType this replaces the setter method of the object and makes sure it is valid before returning it.
 *    @if   valid type then return the type
 *    #else console.error return the original type
 * * * */

JSTypes.prototype.validType = function(val, original, type){
  if(typeof(val) === type)
    return val;
  console.error('must be passed a type of ' + type + ' instead was passed: ' + typeof(val));
  return original;
};

/* plainGet will just return the value of the property.  This can be replaced by any sort of
 *          validation function before returning the value
 * * * */

JSTypes.prototype.plainGet = function(val, original, type){
  return val;
};

/* Currently only five supported types. Number, String, Object, Booleal, and Undefined
 *
 * * * */

JSTypes.prototype.num = function(obj, name){
  JSTypes.prototype.setProp(obj, name, JSTypes.prototype.validType, JSTypes.prototype.plainGet, 'number');
};

JSTypes.prototype.str = function(obj, name){
  JSTypes.prototype.setProp(obj, name, JSTypes.prototype.validType, JSTypes.prototype.plainGet, 'string');
};

JSTypes.prototype.obj = function(obj, name){
  JSTypes.prototype.setProp(obj, name, JSTypes.prototype.validType, JSTypes.prototype.plainGet, 'object');
};

JSTypes.prototype.bool = function(obj, name){
  JSTypes.prototype.setProp(obj, name, JSTypes.prototype.validType, JSTypes.prototype.plainGet, 'boolean');
};

JSTypes.prototype.und = function(obj, name){
  JSTypes.prototype.setProp(obj, name, JSTypes.prototype.validType, JSTypes.prototype.plainGet, function(){}());
};

/* setProp will append a property name to a passed object and call get and set callbacks
 *         when a value is requested or assigned to it
 *
 *         The object will never publicly have this value as it is hidden in the closure
 *         of the invoking function. As long as the property remains on the object this private
 *         value will be available to the program.
 * * * */

JSTypes.prototype.setProp = function(obj, name, set, get, type){

/* @propVal - Private placeholder for the actual value of the property */
  var propType = type;
  var propVal;

/* Object.defineProperty applies the property name to the object passed with options passed
 *   see MDN docs.
 * * */

  Object.defineProperty(obj, name, {

    __proto__: null,
    configurable: true,
    enumerable: true,
    writeable: true,

    /* By returning the value of their get function you can allow them
     * to validate the request to get the private variable
     * * * */

    get: function(){
      return get(propVal, propVal, type);
    },

    /* Set runs the callback functions passed
     *
     * * * */

    set: function(value){
      propVal = set(value, propVal, type);
    }
  });

};
