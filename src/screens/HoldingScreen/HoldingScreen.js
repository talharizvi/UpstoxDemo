import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import Header from '../../components/Header';
import HoldingItem from '../../components/HoldingItem';
import FooterSection from '../../components/FooterSection';
import styles from './styles';
import { Colors, holdingsUrl } from '../../utils/constant';
import { calculateCurrentValues, calculateTotalInvestment, calculateTodayPNL } from '../../utils/helper';
import useFetchHoldingData from '../../hooks/useFetchHoldingData';

const HoldingScreen = () => {

  const [data, isLoading, error] = useFetchHoldingData();
  const currentValues = calculateCurrentValues(data);
  const totalInvestment = calculateTotalInvestment(data);
  const todayPNL = calculateTodayPNL(data);
  const totalPNL = currentValues - totalInvestment;

  const renderListItem = ({ item, index }) => <HoldingItem {...item} index={index} length={data.length}/>;

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>An error occurred: {error}</Text>
        <Button title="Retry" onPress={fetchData} />
      </View>
    );
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.secondary} />
        <Header title="Upstox Holding" />
        
        {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={styles.loaderView}/>
      ) : ( 
         <View style={styles.parentView}>

          <View>
            <FlatList
            data={data}
            renderItem={renderListItem}
            keyExtractor={(item) => item.symbol}
            style={styles.listStyle}
            contentContainerStyle={styles.listContentStyle}
           />
          </View> 

           <FooterSection
            currentValue={currentValues}
            todayPNL={todayPNL}
            totalPNL={totalPNL}
            totalInvestment={totalInvestment}
          /> 

         </View>   
      )}  
    </SafeAreaView>
    <SafeAreaView style={styles.bottomSafeAreaView}/>
    </>
  );
};

export default HoldingScreen;