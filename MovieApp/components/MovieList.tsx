/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../API/MovieApi';
import {useNavigation} from '@react-navigation/native';
let MovieName = 'Ant man';

let {width, height} = Dimensions.get('window');
const MovieList = ({title, data}) => {
  console.log(data, 'data');

  const Navigation = useNavigation();

  return (
    <View style={{}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginVertical: '3%',
          backgroundColor: 'pink',
        }}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>{title}</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: '700'}}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data?.map(item => {
          console.log(item, 'item--');

          return (
            <TouchableOpacity
              onPress={() => Navigation?.navigate('DetailsScreen', item)}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{uri: ImagePath(item?.poster_path)}}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  {item?.original_title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
