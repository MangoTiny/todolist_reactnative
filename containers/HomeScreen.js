// This code defines the HomeScreen component which displays a list of todo items in a table format. 
 
import React, { useState } from 'react'; 
import { View, TextInput, Button, Text, FlatList, Alert } from 'react-native'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { addItem, updateItem, deleteItem } from '../actions/todolist'; 
import { Table, Row, Rows } from 'react-native-table-component'; 
 
const HomeScreen = () => { 
  // Define state variables using the useState hook 
  const [inputText, setInputText] = useState(''); 
  const [editIndex, setEditIndex] = useState(-1); 
  const [editText, setEditText] = useState(''); 
 
  // Access Redux store using the useDispatch and useSelector hooks 
  const dispatch = useDispatch(); 
  const listData = useSelector((state) => state.todolist.listData); 
 
  // Define event handlers 
  const handleAdd = () => { 
    dispatch(addItem(inputText)); 
    setInputText(''); 
  }; 
 
  const handleEdit = (index) => { 
    setEditIndex(index); 
    setEditText(listData[index]); 
  }; 
 
  const handleUpdate = () => { 
    dispatch(updateItem(editIndex, editText)); 
    setEditIndex(-1); 
    setEditText(''); 
  }; 
 
  const handleCancelEdit = () => { 
    setEditIndex(-1); 
    setEditText(''); 
  }; 
 
  const handleDelete = (index) => { 
    Alert.alert( 
      'Confirmation', 
      'Are you sure you want to delete this item?', 
      [ 
        { 
          text: 'No', 
          style: 'cancel', 
        }, 
        { 
          text: 'Yes', 
          onPress: () => { 
            dispatch(deleteItem(index)); 
          }, 
        }, 
      ], 
      { cancelable: false } 
    ); 
  }; 
 
  // Define table headers and data 
  const tableHead = ['Todo', 'Actions', 'Actions']; 
  const tableData = listData.map((item, index) => [ 
    // JSX code for the Todo column 
    <View style={{ flexDirection: 'row' }}> 
      {index === editIndex ? ( 
        <TextInput 
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10 }} 
          onChangeText={(text) => setEditText(text)} 
          value={editText} 
        /> 
      ) : ( 
        <Text>{item}</Text> 
      )} 
    </View>, 
 
    // JSX code for the first Actions column 
    <View> 
      {index === editIndex ? ( 
        <Button title="Update" onPress={handleUpdate} /> 
      ) : ( 
        <Button title="Edit" onPress={() => handleEdit(index)} /> 
      )} 
    </View>, 
 
    // JSX code for the second Actions column 
    <View> 
      {index === editIndex ? ( 
        <Button title="Cancel" onPress={handleCancelEdit} /> 
      ) : ( 
        <Button title="Delete" onPress={() => handleDelete(index)} /> 
      )} 
    </View> 
  ]); 
 
  return ( 
    <View style={{ flex: 1, padding: 20 }}> 
      {/* JSX code for input field and Add button */} 
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} 
        onChangeText={(text) => setInputText(text)} 
        value={inputText} 
      /> 
      <Button title="Add" onPress={handleAdd} /> 
 
      {/* JSX code for the table */} 
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}> 
        <Row data={tableHead} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }} /> 
        <Rows data={tableData} textStyle={{ margin: 6 }} /> 
      </Table> 
    </View> 
  ); 
}; 
 
export default HomeScreen;