import { sort } from './sort';

describe('[Logic] sort', () => {
  const dragons = [
    { name: 'Z' },
    { name: 'B' },
    { name: 'A' },
    { name: 'C' },
    { name: 'A' },
  ];

  it('Should sort correctly', () => {
    const sorted = sort(dragons, 'asc');

    expect(sorted[0].name).toEqual('A');
    expect(sorted[1].name).toEqual('A');
    expect(sorted[2].name).toEqual('B');
    expect(sorted[3].name).toEqual('C');
    expect(sorted[4].name).toEqual('Z');
  });
});
