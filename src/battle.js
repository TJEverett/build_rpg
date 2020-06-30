export class Battle {
  constructor(hero, enemy){
    this.player = hero;
    this.computer = enemy;
    this.player.heal(this.player.hpMax);
    this.computer.heal(this.player.hpMax);
  }
}