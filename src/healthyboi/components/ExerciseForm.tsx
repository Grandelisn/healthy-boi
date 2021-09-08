import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import {exerciseEntry} from '../types'
import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import useAPI from '../hooks/apiHook';
// import {BASE_URL} from 'react-native-dotenv';
import axios from "axios";
import Navigation from "../navigation";
const ExerciseForm = (props, navigation) => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<exerciseEntry>();
    const {submitted, setSubmitted} = props.data;
    const [showMe, setShowMe] = useState<boolean>(false);
    const history = useHistory();
    const onSubmit: SubmitHandler<exerciseEntry> = data =>{
        // useAPI(BASE_URL, 2, ) - TODO: utilize api hook
        axios.post('http://localhost:7000/api', data).then(res =>{console.log(`post achieved`)})
        .catch(err => console.log(`error in post function for exercise form: ${err}`));
        setShowMe(!showMe);
        setSubmitted(!submitted);
        navigation.navigate('Root');
    };

    if(showMe == true){
    return (
        
      <View>     
        <form onSubmit = {handleSubmit(onSubmit)}>
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
                <option value = 'core'>Core</option>
            </select>
            {errors.repRange && <span>This field is required</span>}
            <input type="submit"/>
               
       </form>        
      </View>
    );
}else{
    return (
        <View>
            <TouchableOpacity activeOpacity = {.5} onPress = {()=>setShowMe(!showMe)}>
                <Image source = {require('../assets/images/icons8-plus-96.png')} style= {{width:200, height: 200}}/>
            </TouchableOpacity> 
        </View>
    )
}
  };
  export default ExerciseForm;
