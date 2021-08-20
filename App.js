import React from 'react'
import { View, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import GroupedBarChartExample from './src/GroupedBarChartExample';
import BarChartExample from './src/BarChartExample';
import LayeredChartsExample from './src/LayeredChartsExample';
import LineChartExample from './src/LineChartExample';
import AreaChartExample from './src/AreaChartExample';
import BarChartVerticalWithLabels from './src/BarChartVerticalWithLabels';
import XAxisExample from './src/XAxisExample';
import YAxisExample from './src/YAxisExample';
import DecoratorExample from './src/DecoratorExample';
import LineChartExample2 from './src/LineChartExample2';
import AxesExample from './src/AxesExample';
import ProgressCircle from './src/ProgressCircle';
import PieChartWithLabelExample from './src/PieChartWithLabelExample';
import AreaStackWithAxisExample from './src/AreaStackWithAxisExample';
import PieChartWithDifferentArcs from './src/PieChartWithDifferentArcs';
import PieChartWithDynamicSlices from './src/PieChartWithDynamicSlices';


export default function App() {

  return (



    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#282830', paddingTop: 50, paddingBottom: 50 }}>
      <ScrollView>
        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>GroupedBarChartExample</Text>
        <GroupedBarChartExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>BarChartExample</Text>
        <BarChartExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>LayeredChartsExample</Text>
        <LayeredChartsExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>LineChartExample</Text>
        <LineChartExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>AreaChartExample</Text>
        <AreaChartExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>BarChartVerticalWithLabels</Text>
        <BarChartVerticalWithLabels />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>XAxisExample</Text>
        <XAxisExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>YAxisExample</Text>
        <YAxisExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>AxesExample</Text>
        <AxesExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>DecoratorExample</Text>
        <DecoratorExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>LineChartExample2</Text>
        <LineChartExample2 />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>ProgressCircle</Text>
        <ProgressCircle />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>PieChartWithLabelExample</Text>
        <PieChartWithLabelExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>AreaStackWithAxisExample</Text>
        <AreaStackWithAxisExample />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>PieChartWithDifferentArcs</Text>
        <PieChartWithDifferentArcs />

        <Text style={{ color: 'white', marginLeft: 25, fontWeight: '900', marginBottom: 25 }}>PieChartWithDynamicSlices</Text>
        <PieChartWithDynamicSlices />

        {/*  */}

        <View style={{ marginLeft: 10, marginRight: 10 }}>

          <TouchableWithoutFeedback onPress={() => { WebBrowser.openBrowserAsync('https://github.com/JesperLekland/react-native-svg-charts-examples') }}>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 15 }}>
              <View style={{ flex: 0.4 }}>
                <Image source={require("./assets/img/GitHubColorido.png")} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: '900' }}>Git Example</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { WebBrowser.openBrowserAsync('https://github.com/FehNeves01/GraficosSVG') }}>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 15 }}>
              <View style={{ flex: 0.4 }}>
                <Image source={require("./assets/img/GitHubColorido.png")} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: '900' }}>Meu Código Fonte</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </ScrollView>
    </View>


  )

}