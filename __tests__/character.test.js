import { Character } from './../src/character.js';

describe('Character Creation', () => {
  test('should correctly create a character object', () => {
    const hero = new Character("Hiro");
    expect(hero.name).toEqual("Hiro");
    expect(hero.atk).toEqual(0);
    expect(hero.def).toEqual(0);
    expect(hero.spd).toEqual(0);
  });

  test('should create 4 heros with different stats', () => {
    let hero1 = new Character("hero1");
    hero1.create("attack");
    let hero2 = new Character("hero2");
    hero2.create("attack");
    let hero3 = new Character("hero3");
    hero3.create("defense");
    let hero4 = new Character("hero4");
    hero4.create("defense");
    console.log(hero1);
    console.log(hero2);
    console.log(hero3);
    console.log(hero4);
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
});