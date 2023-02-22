import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function Impact() {
  return (
    <SafeAreaView>
      <Text>Test Content</Text>
      <Button 
        onPress={() => {console.log("Hello world")}}
        title="Hello world!"
      />
    </SafeAreaView>
  );
}
