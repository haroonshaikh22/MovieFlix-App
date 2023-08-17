import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {ImagePath} from '../API/MovieApi';

const {width, height} = Dimensions.get('window');
const TrendingList = (props: any) => {
  // console.log(props?.data, 'prooo');
  const navigation = useNavigation();
  const handleClick = ({item}) => {
    navigation.navigate('DetailsScreen', item);
  };

  return (
    <View style={{borderWidth: 1}}>
      <Text>TrendingList</Text>
      <Carousel
        data={props?.data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
        firstItem={1}
        // loop={true}
        inactiveSlideScale={0.86}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={{uri: ImagePath(item?.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingList;

const styles = StyleSheet.create({});
