import API from "logic/api";

export const getDragonList = async () => await API().get('/dragon');

export const getDragonDetail = async (id) => await API().get(`/dragon/${id}`);

export const createDragon = async ({ name, type, histories }) => {
  return await API().post('/dragon', {
    name, type, histories
  });
};

export const updateDragon = async ({ id, name, type, histories }) => {
  return await API().put(`/dragon/${id}`, {
    name, type, histories
  });
};
