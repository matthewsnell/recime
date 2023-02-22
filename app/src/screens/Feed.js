import React from "react";
import { Text, View, ScrollView } from "react-native";
import tw from 'twrnc';

export default function Feed() {
  const recipes = require('../test-data/maximise-ingredients-recipes.json');


  return (
    <ScrollView>
      {recipes.map(recipe =>
        <View key={recipe.id}>
          <Text>{recipe.title}</Text>
        </View>
      )
      }
    </ScrollView>
  );
}
