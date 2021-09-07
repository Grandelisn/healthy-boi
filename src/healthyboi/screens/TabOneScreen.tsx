import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios'
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
import SvgComponent from '../assets/images/test'
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

export const DataContext = React.createContext(dummyData);
export default function TabOneScreen() {

  const {register, handleSubmit, watch, formState:{errors}} = useForm<exerciseEntry>();
  const [value, setValue] = useState<any>([]);
  const onSubmit: SubmitHandler<exerciseEntry> = data =>{

  };
  useEffect(()=>{
    // let testData;
    // axios.get(getURL).then(res => {
    //   console.log(`inside axios get ${res.data}`);
    //   testData = res.data
    //   setValue(testData);
    // }).catch(err=>console.log(err));
    // console.log(`axios request ${testData}`);
    useAPI(getURL, 1, setValue);
    console.log(`Value of state at mount tabone: ${value}`);
  }, []) 
  console.log('boo boo boop',value)

  // console.log(watch("name"));
    return (
    <DataContext.Provider value = {value}>
    <View style={styles.container}>
      {/* <Text style={styles.title}>Add Exercise</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <ItemList key = "uniqueId1"/>
      <ExerciseForm/> */}
      {/* <form onSubmit = {handleSubmit(onSubmit)}>
        <input defaultValue="Enter an Exercise" {...register("name")}/>
        <br/>
        <input {...register("repRange", {required: true})}/>
        <br/>
        <select {...register("bodyPart")} >
          <option value = ''>Select...</option>
          <option value = 'legs'>Legs</option>
          <option value = 'chest'>Chest</option>
          <option value = 'back'>Back</option>
          <option value = 'arms'>Arms</option>
          <option value = 'shoulders'>Shoulders</option>
        </select>
        {errors.repRange && <span>This field is required</span>}
        <input type="submit"/>
      </form> */}
      <SvgComponent/>
    </View>
    </DataContext.Provider>
  );
}

