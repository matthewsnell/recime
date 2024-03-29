import React, { useState } from "react";
import { Button, SafeAreaView, Text, Dimensions, View, Pressable, StatusBar, Platform } from "react-native";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import tw from 'twrnc';

export default function Impact() {
  const screenWidth = Dimensions.get('window').width;
  let weekData = [12, 17, 8, 14, 21, 3, 15];
  let weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  let monthData = [12, 17, 8, 14];
  let monthLabels = ["Jan", "Feb", "Mar", "Apr"]

  const switchActiveColor = "bg-green-700";
  const switchInactiveColor = "bg-zinc-300";

  const [weekViewColor, setWeekViewColor] = useState(switchActiveColor);
  const [monthViewColor, setMonthViewColor] = useState(switchInactiveColor);
  const [graphObj, updateGraph] = useState({labels: weekLabels, datasets: [{data: weekData}]});

  let pressedView = 0;

  const chartConfig={
    backgroundColor: '#0d7529',
    backgroundGradientFrom: '#1c521b',
    backgroundGradientTo: '#29e329',
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }
  const graphStyle={
    marginVertical: 4,
    borderRadius: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  }

  const weekClickHandler = () => {
    // if (pressedView == 0) { return; }
    pressedView = 0;
    setWeekViewColor(switchActiveColor);
    setMonthViewColor(switchInactiveColor);
    updateGraph({labels: weekLabels, datasets: [{data: weekData}]})
    console.log(pressedView);
  }

  const monthClickHandler = () => {
    // if (pressedView == 1) { return; }
    pressedView = 1;
    setWeekViewColor(switchInactiveColor);
    setMonthViewColor(switchActiveColor);
    updateGraph({labels: monthLabels, datasets: [{data: monthData}]})
    console.log(pressedView);
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Creates a basic line graph in react native */}
      <View>
        <Text style={tw`text-2xl pt-3 pl-3 pr-3 bg-white`}>Carbon Footprint</Text>
      </View>
      <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
      <BarChart
          style={graphStyle}
          data={graphObj}
          width={screenWidth*0.9}
          height={220}
          yAxisSuffix={"kg"}
          chartConfig={chartConfig}
      />
      </View>
      <View style={tw`flex-row w-full justify-center bg-white pb-3 pl-3 pr-3`}>
        <Pressable
          onPress={weekClickHandler}
        >
          <View style={tw`p-4 flex ${weekViewColor} rounded-l-lg w-25`}>
            <Text style={tw`text-center`}>Week</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={monthClickHandler}
        >
          <View style={tw`p-4 flex ${monthViewColor} rounded-r-lg w-25`}>
            <Text style={tw`text-center`}>Month</Text>
          </View>
        </Pressable>
      </View>
      {/* <View style={tw`bg-violet-200 flex-1 flex-row`}>
        <View style={tw`bg-orange-400 basis-1/3`}><Text>Month</Text></View>
        <View style={tw`bg-yellow-400 basis-1/3`}><Text>Month</Text></View>
        <View style={tw`bg-emerald-400 basis-1/3`}><Text>Month</Text></View>
      </View> */}
    </SafeAreaView>
  );
}
