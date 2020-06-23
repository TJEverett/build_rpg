export class Character {
  constructor(name) {
    this.name = name;
    this.atk = 0;
    this.def = 0;
    this.spd = 0;
  }

  create(specialty) {
    if (specialty === "attack"){
      this.atk += 1;
    } else if (specialty === "defense"){
      this.def += 1;
    }
    this.atk += (2 + Math.ceil(Math.random() * 3));
    this.def += Math.ceil(Math.random() * 3);
    this.spd += (Math.ceil(Math.random() * 30) / 10);
  }
}