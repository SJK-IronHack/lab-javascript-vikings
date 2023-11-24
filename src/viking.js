// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

const newSoldier = new Soldier(50, 100);
console.log(newSoldier.attack());


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        // super (health, strength, name)
    }
    attack() {
        return this.strength
    }
}

// Saxon
class Saxon { }

// War
class War { }
