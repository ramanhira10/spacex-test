import axios from 'axios';

const limit = 10;
export const apiUrl = `https://api.spaceXdata.com/v3/launches`;

export const getSpaceXPrograms = async () => {
  const result = await axios.get(`${apiUrl}?limit=${limit}`).then(({data}) => data);
  return result;
};

export const getFilteredSpaceXPrograms = async (filterYear, filterLaunchedSuccessfully) => {
  
  let url = `${apiUrl}?limit=${limit}`;

  if (filterLaunchedSuccessfully) {
    url = `${url}&launch_success=${filterLaunchedSuccessfully}`;
  }

  if (filterYear) {
    url = `${url}&launch_year=${filterYear}`;
  }

  const result = await axios.get(url).then(({data}) => data);
  return result;
}