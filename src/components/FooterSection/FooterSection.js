import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Accordion from '../Accordion';
import styles from './styles';


const FooterSection = ({ currentValue, totalInvestment, todayPNL, totalPNL }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.footerView}>
        <Accordion isExpanded={isExpanded} onToggle={toggleAccordion} />
        {isExpanded && 
          <>
          <View style={styles.footerItemView}>
          <Text style={styles.footerItemText}>Current Value: </Text>
          <Text style={styles.footerItemTextValue}>₹{currentValue}</Text>
        </View>
        <View style={styles.footerItemView}>
          <Text style={styles.footerItemText}>Total Investment: </Text>
          <Text style={styles.footerItemTextValue}>₹{totalInvestment}</Text>
        </View>
        <View style={[styles.footerItemView,{marginBottom: 16}]}>
          <Text style={styles.footerItemText}>Today's Profit & Loss: </Text>
          <Text style={styles.footerItemTextValue}>₹{todayPNL}</Text>
        </View>
          </>
        }
        
        <View style={[styles.footerItemView, {marginBottom: 24}]}>
          <Text style={styles.footerItemText}>Profit & Loss: </Text>
          <Text style={styles.footerItemTextValue}>
            ₹{totalPNL.toFixed(2)}
          </Text>
        </View>
      </View>
  );
};

export default FooterSection;