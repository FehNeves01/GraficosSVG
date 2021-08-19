import React from 'react'
import { View, ScrollView, Text } from 'react-native';


import GroupedBarChartExample from './src/GroupedBarChartExample';
import BarChartExample from './src/BarChartExample';
import LayeredChartsExample from './src/LayeredChartsExample';
import GradientExample from './src/GradientExample';
import LineChartExample from './src/LineChartExample';
import AreaChartExample from './src/AreaChartExample';
import BarChartVerticalWithLabels from './src/BarChartVerticalWithLabels';
import XAxisExample from './src/XAxisExample';
import YAxisExample from './src/YAxisExample';
import DecoratorExample from './src/DecoratorExample';
import LineChartExample2 from './src/LineChartExample2';
import AxesExample from './src/AxesExample';
import GradientBarExample from './src/GradientBarExample';
import GradientLineExample from './src/GradientLineExample';
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


        <View style={{marginLeft:10, marginRight:10 }}>

          <Text style={{ color: 'white', fontWeight: '900' }}>Para Ver Todos os Graficos Acessar o Link:</Text>
          <Text style={{ color: 'white', fontWeight: '900' }}>https://github.com/JesperLekland/react-native-svg-charts-examples</Text>
        
        </View>

      </ScrollView>
    </View>


  )

}