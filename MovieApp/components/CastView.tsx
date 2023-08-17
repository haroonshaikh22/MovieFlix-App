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
var {width, height} = Dimensions.get('window');

const personName = 'Keljdkkkkslksl';
const CharName = 'Jonh';

const CastView = ({cast}) => {
  return (
    <View style={{marginTop: '5%'}}>
      <Text style={{fontSize: 24, fontWeight: '600'}}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, marginTop: 5}}>
        {cast &&
          cast?.map(({person, index}) => {
            return (
              <TouchableOpacity
                style={{
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    resizeMode="center"
                    source={require('./castImage1.png')}
                    style={{height: 80, width: 80, borderRadius: 45}}
                  />
                </View>

                <Text>
                  {CharName.length > 10
                    ? CharName.slice(0, 10) + '...'
                    : CharName}
                </Text>

                <Text>
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default CastView;

const styles = StyleSheet.create({});
