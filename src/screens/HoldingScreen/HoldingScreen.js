import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import Header from '../../components/Header';
import HoldingItem from '../../components/HoldingItem';
import FooterSection from '../../components/FooterSection';
import styles from './styles';
import { Colors, holdingsUrl } from '../../utils/constant';
import { calculateCurrentValues, calculateTotalInvestment, calculateTodayPNL } from '../../utils/helper';

const HoldingScreen = () => {
  const [data, setData] = useState([]);             //holdings data 
  const [isLoading, setIsLoading] = useState(true); //loader status
  const [error, setError] = useState(null);         //error

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(holdingsUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data.userHolding);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setIsLoading(false);
    }
  };
  
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