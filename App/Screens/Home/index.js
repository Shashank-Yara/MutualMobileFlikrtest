import React, { useRef, useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {
  FlatList,
  Platform,
  View,
} from 'react-native';
import Flickr from 'flickr-sdk/services/rest';
import Config from '../../Config/dev.json';
import {debounce} from '../../Utils/helper';
import {CONSTANTS} from '../../Utils/Constants';
import ImageTile from '../../Components/Reusable/ImageTile';
import styles from './styles';

export default Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState([])
  const SEARCH_REF = useRef();
  const [pageNo, setPageNo] = useState(1);
  const flickr = new Flickr(Config.FLICKER_API_KEY);
  const getFlikrImages = () => {
    search &&
      flickr.photos
        .search({
          text: search,
          page: pageNo
        })
        .then(function (res) {
          if (res?.body.stat === 'ok') {
            const {photo} = res?.body?.photos || {};
            let currentData = [...searchedData]
            currentData = [...currentData, ...photo]
            setSearchedData(currentData || []);
          }
        })
        .catch(function (err) {
          console.error('bonk', err);
        });
  };
  const updateSearch = value => {
    setSearch(value);
    debounce(getFlikrImages(), CONSTANTS.SEARCH_DELAY);
  };

  const navigateToImageViewer = ({uri, title, caption}) => {
    navigation.navigate('ImageViewer', {uri, title, caption});
  };

  const renderImageTile = ({item, index}) => {
    const {secret, server, id, title} = item;
    const imageUri = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg}`;
    return (
      <ImageTile
        onPress={() =>
          navigateToImageViewer({uri: imageUri, title: title, caption: id})
        }
        uri={imageUri}
        title={title}
        style={{paddingBottom: 20}}
        titleStyle={{fontSize: 20, textAlign: "auto", paddingBottom: 5, backgroundColor: "#000000"}}
        contentContainerStyle={{height: 70}}
      />
    );
  };

  const onLoadMorePress = () => {
    setPageNo(pageNo + 1);
    getFlikrImages();
  };

  return (
    <View>
      <SearchBar
        ref={SEARCH_REF}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />

      <FlatList
        style={styles.flatlist}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.2}
        onEndReached={onLoadMorePress}
        data={searchedData}
        renderItem={renderImageTile}
        initialNumToRender={CONSTANTS.FLATLIST_ITEM_TO_RENDER}
      />
    </View>
  );
};
