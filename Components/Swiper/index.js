import React from 'react';
import { Text, View } from 'react-native';
import SwiperPackage from 'react-native-swiper';
import styles from './styles';

export default Swiper = ({ swiperOptions }) => 
<SwiperPackage style={styles.wrapper} showsButtons loop={false}>
    {swiperOptions.map(swiperOption => {
        return <View style={styles["slide" + swiperOption.id]} key={swiperOption.id}>
            <Text style={styles.text}>{swiperOption.text}</Text>
        </View>
    })}
</SwiperPackage>