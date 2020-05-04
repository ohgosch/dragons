import API from "logic/api";

export const getDragonList = async () => await API().get('/dragon');

export const getDragonDetail = async (id) => await API().get(`/dragon/${id}`);

export const createDragon = async ({ name, type, history }) => {
  return await API().post('/dragon', {
    name, type, history
  });
};

export const updateDragon = async ({ id, name, type, history }) => {
  return await API().put(`/dragon/${id}`, {
    name, type, history
  });
};

export const deleteDragon = async (id) => await API().delete(`/dragon/${id}`);
