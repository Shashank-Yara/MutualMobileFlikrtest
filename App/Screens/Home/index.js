import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {debounce} from '../../Utils/Helpers';
import {CONSTANTS} from '../../Utils/Constants';
import ImageTile from '../../Components/Reusable/ImageTile';
import styles from './styles';
import AppErrorBoundary from '../../Hoc/ErrorBoundry';
import API from '../../Services/API/ApiClient';
import EmptyList from '../../Components/Reusable/EmptyList';
import {COLORS, COMMONSTYLES} from '../../Utils/Theme';

export default Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const SEARCH_REF = useRef();
  const [pageNo, setPageNo] = useState(1);
  const getFlikrImages = async () => {
    const response = await API.flickerSearch({search, pageNo});
    setLoading(false);
    if (!response.error) {
      const {data} = response || {};
      let currentData = [...searchedData];
      currentData = [...currentData, ...data];
      setSearchedData(currentData);
    }
  };
  const debounceLoadData = useCallback(
    debounce(getFlikrImages, CONSTANTS.SEARCH_DELAY),
    [search],
  );

  useEffect(() => {
    if (search && search !== '' && search.length > 1) {
      setLoading(true);
      debounceLoadData();
    }
  }, [search]);

  useEffect(() => {
    return function cleanUp() {
      setSearchedData([]);
      setSearch('');
      setPageNo(1);
    };
  }, []);

  const updateSearch = value => {
    value = value.toString();
    setSearchedData([]);
    setSearch(value);
    setPageNo(1);
  };

  const navigateToImageViewer = ({uri, title, caption}) => {
    navigation.navigate('Image', {uri, title, caption});
  };

  const renderImageTile = ({item, index}) => {
    const {secret, server, id, title} = item;
    const imageUri = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg}`;
    return (
      <AppErrorBoundary>
        <ImageTile
          onPress={() =>
            navigateToImageViewer({uri: imageUri, title: title, caption: id})
          }
          uri={imageUri}
          title={title}
          style={styles.styleImageTile}
          titleStyle={styles.titleStyleImageTile}
          containerStyle={styles.backgroundBlack}
          contentContainerStyle={styles.backgroundBlack}
        />
      </AppErrorBoundary>
    );
  };

  const onLoadMorePress = () => {
    setPageNo(pageNo + 1);
    getFlikrImages(search);
  };

  const renderActivityIndicator = () => {
    return (
      <View style={[COMMONSTYLES.container, COMMONSTYLES.alignJustifyCenter]}>
        <ActivityIndicator size={'small'} />
      </View>
    );
  };

  const setEmptySearch = () => {
    setLoading(false);
    setSearch('');
  };

  return (
    <AppErrorBoundary>
      <View>
        <SearchBar
          ref={SEARCH_REF}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          onClear={setEmptySearch}
        />
        <FlatList
          style={styles.flatlist}
          keyExtractor={(item, index) => `${item.id}${index}`}
          onEndReachedThreshold={0.2}
          onEndReached={onLoadMorePress}
          data={searchedData}
          renderItem={renderImageTile}
          initialNumToRender={CONSTANTS.FLATLIST_ITEM_TO_RENDER}
          maxToRenderPerBatch={20}
          updateCellsBatchingPeriod={200}
          removeClippedSubviews={true}
          ListEmptyComponent={
            loading ? renderActivityIndicator() : <EmptyList />
          }
        />
      </View>
    </AppErrorBoundary>
  );
};
