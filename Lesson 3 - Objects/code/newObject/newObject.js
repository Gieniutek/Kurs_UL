(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var arr = new Array();
        for(var i=1; i<arguments.length;i++)
        {
            arr.push(arguments[i]);
            
        }
            var obj = Object.create(constructor.prototype);
            if(constructor.apply(obj,arr)!=null)
            obj = constructor.apply(obj,arr);
            return obj;        
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


