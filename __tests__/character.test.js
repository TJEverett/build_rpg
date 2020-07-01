import { Character } from './../src/character.js';
import { Battle } from './../src/battle.js';

describe('Character Creation', () => {
  test('should correctly create a character object', () => {
    const hero = new Character("Hiro");
    expect(hero.name).toEqual("Hiro");
    expect(hero.atk).toEqual(0);
    expect(hero.def).toEqual(0);
    expect(hero.spd).toEqual(0);
  });

  test('should create 2 heros with different stats', () => {
    let hero1 = new Character("hero1");
    hero1.create("attack");
    let hero2 = new Character("hero2");
    hero2.create("defense");
    expect(hero1.atk).toBeGreaterThanOrEqual(4);
    expect(hero1.atk).toBeLessThanOrEqual(6);
    expect(hero1.def).toBeGreaterThanOrEqual(1);
    expect(hero1.def).toBeLessThanOrEqual(3);
    expect(hero1.spd).toBeGreaterThanOrEqual(1);
    expect(hero1.spd).toBeLessThanOrEqual(3);

    expect(hero2.atk).toBeGreaterThanOrEqual(3);
    expect(hero2.atk).toBeLessThanOrEqual(5);
    expect(hero2.def).toBeGreaterThanOrEqual(2);
    expect(hero2.def).toBeLessThanOrEqual(4);
    expect(hero2.spd).toBeGreaterThanOrEqual(1);
    expect(hero2.spd).toBeLessThanOrEqual(3);
  });
});

describe('Leveling Mechanics', () => {
  test('should correctly create a character object with new stats', () => {
    const hero = new Character("Hiro");
    expect(hero.xp).toEqual(0);
    expect(hero.lvl).toEqual(1);
  });

  test('should level up the character and increase their atk, def, and lvl properties', () => {
    let hero = new Character("Hiro");
    hero.levelUp();
    expect(hero.lvl).toEqual(2);
    expect(hero.atk).toEqual(1);
    expect(hero.def).toEqual(1);
  });

  test('should add to the xp value of the character based on inputted enemy level', () => {
    let hero1 = new Character("hero1");
    hero1.gainXp(1);
    let hero2 = new Character("hero2");
    hero2.gainXp(2)
    let hero3 = new Character("hero3");
    hero3.lvl = 2;
    hero3.gainXp(1);
    let hero4 = new Character("hero4");
    hero4.lvl = 2;
    hero4.gainXp(2);
    expect(hero1.xp).toEqual(10);
    expect(hero2.xp).toEqual(20);
    expect(hero3.xp).toEqual(5);
    expect(hero4.xp).toEqual(10);
  });

  test('should level up the character when their xp variable is equal to or greater than 100', () => {
    let hero1 = new Character("hero1");
    hero1.xp = 90;
    hero1.gainXp(1);
    let hero2 = new Character("hero2");
    hero2.xp = 95;
    hero2.gainXp(1);
    expect(hero1.lvl).toEqual(2);
    expect(hero1.xp).toEqual(0);
    expect(hero2.lvl).toEqual(2);
    expect(hero2.xp).toEqual(5);
  });
});

describe('Battle Mechanics', () => {
  test('should correctly create a character object with new stats', () => {
    const hero = new Character("Hiro");
    expect(hero.hpMax).toEqual(0);
    expect(hero.hpCurrent).toEqual(0);
  });

  test('check that new stats are randomized correctly', () => {
    let hero1 = new Character("hero1");
    hero1.create("attack");
    let hero2 = new Character("hero2");
    hero2.create("defense");
    expect(hero1.hpMax).toBeGreaterThanOrEqual(90);
    expect(hero1.hpMax).toBeLessThanOrEqual(110);

    expect(hero2.hpMax).toBeGreaterThanOrEqual(90);
    expect(hero2.hpMax).toBeLessThanOrEqual(110);
  });

  test('should increase hpMax when levelUp prototype is used', () => {
    let hero = new Character("Hiro");
    hero.levelUp();
    expect(hero.hpMax).toEqual(10);
  });

  test("should increase hpCurrent up to hpMax without going over", () => {
    let hero1 = new Character("hero1");
    hero1.hpMax = 100;
    hero1.heal(50);
    let hero2 = new Character("hero2");
    hero2.hpMax = 100;
    hero2.heal(150);
    expect(hero1.hpCurrent).toEqual(50);
    expect(hero2.hpCurrent).toEqual(100);
  });

  test('should decrease hpMax atk and def when used', () => {
    let hero = new Character("Hiro");
    hero.atk = 5;
    hero.def = 5;
    hero.hpMax = 100;
    hero.weaken();
    expect(hero.atk).toEqual(4);
    expect(hero.def).toEqual(4);
    expect(hero.hpMax).toEqual(95)
  });

  test('should create a battle object by taking input of 2 character objects', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 100;
    let enemy = new Character("enemy");
    enemy.hpMax = 93;
    let fight = new Battle(hero, enemy);
    expect(fight.player).toEqual(hero);
    expect(fight.computer).toEqual(enemy);
    expect(fight.player.hpCurrent).toEqual(100);
    expect(fight.computer.hpCurrent).toEqual(93);
  });

  test('should make the computer lose hpCurrent based on the players atk', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 100;
    hero.atk = 5;
    hero.def = 2;
    let enemy = new Character("enemy");
    enemy.hpMax = 100;
    enemy.atk = 5;
    enemy.def = 1;
    let fight = new Battle(hero, enemy);
    fight.damage("attack");
    expect(fight.player.hpCurrent).toEqual(100);
    expect(fight.computer.hpCurrent).toEqual(91);
  });

  test('should make the player lose hpCurrent based on the computers atk', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 100;
    hero.atk = 5;
    hero.def = 2;
    let enemy = new Character("enemy");
    enemy.hpMax = 100;
    enemy.atk = 5;
    enemy.def = 1;
    let fight = new Battle(hero, enemy);
    fight.damage("defend");
    expect(fight.player.hpCurrent).toEqual(92);
    expect(fight.computer.hpCurrent).toEqual(100);
  });

  test('should correctly go through a turn and damage both characters', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 100;
    hero.atk = 5;
    hero.def = 2;
    hero.spd = 2.5;
    let enemy = new Character("enemy");
    enemy.hpMax = 100;
    enemy.atk = 5;
    enemy.def = 2;
    enemy.spd = 2.5;
    let fight = new Battle(hero, enemy);
    let answer = fight.turn();
    expect(fight.player.hpCurrent).toEqual(92);
    expect(fight.computer.hpCurrent).toEqual(92);
    expect(answer).toEqual("turn complete");
  });

  test('should fail to start turn', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 0;
    hero.atk = 5;
    hero.def = 2;
    hero.spd = 2.5;
    let enemy = new Character("enemy");
    enemy.hpMax = 0;
    enemy.atk = 5;
    enemy.def = 2;
    enemy.spd = 2.5;
    let fight = new Battle(hero, enemy);
    let answer = fight.turn();
    expect(fight.player.hpCurrent).toEqual(0);
    expect(fight.computer.hpCurrent).toEqual(0);
    expect(answer).toEqual("a character is already dead");
  });

  test('should kill computer but not damage player', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 100;
    hero.atk = 5;
    hero.def = 2;
    hero.spd = 3;
    let enemy = new Character("enemy");
    enemy.hpMax = 8;
    enemy.atk = 5;
    enemy.def = 2;
    enemy.spd = 2.5;
    let fight = new Battle(hero, enemy);
    let answer = fight.turn();
    expect(fight.player.hpCurrent).toEqual(100);
    expect(fight.computer.hpCurrent).toEqual(0);
    expect(answer).toEqual("you win");
  });

  test('should kill player but not damage computer', () => {
    let hero = new Character("Hiro");
    hero.hpMax = 8;
    hero.atk = 5;
    hero.def = 2;
    hero.spd = 2.5;
    let enemy = new Character("enemy");
    enemy.hpMax = 100;
    enemy.atk = 5;
    enemy.def = 2;
    enemy.spd = 3;
    let fight = new Battle(hero, enemy);
    let answer = fight.turn();
    expect(fight.player.hpCurrent).toEqual(0);
    expect(fight.computer.hpCurrent).toEqual(100);
    expect(answer).toEqual("you lose");
  });
});