import find from '../src/find';
describe('find', () => {
  it('find-where-orderBy', () => {
    const data = [
      { userId: 8, title: 'title1' },
      { userId: 11, title: 'other' },
      { userId: 15, title: null },
      { userId: 19, title: 'title2' },
    ];
    const ret = [
      { userId: 19, title: 'title2' },
      { userId: 8, title: 'title1' },
    ];
    expect(
      find(data)
        .where({
          title: /\d$/,
        })
        .orderBy('userId', 'desc')
    ).toEqual(ret);
  });
});
