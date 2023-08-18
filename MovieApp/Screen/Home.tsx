/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrendingList from '../components/TrendingList';
import {Colors} from '../constant';
import TextInputBox from '../components/TextInputBox';
import MovieList from '../components/MovieList';

import {useDispatch, useSelector} from 'react-redux';
import {FetchTrending} from '../redux/api/fetchTrending';
const Home = () => {
  const dispatch = useDispatch();
  const FetchTredingList = useSelector(state => state.Trendings);
  const [trendData, setTrendData] = useState([1, 2, 3]);
  const [watchList, setWatchList] = useState([1, 2, 3, 4]);
  const [favorite, setFavrite] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  console.log(FetchTredingList, 'list');

  const CallAPi = () => {
    setLoading(true);
    dispatch(FetchTrending());
  };

  useEffect(() => {
    CallAPi();
  }, []);

  console.log(FetchTredingList, 'kkkk');

  useEffect(() => {
    if (FetchTredingList?.isLoaded && !FetchTredingList?.error) {
      setLoading(false);
      setTrendData(FetchTredingList?.data?.results);
    } else {
      console.log('Treanding api failed', FetchTredingList?.error_message);
    }
  }, [FetchTredingList]);

  return (
    <View
      style={{
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: Colors?.primary,
          width: '100%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: '10%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 26,
            color: '#FFFFFF',
            marginLeft: '10%',
          }}>
          Hello
        </Text>
      </View>
      <Text style={{fontSize: 22, fontWeight: '700', color: '#090909'}}>
        <Text style={{color: '#44226E'}}>M</Text>ovies
      </Text>
      <View style={{width: '90%'}}>
        <TextInputBox placeholder="Search" search />
      </View>

      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}>
          {/* Treading Movie */}
          <TrendingList data={trendData} />
          {/* Watched Movie  */}
          <MovieList title={'Watch List'} data={watchList} />

          {/* My Favorite Movie */}
          <MovieList title={'Watch List'} data={favorite} />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
