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
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

const newViking = new Viking(100, 100, "Taron");

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        }
        else {
            return `A Saxon has died in act of combat`
        }

    }
}

// War
class War { }
