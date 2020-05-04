export const filterByName = (dragons, name) => {
  const filter = name.replace(/[^0-9a-zA-Z\s]+/, '')
  const reg = new RegExp(filter, 'i');
  return dragons.filter((dragon) => reg.test(dragon.name));
};
