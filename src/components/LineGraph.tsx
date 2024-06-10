import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    Dimensions,
} from "react-native";


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const LineGraph: React.FC = () => {

    return (
        <View>
            {/* <Text>Bezier Line Chart</Text> */}
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
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
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="%"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#001840",
                    // backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#aaa",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        // width: '90%',

                        borderRadius: 16,

                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#e26a00"
                    }
                }}
                bezier
                style={{
                    // width: 300,
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    )

}
export default LineGraph;