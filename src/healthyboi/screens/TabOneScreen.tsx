import * as React from 'react';
import { Text, View } from '../components/Themed';

import '../styles/test';
import '../types';
import { exerciseEntry } from '../types';
import { styles } from '../styles/test';
import { useState, useContext, useEffect } from 'react';
import ItemList from '../components/itemList';
import { createContext } from 'react';
import useAPI from '../hooks/apiHook';
import ExerciseForm from '../components/ExerciseForm';
import { Image, TouchableOpacity } from 'react-native';
// import plusIcon from '../assets/images/plus.png'
const dummyData:exerciseEntry[] = [{ 
  id: 1,
  name: 'Test 1',
  repRange: 'Test 2',
  bodyPart: 'Test 3'
},
{ 
    id: 2,
    name: 'Test 4',
    repRange: 'Test 5',
    bodyPart: 'Test 6'
  },
  { 
    id: 3,
    name: 'Test 7',
    repRange: 'Test 8',
    bodyPart: 'Test 9'
  }]
const getURL = 'http://localhost:7000/api';


export const DataContext = createContext(dummyData);
export default function TabOneScreen() {
  const [value, setValue] = useState<any>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  useAPI(getURL, 1, setValue);
  useEffect(()=>{
    // let testData;
    // axios.get(getURL).then(res => {
    //   console.log(`inside axios get ${res.data}`);
    //   testData = res.data
    //   setValue(testData);
    // }).catch(err=>console.log(err));
    // console.log(`axios request ${testData}`);
    console.log(`Value of state at mount tabone: ${value}`);
  }, [submitted]) 
  console.log('boo boo boop',value)
  const onSubmit = () => {
    
  }
  // console.log(watch("name"));
    return (
    <DataContext.Provider value = {value}>
    <View style={styles.container}>
      <Text style={styles.title}>Add Exercise boop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <ItemList key = "uniqueId1"/>
      <ExerciseForm data = {[submitted, setSubmitted]}/>
       
    </View>
    </DataContext.Provider>
  );
}

