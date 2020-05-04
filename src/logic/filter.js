export const filterByName = (dragons, name) => {
  const filter = name.replace(/[^\w\s]/, '')
  const reg = new RegExp(filter, 'i');
  return dragons.filter((dragon) => reg.test(dragon.name));
};
