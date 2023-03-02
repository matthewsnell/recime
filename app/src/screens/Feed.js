import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import tw from "twrnc";

export default function Feed({ navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);

  // const backupRecipes = require("../test-data/maximise-ingredients-recipes.json");

  // Ingredients list separated by ,+


  const [loading, setLoaing] = useState(true)
  const [recipes, setRecipes] = useState([])

  // 172.20.10.2
  const pantryCallURL = `http://172.20.10.2:3000/api/pantry`

  useEffect(() => {
    fetch(pantryCallURL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(pantryData => {

        // My API key
        const apiKey = "7b6470073c6246c1be8039c48fe00dd4"
        const ingredients = pantryData.map(pantryItem => pantryItem.name)
        const spoonacularAPICall = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=10&ranking=2`
      
        // make API call
        fetch(spoonacularAPICall)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then(recipes => {

            setRecipes(recipes)
            setLoaing(false)

          })
          .catch(error => console.error('Error:', error));

      })
      .catch(error => console.error('Error:', error));
  })

  return (
    <View>
      <Pressable
        style={tw`w-full h-12 bg-neutral-300 justify-center items-center`}
        onPress={() => setFilterVisible(!filterVisible)}
      >
        <Text style={tw`text-lg`}>Filter Dropdown Menu</Text>
      </Pressable>
      {filterVisible && (
        <View
          visible={filterVisible}
          style={tw`w-full h-60 bg-neutral-300 justify-center items-center`}
        >
          <Text>MENU CONTENT HERE</Text>
        </View>
      )}
      <ScrollView>

        <Text>{pantry}</Text>

        {!loading ?? <Text>Loading...</Text>}

        {recipes.map((recipe) => (
          <View key={recipe.id} style={tw`relative p-4`}>
            <View style={tw`w-full h-45 bg-black rounded-3xl`}>
              <Image
                style={tw`rounded-3xl w-full h-full opacity-65`}
                source={{
                  uri: recipe.image,
                }}
              />
              <View style={tw`absolute items-center top-2 w-full h-full`}>
                <Text style={tw`text-white`}>{recipe.title}</Text>
              </View>
              <View
                style={tw`absolute items-end justify-end right-4 w-full h-full`}
              >
                <Text style={tw`text-white`}>30 mins</Text>
              </View>
              <View
                style={tw`absolute items-center justify-end bottom-2 w-full h-full`}
              >
                <Text style={tw`text-white`}>488 calories</Text>
              </View>
              <View
                style={tw`absolute items-start justify-end left-4 w-full h-full`}
              >
                <Text style={tw`text-white`}>0.4kg</Text>
              </View>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}
