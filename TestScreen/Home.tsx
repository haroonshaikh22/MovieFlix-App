/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import LogOutIcon from 'react-native-vector-icons/MaterialIcons';
import {Color} from './constant/colors';

const Home = (props: any) => {
  const data = [
    {name: 'Questionnaire', image: require('./assets/image1.png')},
    {name: 'Medication', image: require('./assets/image2.png')},
    {name: 'Document', image: require('./assets/image3.png')},
    {name: 'Social Media', image: require('./assets/image4.png')},
    {name: 'Appointment', image: require('./assets/image5.png')},
    {name: 'Messages', image: require('./assets/image6.png')},
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '90%',
            marginTop: '5%',

            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#EAEAEA',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <SearchIcon
            name="search1"
            size={24}
            style={{marginLeft: '3%'}}
            color={'#FFFFFF'}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#FFFFFF'}
            style={{fontSize: 24, marginLeft: 5}}
          />
        </View>
        <LogOutIcon
          onPress={() => props?.navigation.navigate('LoginIn')}
          name="logout"
          size={36}
          style={{marginTop: 16, marginLeft: 10}}
          color={Color.primary}
        />
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            backgroundColor: Color?.primary,
            width: '100%',
            // marginTop: '5%',
            flexDirection: 'row',
            // height: '60%',
            justifyContent: 'space-between',
            borderRadius: 15,
            overflow: 'hidden',
            shadowColor: '#0000000A',
            opacity: 2,
          }}>
          <View
            style={{
              width: '50%',
              padding: 18,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
                Smith John
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                Other Details{' '}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: '80%',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: Color.primary}}>
                View Profile
              </Text>
            </View>
          </View>
          <Image
            source={require('./assets/profile.png')}
            style={{width: '50%', height: 200, borderRadius: 15}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
            width: '100%',
          }}>
          <Text style={{fontSize: 24, fontWeight: '700'}}>Service</Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: Color.primary}}>
            See All
          </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item?.name}
          numColumns={2}
          renderItem={item => {
            return (
              <View
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.item.image}
                    style={{width: 134, height: 134}}
                  />
                </View>

                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
