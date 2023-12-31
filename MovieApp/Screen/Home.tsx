/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import {FetchWatchLists} from '../redux/api/WatchListApi';
import {FetchFavoriteList} from '../redux/api/FetchFavoriteList';
const Home = (props: any) => {
  const dispatch = useDispatch();
  const FetchTredingList = useSelector(state => state.Trendings);
  const FetchWatchListApi = useSelector(state => state.WatchLists);
  const FetchFavoriteListApi = useSelector(state => state.FavoriteList);
  const [trendData, setTrendData] = useState([1, 2, 3]);
  const [watchList, setWatchList] = useState([1, 2, 3, 4]);
  const [favorite, setFavrite] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  const [searchBox, setSearchBox] = useState(true);

  const [refreshing, setRefreshing] = React.useState(false);

  const data = props?.route?.params?.Data;

  const CallAPi = () => {
    setLoading(true);
    dispatch(FetchTrending());
  };

  useEffect(() => {
    CallAPi();

    WatchListFunction();
    FavoriteListFunction();
  }, []);

  useEffect(() => {
    if (FetchTredingList?.isLoaded && !FetchTredingList?.error) {
      setLoading(false);
      setRefreshing(false);
      setTrendData(FetchTredingList?.data?.results);
    } else {
      setRefreshing(false);
      setLoading(false);
    }
  }, [FetchTredingList]);

  //Watch List APi
  useEffect(() => {
    if (FetchWatchListApi?.isLoaded && FetchWatchListApi?.success) {
      setWatchList(FetchWatchListApi?.data?.results);
      setRefreshing(false);
      setLoading(false);
    } else if (FetchWatchListApi?.isLoaded && !FetchWatchListApi?.success) {
      console.log('falied', FetchWatchListApi);
      setRefreshing(false);
      setLoading(false);
    }
  }, [FetchWatchListApi]);

  const WatchListFunction = () => {
    dispatch(FetchWatchLists(data?.sessionId));
  };

  //Favorite APi
  useEffect(() => {
    if (FetchFavoriteListApi?.isLoaded && FetchFavoriteListApi?.success) {
      setFavrite(FetchFavoriteListApi?.data?.results);
      setRefreshing(false);
      setLoading(false);
    } else if (
      FetchFavoriteListApi?.isLoaded &&
      !FetchFavoriteListApi?.success
    ) {
      setRefreshing(false);
      setLoading(false);
    }
  }, [FetchFavoriteListApi]);

  const FavoriteListFunction = () => {
    dispatch(FetchFavoriteList(data?.sessionId));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(FetchTrending());
    dispatch(FetchWatchLists(data?.sessionId));
    dispatch(FetchFavoriteList(data?.sessionId));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'center',

        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: Colors?.primary,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingVertical: '2%',
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 22,
            color: '#FFFFFF',
            marginLeft: '10%',
          }}>
          Hello {'  '}
          {data?.userName}
        </Text>
      </View>
      <Text style={{fontSize: 22, fontWeight: '700', color: '#FFFFFF'}}>
        <Text style={{color: '#44226E'}}>M</Text>ovies
      </Text>

      {searchBox && (
        <View style={{width: '90%', marginTop: '-2%'}}>
          <TextInputBox placeholder="Search" search />
        </View>
      )}

      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
