// How to Add or Remove FlatList Item with Animation
// https://aboutreact.com/add-or-remove-flatlist-item-with-animation/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  SelectList,
} from 'react-native';



import Card from './Card';
console.disableYellowBox = true;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const imageUrl =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png';

const BlackList = () => {
  const [dataSource, setDataSource] = useState([]);

  const setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.easeIn,
        springDamping: 0.7,
      },
    });
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
    });
  };

  const addItem = (() => {
    let key = dataSource.length;
    return () => {
      dataSource.unshift({
        key,
        uri: imageUrl,
        title: 'Animated FlatList Example Heading' + key,
        description: 'Please visit www.aboutreact.com',
        animated: true,
      });
      setAnimation();
      setDataSource(dataSource.slice(0));
      key++;
    };
  })();

  removeItem = (key) => {
    setAnimation();
    setDataSource(
         dataSource.slice().filter((item) => item.key !== key)
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Card item={item} removeItem={removeItem} />
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  //const [selected, setSelected] = React.useState("");
  
  // const data = [
  //     {key:'1', value:'Mobiles', disabled:true},
  //     {key:'2', value:'Appliances'},
  //     {key:'3', value:'Cameras'},
  //     {key:'4', value:'Computers', disabled:true},
  //     {key:'5', value:'Vegetables'},
  //     {key:'6', value:'Diary Products'},
  //     {key:'7', value:'Drinks'},
  // ]

  // return(
  //   <SelectList 
  //       setSelected={(val) => setSelected(val)} 
  //       data={data} 
  //       save="value"
  //   />
  // );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={styles.addButtonStyle}
        onPress={addItem}>
        <Text style={styles.addIconStyle}>
            Click to add list item
        </Text>
      </TouchableOpacity>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButtonStyle: {
    width: '100%',
    elevation: 3,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  addIconStyle: {
    color: 'white',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default BlackList;
