import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, Button } from 'react-native';
import Header from '../../components/Header';
import HoldingItem from '../../components/HoldingItem';
import FooterSection from '../../components/FooterSection';
import styles from './styles';
import { Colors, holdingsUrl } from '../../utils/constant';

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
  
  const currentValues = data
    .reduce((acc, holding) => {
      const value = holding.ltp * holding.quantity;
      return acc + value;
    }, 0)
    .toFixed(2);

  const totalInvestment = data
    .reduce((acc, holding) => {
      const investmentValue = holding.avgPrice * holding.quantity;
      return acc + investmentValue;
    }, 0)
    .toFixed(2);

  const totalPNL = currentValues - totalInvestment;

  const todayPNL = data
    .reduce((acc, current) => {
      return acc + ((current.close - current.ltp) * current.quantity);
    }, 0)
    .toFixed(2);

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
    <View style={styles.container}>
        <Header title="Upstox Holding" />
        
        {isLoading ? (
        <ActivityIndicator size="large" color={Colors.dark} style={styles.loaderView}/>
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
       
      
    </View>
  );
};

export default HoldingScreen;