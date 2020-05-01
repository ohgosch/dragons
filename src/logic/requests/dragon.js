import API from "logic/api";

export const getDragonList = async () => await API().get('/dragon');
