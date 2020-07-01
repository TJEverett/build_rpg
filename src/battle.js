export class Battle {
  constructor(hero, enemy){
    this.player = hero;
    this.computer = enemy;
    this.player.heal(this.player.hpMax);
    this.computer.heal(this.computer.hpMax);
  }

  damage(mode){
    // mode should be "attack" or "defend" as the player would see it
    if(mode === "attack"){
      this.computer.hpCurrent -= ((this.player.atk * 2) - this.computer.def);
    } else if (mode === "defend"){
      this.player.hpCurrent -= ((this.computer.atk * 2) - this.player.def);
    }
  }

  turn(){
    if(this.player.hpCurrent > 0 && this.computer.hpCurrent > 0){
      if(this.player.spd > this.computer.spd){
        this.damage("attack");
        if(this.computer.hpCurrent > 0){
          this.damage("defend");
        }
      }else if (this.computer.spd > this.player.spd){
        this.damage("defend");
        if(this.player.hpCurrent > 0){
          this.damage("attack");
        }
      }else{
        this.damage("attack");
        this.damage("defend");
      }
      if(this.player.hpCurrent <= 0){
        return "you lose";
      }else if (this.computer.hpCurrent <= 0){
        return "you win";
      }else{
        return "turn complete";
      }
    }else{
      return "a character is already dead";
    }
  }
}