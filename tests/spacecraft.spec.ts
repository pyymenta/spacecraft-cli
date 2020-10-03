import SpaceCraft from '../src/spacecraft';

describe('Spacecraft', () => {
  const spaceCraft = new SpaceCraft(0, 0);

  it('displays starter point message', () => {
    expect(spaceCraft.createMessage()).toEqual('Starter point Spacecraft CLI');
  });
  it('moves forward', () => {
    expect(spaceCraft.forward(spaceCraft.y)).toEqual(1);
  });
  it('moves left', () => {
    expect(spaceCraft.left(spaceCraft.x)).toEqual(-1);
  });
  it('moves right', () => {
    expect(spaceCraft.right(spaceCraft.x)).toEqual(1);
  });
  it('moves back', () => {
    expect(spaceCraft.back(spaceCraft.y)).toEqual(-1);
  });
});
