import { Character } from './../src/character.js';

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