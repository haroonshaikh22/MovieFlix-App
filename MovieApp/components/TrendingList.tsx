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
  const navigation = useNavigation();

  const GotoDetailScreen = item => {
    navigation.navigate('DetailsScreen', item);
  };

  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '800',
          marginVertical: '2%',
          marginLeft: '5%',
        }}>
        TrendingList
      </Text>
      <Carousel
        data={props?.data}
        renderItem={({item}) => (
          <MovieCard item={item} gotoHandler={data => GotoDetailScreen(data)} />
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

const MovieCard = ({item, gotoHandler}) => {
  return (
    <TouchableWithoutFeedback onPress={() => gotoHandler(item)}>
      <Image
        source={{uri: ImagePath(item?.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 40,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingList;

const styles = StyleSheet.create({});
