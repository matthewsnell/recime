// import this file to use these comstants across the application

// Node Express backend constants

  // change this (IPV4 address from ipconfig in command line)
const IP_ADDRESS = '172.20.10.2';
const LOCAL_HOST_PORT = '3000';
export const BACKEND_API_URL = 'http://' + IP_ADDRESS +':' + LOCAL_HOST_PORT + '/api/';

// Spoonacular API constants

export const API_KEY = '7b6470073c6246c1be8039c48fe00dd4';

export function getSpoonacularAPICall(ingredients) {
    return `https://api.spoonacular.com/recipes/findByIngredients?apiKey=`+API_KEY+`&ingredients=`+ingredients+`&number=10&ranking=2`;
}