import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { AllProucts } from '../../constants/productdata';
import CartItem from '../../components/cartitem';
import Typography from '../../components/typography';

const Orders = () => {
    const [selectedTab, setSelectedTab] = useState('Active');
    const filteredOrders = AllProucts.filter(
        (item) => item.orderstatus === selectedTab
    );
    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader title='Orders' />
            <View style={styles.tabContainer}>
                {['Active', 'Completed', 'Cancel'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        style={styles.tabButton}
                    >
                        <Typography
                            style={[
                                styles.tabText,
                                selectedTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Typography>
                        {selectedTab === tab && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                {filteredOrders.map((item) => (
                    <CartItem key={item.id} item={item} showtrack={true} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Orders;