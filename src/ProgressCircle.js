import React from 'react';
import {View} from 'react-native';
import {ProgressCircle } from 'react-native-svg-charts'

function ProgressCircleFunction () {
    return (
        <View style={{ flex: 1, height: 300, justifyContent: 'center', alignContent: 'center' }}>

          <ProgressCircle style={{ height: 60, position: 'absolute', shadowColor: '#gray', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, }} progress={0.9} progressColor={'#0AFA00'} />
          <ProgressCircle style={{ height: 80, position: 'absolute', shadowColor: '#gray', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, }} progress={0.4} progressColor={'#FA0E00'} />
          <ProgressCircle style={{ height: 100,position: 'absolute', shadowColor: '#gray', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, }} progress={0.7} progressColor={'#00FAF8'} />

        </View>
    );
}
export default ProgressCircleFunction;


