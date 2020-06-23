import { Character } from './../src/character.js';

describe('Character', () => {
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