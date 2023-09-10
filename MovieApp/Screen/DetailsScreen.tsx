/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
// import CastView from '../components/CastView';
import {ImagePath} from '../API/MovieApi';
import {useDispatch, useSelector} from 'react-redux';
import {AddWatchList} from '../redux/api/AddwatchListApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddFavorite} from '../redux/api/AddFavorite';

const {width, height} = Dimensions.get('window');
const DetailsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const AddWatchApi = useSelector(state => state.AddWatchLists);
  const AddFavoriteApi = useSelector(state => state.AddFavorite);
  const {params: item} = useRoute();

  const [isfavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [castData, setCastdata] = useState([1, 2, 3, 4]);

  //
  const [movieId, setMovieId] = useState('');
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    setMovieId(item?.id);
  }, []);

  // Add watch list api
  useEffect(() => {
    if (AddWatchApi?.isLoaded && AddWatchApi?.success) {
      setIsFavorite(true);
      ToastAndroid.show('Movie Added to Watch list', ToastAndroid.SHORT);
    } else if (AddWatchApi?.isLoaded && !AddWatchApi?.success) {
      console.log('failed', AddWatchApi);
    }
  }, [AddWatchApi]);

  //Add Fav list
  useEffect(() => {
    if (AddFavoriteApi?.isLoaded && AddFavoriteApi?.success) {
      setIsFavorite(true);
      ToastAndroid.show('Movie Added to Favorite list', ToastAndroid.SHORT);
    } else if (AddFavoriteApi?.isLoaded && !AddFavoriteApi?.success) {
      console.log('failed', AddFavoriteApi);
    }
  }, [AddFavoriteApi]);

  const AddWatchHandler = () => {
    setIsWatched(true);

    dispatch(AddWatchList({sessionId: sessionId, movieId: movieId}));
  };

  const AddFavoriteHandler = () => {
    dispatch(AddFavorite({sessionId: sessionId, movieId: movieId}));
  };

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('session_id');
      const Data = jsonValue != null ? JSON.parse(jsonValue) : null;

      setSessionId(Data?.sessionId);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('failed get data');
    }
  };

  const BackHandler = () => {
    navigation?.goBack();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
        backgroundColor: '#18191A',
        flexGrow: 1,
      }}>
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
          onPress={BackHandler}
          style={{
            width: '12%',
            margin: 10,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            borderRadius: 8,
            height: 40,
          }}>
          <BackIcon name="arrow-back-ios" size={24} />
        </TouchableOpacity>

        <View style={{width: '18%'}}>
          <TouchableOpacity
            onPress={() => AddFavoriteHandler()}
            style={{margin: 10}}>
            <HeartIcon
              name={'heart'}
              size={40}
              color={isfavorite ? 'red' : 'white'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => AddWatchHandler()}
            style={{margin: 10}}>
            <StarIcon
              name={'star'}
              size={42}
              color={isWatched ? '#FFC60A' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={{uri: ImagePath(item?.poster_path)}}
          style={{width, height: height * 0.66}}
          resizeMode="cover"
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
        <Text
          style={{
            fontSize: 26,
            fontWeight: '800',
            color: '#FFFFFF',
            marginVertical: '2%',
          }}>
          {item?.original_title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '65%',
            marginVertical: '2%',
          }}>
          <Text style={{fontSize: 12, fontWeight: '600', color: '#FFFFFF'}}>
            {'Release Date '} {item?.release_date}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '600', color: '#FFFFF2'}}>
            {'Popularity  '}
            {item?.popularity}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          {'Rating  '} {item?.vote_average}
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: '#FFFFFF',
            marginTop: 15,
            textAlign: 'center',
            width: '80%',
            lineHeight: 18,
            letterSpacing: 0.5,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '80%',
              lineHeight: 18,
              letterSpacing: 0.5,
            }}>
            {' '}
            {'OverView'}
          </Text>

          {'\n'}
          {item?.overview}
        </Text>
      </View>

      {/* cast List */}
      {/* <CastView cast={castData} /> */}
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
