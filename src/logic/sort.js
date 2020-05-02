export const sort = (dragons) => {
  let localDragons = dragons.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return localDragons;
};
