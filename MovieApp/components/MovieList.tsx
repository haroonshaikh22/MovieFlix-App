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
let MovieName = 'Ant man';

let {width, height} = Dimensions.get('window');
const MovieList = ({title, data}) => {
  return (
    <View style={{}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginBottom: 20,
        }}>
        <Text>{title}</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data?.map(() => {
          return (
            <TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('./moviePoster1.png')}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                    marginHorizontal: 3,
                  }}
                />
                <Text>{MovieName}</Text>
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
