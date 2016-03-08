(function (global) {
	var Cat = {
    type:"Cat",
    eat: function (animal) {
        if( 
            ((animal.type =="Bird") && (this.type =="Cat")) || 
            ((animal.type == "Worm") && (this.type =="Bird")) 
        )
        return "Mniam!";
        else 
        return "Blee!";
    }
  
       
}, Bird, Worm;

	if (!global.UAM) {
		global.UAM = {};
	}

    Bird = Object.create(Cat);
    Bird.type = "Bird";
    Worm = Object.create(Bird);
    Worm.type = "Worm";
    
	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;
    

}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/


