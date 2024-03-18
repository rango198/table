import axios from 'axios';
import { toast } from 'react-hot-toast';

const baseURL = 'https://65c123aedc74300bce8d6244.mockapi.io/api/khai';

export const getAll = async () => {
  try {
    const result = await axios.get(baseURL);

    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const addItem = async data => {
  try {
    const result = await axios.post(baseURL, data);
    toast.success('Well Done :)', {
      duration: 3000,
    });
    return result.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    return null;
  }
};

export const delItem = async id => {
  try {
    const result = await axios.delete(`${baseURL}/${id}`);
    return result;
  } catch (error) {
    console.error('Error deleting data:', error);
    return null;
  }
};

export const editItem = async (data, id) => {
  try {
    const result = await axios.put(`${baseURL}/${id}`, {
      universityName: data.universityName,
      shortName: data.shortName,
      sitelink: data.sitelink,
      programsList: data.programsList,
      garant: data.garant,
    });
    return result.data;
  } catch (error) {
    console.error('Error editing contact:', error);
    return null;
  }
};
