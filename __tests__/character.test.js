import { Character } from './../src/character.js';

describe('Character', () => {
  test('should correctly create a character object', () => {
    const hero = new Character("Hiro");
    expect(hero.name).toEqual("Hiro");
    expect(hero.atk).toEqual(0);
    expect(hero.def).toEqual(0);
    expect(hero.spd).toEqual(0);
  });
});