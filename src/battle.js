export class Battle {
  constructor(hero, enemy){
    this.player = hero;
    this.computer = enemy;
    this.player.heal(this.player.hpMax);
    this.computer.heal(this.player.hpMax);
  }

  damage(mode){
    // mode should be "attack" or "defend" as the player would see it
    if(mode === "attack"){
      this.computer.hpCurrent -= ((this.player.atk * 2) - this.computer.def);
    }
  }
}