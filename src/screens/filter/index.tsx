import React, { useState } from 'react';
import { ScrollView, } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

const Filters = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader title='Filter' />
            <ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Filters;