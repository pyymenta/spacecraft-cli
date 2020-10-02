import SpaceCraft from '../src/spacecraft';

describe('Spacecraft', () => {
  const spaceCraft = new SpaceCraft();

  it('displays starter point message', () => {
    expect(spaceCraft.createMessage()).toEqual('Starter point Spacecraft CLI');
  });
});
