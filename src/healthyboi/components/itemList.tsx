import React, {useState, useContext, useEffect} from 'react';
import { View, Text } from 'react-native';
import useAPI from '../hooks/apiHook';
import ItemCard from './itemCard';
import {styles} from '../styles/ItemListStyles';
import { ValidEndpoint } from '../models/enums/validEndpoint';
import { exerciseEntry } from '../types';
import { createContext } from 'react';
import {DataContext} from '../screens/TabOneScreen'

const ItemList = () => {
    
    let dummyData:any = useContext(DataContext);
    const printWork = () =>{
        console.log('click is working in item-list')
      }
    console.log(`Checking data context in itemList ${dummyData}`);  
  return (
      
    <View style = {styles.container}>
      <View style ={styles.container}>
          <p>ITEM LIST COMPONENT</p>
        {dummyData?.map((data:any) => {
          return (
          <ItemCard data = {data} key = {data?._id}/>
        )})}
      </View>
    </View>
  );
};
export default ItemList;
// import React, {useState, useContext, useEffect} from 'react';
// import useAPI from '../hooks/apiHook';
// import ItemCard from './itemCard'
// import { ValidEndpoint } from '../models/enums/validEndpoint';
// import { exerciseEntry } from '../types';
// import { createContext } from 'react';
// import {DataContext} from '../screens/TabOneScreen'

// const ItemList = () => {
//     const [value, setValue] = useState<any>([]);
//     let dummyData:any = useContext(DataContext);
//     const setData = (res:any)=>{
//       console.log('Inside itemList component setData function: ', res);
//       return res;
//     }
//     // const getData = (url:string) => {
//     //   console.log(`getData fired! url: ${url}`);
//     //   let test:any = useAPI(url, 1, setData);
//     //   console.log(`inside getData test: ${test}`);
//     //   return test;
//     // }

//     const printWork = () =>{
//         console.log('click is working in item-list')
//       }
    
//     useEffect(()=>{
//       console.log(`fucking balls ${useAPI('http://localhost:7000/api', 1)?.then((res:any)=>{
//         setValue(res.data);
//       })}`) 
//       console.log(`Value of state at mount: ${value}`);
//     }, [])  
//   return (
      
//     <div className ='item-list' onClick = {printWork}>
        
//       <div className = 'items-div'>
//           <p>ITEM LIST COMPONENT</p>
//           {console.log(`data in itemList component ${value}`)}
          
//         {value?.map((data:any) => {
//           return (
//           <ItemCard data = {data} key = {data?._id}/>
//         )})}
//       </div>
//     </div>
//   );
// };
// export default ItemList;