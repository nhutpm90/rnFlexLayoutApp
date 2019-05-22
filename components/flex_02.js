import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

class Layout01 extends Component {
  render() {
    const item1_1 = "Item 1_1";
    const item1_2 = "Item 1_2";
    const item2 = "Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 End";
    const imgUri = 'https://cdn-images-1.medium.com/max/1600/1*mrOXGyIa3BlPK80peLmEbA.png';
    const item3 = "Item 3";
    
    return (
      <View style={{
        flex: 1,
        borderColor: 'brown',
        borderWidth: 1,
        padding: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // borderColor: 'red',
          // borderWidth: 1,
        }}>
          <View style={{
            flex: 1,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
            <Text>{item1_1}</Text>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            borderColor: 'violet',
            borderWidth: 1,
          }}>
            <Text>{item1_2}</Text>
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          borderColor: 'blue',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 10,
          padding: 10,
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            // padding: 5,
            // borderColor: 'orange',
            // borderWidth: 1,
            paddingBottom: 10,
          }}>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'flex-start', 
              alignItems: 'center',
              // borderColor: 'maroon',
              // borderWidth: 1,
            }}>
              <Image
                source={{uri: imgUri}}
                style={{
                  width: 50, 
                  height: 50,
                }}
              />
            </View>
            
            <View style={{
              flex: 1,
              paddingLeft: 10,
              // borderWidth: 1,
              // borderColor: 'olive',
            }}>
              <Text>{item2} {item2}</Text>
            </View>
          </View>

          <View style={{
            alignItems: 'center',
            borderTopWidth: 1,
            borderColor: 'pink',
            paddingTop: 10,
          }}>
            <Text style={{
            }}>{item3}</Text>
          </View>
        </View>
      </View>
    );
  }
}

class Layout02 extends Component {
  render() {
    const item1 = "Item 1";
    const item2 = "Item 2";
    const item3 = "Item 3";
    const item4 = "Item 4 Item 4 Item 4 Item 4 Item 4 Item 4 Item 4 Item 4 Item 4";
    const item5 = "Item 5";

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#8BC34A',
      }}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#e74c3c',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>{item1}</Text>
        </View>
        <View style={{
          flex: 3,
          flexDirection: 'column',
          borderWidth: 1,
          borderColor: '#8e44ad',
        }}>
          <View style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#3F51B5',
            padding: 5,
          }}>
            <View style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ffda79',
            }}>
              <Text>{item2}</Text>
            </View>
            <View style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#c23616',
            }}>
              <Text>{item3}</Text>
            </View>
          </View>
          <View style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#67e6dc',
            padding: 5,
          }}>
            <Text>{item4}</Text>
          </View>
        </View>
      </View>
    );
  }
}

class Layout03 extends Component {
  render() {
    const item1 = "Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1";
    const item2 = "Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2";
    const item3 = "Item 3";
    const item4 = "Item 4 Item 4";
    const item5 = "Item 5";

    const imgUri = 'https://cdn-images-1.medium.com/max/1600/1*mrOXGyIa3BlPK80peLmEbA.png';

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
      }} >
        <View style={{
          justifyContent:'center',
          borderWidth: 1,
          borderColor: 'green',
        }}>
          <Image source={{uri: imgUri}} style={{width: 50, height: 50, margin: 5}} />
        </View>

        <View style={{
          flex: 1,
          justifyContent:'center',
          borderWidth: 1,
          borderColor: 'yellow'
        }}>
          <Text numberOfLines={1}>
            {item1}
          </Text>
          <Text numberOfLines={1}>
            {item2}
          </Text>
        </View>

        <View style={{
          justifyContent:'center',
          borderWidth: 1,
          borderColor: 'blue',
        }}>
          <Text>{item3}</Text>
        </View>
      </View>
    );
  }
}

class Layout04 extends Component {
  render() {
    const item1 = "Item 1";
    const item2 = "Item 2";
    const item3 = "Item 3";
    const item4 = "Item 4 Item 4";
    const item5 = "Item 5";

    const imgUri = 'https://picsum.photos/id/939/800/600';
    // const imgUri = 'http://placehold.it/200x200?text=IMG';

    return (
      <View style={{
        width: width*0.8,
        height: width*0.8,
        borderWidth: 1,
        // borderColor: 'lightgrey',
        overflow: 'hidden',
        borderRadius: 8,
      }} >
        <View style={{
          flex: 1,
        }}>
          <Image source={{uri: imgUri}} style={{
            height: width*0.8,
            flex: 1,
          }} />
        </View>
        <View>
          <Text>{item1}</Text>
          <Text>{item2}</Text>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {    
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20,
      }}>
        <ScrollView style={{
            borderWidth: 1,
            borderColor: 'red',
        }}
        scrollEventThrottle={16}
        contentContainerStyle={{
            padding: 10
        }}>          

          <View>
            <Text>Layout 01</Text>
            <Layout01 />
          </View>

          <View>
            <Text>Layout 02</Text>
            <Layout02 />
          </View>

          <View>
            <Text>Layout 03</Text>
            <Layout03 />
          </View>

          <View>
            <Text>Layout 04</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <Layout04 />
              <Layout04 />
            </ScrollView>
          </View>
          

        </ScrollView>
      </View>
    );
  }
}