import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Before from './indicatorsBefore/src/components/ui-activity-indicator';
import After from './indicatorsAfter/src/components/ui-activity-indicator';
export default function App(){return <View style={s.page}>
<Text style={s.title}>UIActivityIndicator 0.17.0</Text>
<Text style={s.subtitle}>RN 0.87.1 · Android API 35 · Fabric</Text>
<Text style={s.subtitle}>Published component / one style replacement</Text>
{[25,40].map(size=><View key={size} style={s.card}>
<Text style={s.label}>size={size} (Rainbow default: 25)</Text>
<View style={s.row}>
<View style={s.column}><Text style={s.label}>BEFORE</Text><View style={[s.frame,{width:size,height:size}]}><Before color="#ffffff" interaction={false} size={size}/></View></View>
<View style={s.column}><Text style={s.label}>AFTER</Text><View style={[s.frame,{width:size,height:size}]}><After color="#ffffff" interaction={false} size={size}/></View></View>
</View></View>)}
<Text style={s.subtitle}>Frame shows requested component dimensions.</Text>
</View>}
const s=StyleSheet.create({page:{flex:1,padding:24,paddingTop:60,backgroundColor:'#101827'},title:{fontSize:22,color:'white',fontWeight:'700'},subtitle:{fontSize:13,color:'#d5ddeb',marginTop:12},card:{marginTop:30,padding:20,backgroundColor:'#24344a',borderRadius:10},label:{fontSize:14,color:'white'},row:{flexDirection:'row',justifyContent:'space-around',height:210,paddingTop:25},column:{alignItems:'center',gap:25},frame:{backgroundColor:'#507090'}});
