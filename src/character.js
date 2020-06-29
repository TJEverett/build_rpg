export class Character {
  constructor(name) {
    this.name = name;
    this.hpMax = 0;
    this.hpCurrent = 0;
    this.atk = 0;
    this.def = 0;
    this.spd = 0;
    this.xp = 0;
    this.lvl = 1;
  }

  create(specialty) {
    this.hpMax = 0;
    this.atk = 0;
    this.def = 0;
    this.spd = 0;
    if (specialty === "attack"){
      this.atk += 1;
    } else if (specialty === "defense"){
      this.def += 1;
    }
    this.atk += (Math.ceil(Math.random() * 3) + 2);
    this.def += Math.ceil(Math.random() * 3);
    this.spd += (Math.ceil(Math.random() * 20) / 10 + 1);
    this.hpMax += (Math.ceil(Math.random() * 21) + 89);
  }

  levelUp() {
    this.lvl += 1;
    this.atk += Math.floor(this.lvl / 2);
    this.def += Math.floor(this.lvl / 2);
    this.hpMax += (this.lvl * 5);
  }

  gainXp(enemyLevel) {
    this.xp += (10 * enemyLevel / this.lvl);
    if(this.xp >= 100){
      this.levelUp();
      this.xp = this.xp - 100;
    }
  }
}