class Enemy {
	constructor(life, name, level) {
		this.life = life;
		this.name = name;
		this.level = level;
	}

	getInfo() {
		console.log(this.life, this.name, this.level);
	}
}

const turtle = new Enemy(25, "Tletur", 10);

turtle.getInfo(); // 25 Tletur 10

class Bug extends Enemy {
	constructor(life, name, level, legs, damage) {
		super(life, name, level);
		this.legs = legs;
		this.damage = damage;
	}
}

const john = new Bug(10, "Buggy", 1, 6, 10);

console.log(john);
// Bug { life: 10, name: 'Buggy', level: 1, legs: 6, damage: 10 }
