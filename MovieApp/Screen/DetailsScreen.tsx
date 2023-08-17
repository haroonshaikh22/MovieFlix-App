/* eslint-disable react/self-closing-comp */
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
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import CastView from '../components/CastView';

const {width, height} = Dimensions.get('window');
const DetailsScreen = () => {
  const {params: item} = useRoute();
  const [isfavorite, setIsFavorite] = useState(false);
  const [castData, setCastdata] = useState([1, 2, 3, 4]);

  console.log('item', item);

  useEffect(() => {
    //Call api
  }, [item]);
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 10,

          zIndex: 999,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            width: '8%',
            margin: 10,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <BackIcon name="arrow-back-ios" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isfavorite)}
          style={{width: '15%', margin: 10}}>
          <HeartIcon
            name={'heart'}
            size={24}
            color={isfavorite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../components/moviePoster1.png')}
          style={{width, height: height * 0.55}}
        />

        <LinearGradient
          // colors={['#4c669f', '#3b5998', '#192f6a']}
          colors={[
            'transparent',
            'rgba(23, 23, 23, 0.8)',
            'rgba(23, 23, 23, 1)',
          ]}
          style={{
            width,
            height: height * 0.4,
            position: 'absolute',
            top: '50%',
          }}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}></LinearGradient>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -(height * 0.05),
        }}>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF'}}>
          {'ANt Man hsghjh'}
        </Text>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF'}}>
          {'ANt Man hsghjh'}
        </Text>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF'}}>
          {'ANt Man hsghjh'}
        </Text>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF'}}>
          {'ANt Man hsghjh'}
        </Text>
      </View>

      {/* cast List */}
      <CastView cast={castData} />
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
