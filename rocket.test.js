
const Rocket = require('./rocket', 'liftOff');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // ...
      let newRocket = new Rocket();
      expect(newRocket).toBeInstanceOf(Rocket);
      expect(typeof newRocket.name).toBe('string');
      expect(typeof newRocket.colour).toBe('string');

    });

    test("it should set the rocket's name if provided", () => {
      // ...
      let newRocketTwo = new Rocket({name:"Ultimate Rocket"});
      let result = newRocketTwo.name;
      expect(result).toBe('Ultimate Rocket');
    });
  });

  describe('test liftoff to make sure a flying rocket cant take off', () => {
    // ...
    let eltonJohn = new Rocket();
    eltonJohn.flying = true;
    console.log(eltonJohn)
    let result = eltonJohn.liftOff();
    expect(result).toBeFalsy();


  });

  

  // ...

});
