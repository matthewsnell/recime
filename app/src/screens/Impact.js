import React from "react";
import { Button, SafeAreaView, Text, Dimensions, View, Pressable } from "react-native";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } 
from "react-native-chart-kit";
import tw from 'twrnc';

export default function Impact() {
  const windowWidth = Dimensions.get('window').width;
  const carbonData={
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  }
  let pressedView = 0;

  return (
    <SafeAreaView>
      {/* Creates a basic line graph in react native */}
      <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
        <LineChart
          data={carbonData}
          width={windowWidth*0.9} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#0d7529",
            backgroundGradientFrom: "#1c521b",
            backgroundGradientTo: "#29e329",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#5b5e5e"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 8
          }}
        />
      </View>
      <View style={tw`flex flex-row w-full justify-around items-stretch bg-white p-4`}>
        <Pressable
          onPress={() => console.log("first view")}
        >
          <View style={tw`p-4 bg-zinc-300 rounded-l-lg`}>
            <Text>Week</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log("second view")}
        >
          <View style={tw`p-4 bg-lime-500 rounded-r-lg`}>
            <Text>Month</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
