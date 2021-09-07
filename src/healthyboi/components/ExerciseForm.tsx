import React from "react";
import { View } from "react-native";
import {exerciseEntry} from '../types'
import { useForm, SubmitHandler } from 'react-hook-form';
import useAPI from '../hooks/apiHook';
// import {BASE_URL} from 'react-native-dotenv';
import axios from "axios";
const ExerciseForm = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<exerciseEntry>();
    // console.log('item-card data ', props)
    const onSubmit: SubmitHandler<exerciseEntry> = data =>{
        // useAPI(BASE_URL, 2, ) - TODO: utilize api hook
        axios.post('http://localhost:7000/api', data).then(res =>{console.log(`post achieved`)})
        .catch(err => console.log(`error in post function for exercise form: ${err}`));
    };
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
  };
  export default ExerciseForm;
