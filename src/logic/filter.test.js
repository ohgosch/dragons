import { filterByName } from './filter';

describe('[Logic] filter', () => {
  const dragons = [
    { name: 'Z' },
    { name: 'B' },
    { name: 'A' },
    { name: 'C' },
    { name: 'A' },
  ];

  describe('filterByName', () => {
    it(`Should filter correctly by 'A'`, () => {
      const filtered = filterByName(dragons, 'A');
  
      expect(filtered[0].name).toEqual('A');
      expect(filtered[1].name).toEqual('A');
      expect(filtered[3]).toEqual(undefined);
    });

    it(`Should filter correctly by 'B'`, () => {
      const filtered = filterByName(dragons, 'B');
  
      expect(filtered[0].name).toEqual('B');
      expect(filtered[1]).toEqual(undefined);
    });

    it(`Should filter correctly by 'S'`, () => {
      const filtered = filterByName(dragons, 'S');
  
      expect(filtered[0]).toEqual(undefined);
    });
  });
  
});
