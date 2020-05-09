import { format } from './date';

describe('[Logic] date > format', () => {
  it('Should returns 08/05/2020', () => {
    expect(format('2020-05-08T03:27:51.342Z')).toEqual('08/05/2020');
  });

  it('Should returns 07/05/2015', () => {
    expect(format('2015-05-07T03:27:51.342Z')).toEqual('07/05/2015');
  });

  it('Should returns 20/03/2017', () => {
    expect(format('2017-03-20T03:27:51.342Z')).toEqual('20/03/2017');
  });
});
