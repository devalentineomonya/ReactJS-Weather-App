import axios from 'axios';

const GetLocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { ip, city, country_name, continent_code } = response.data;
    return { ip, city, countryName: country_name, continentCode:continent_code };
  } catch (error) {
    console.error('Error from GetLocation => Error fetching IP address:', error);
    throw error; 
  }
};

export default GetLocation;
