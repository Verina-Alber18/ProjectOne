import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [person, setPerson] = useState({ name:'verina', age:23 });
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [people, setPeople] = useState([
    { name: 'verina', key: '1' },
    { name: 'karen', key: '2' },
    { name: 'Amal', key: '3' },
    { name: 'daniel', key: '4' },
    { name: 'david', key: '5' },
    { name: 'vovo', key: '6' },
    { name: 'koko', key: '7' },
    { name: 'dodo', key: '8' },
    { name: 'devo', key: '9' },
    { name: 'lola', key: '10' },
  ]);

  const clickHandler = () => {
    setPerson({ name:'karen', age:20 });
  }

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((per) => per.id != id);
    });
  }

  return (
    <View style={styles.container}>
      {/* Lesson 7,8 : FlatList and Touchable Components */}
      <FlatList
        numColumns={2}
        // keyExtractor={(item) => item.id}   //if key is named anth other than key
        data={people}
        renderItem={({ item }) => (
          //<TouchableOpacity onPress={pressHandler(item.id)}>
            <Text style={styles.item}>{item.key})  {item.name}</Text>
          //</TouchableOpacity>
        )}
      />

      {/* Lesson 5 : TextInput */}
      {/* <Text style={styles.textContainer}>Enter Name : </Text>
      <TextInput
        multiline 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)}
        />
      <Text style={styles.textContainer}>Enter Age : </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 30'
        onChangeText={(value) => setAge(value)}
        />
      <Text style={styles.textContainer}>The Entered name is {name} and age is {age}</Text>*/}

      {/* Lesson 4 : using state */}
      {/* <Text style={styles.textContainer}>This person's name is {person.name} and age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button color='#ff5c5c' title='update state!' onPress={clickHandler} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  textContainer: {
    backgroundColor: '#e74d4d',  
    marginBottom:20 
  },
  input:{
    backgroundColor:'#BFBFBF',
    color:'#B6FD80',
    borderWidth: 2,
    borderColor: '#B6FD80',
    padding: 8,
    margin: 10,
    width:200,
  },
  item: {
    marginHorizontal: 30,
    fontSize: 24,
    backgroundColor: '#e74d4d',
    padding: 30,
    marginTop: 24,
  }

});
