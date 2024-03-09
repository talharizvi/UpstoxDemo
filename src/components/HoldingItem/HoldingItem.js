import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HoldingItem = ({symbol, quantity, ltp, avgPrice, index, length}) => {
  const currentValue = ltp * quantity;
  const investmentValue = avgPrice * quantity;
  const pnl = currentValue - investmentValue;

  return (
    <View style={styles.itemRooView}>
      <View style={styles.itemTopView}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.textStyle}>
          LTP: <Text style={styles.textValueStyle}>₹ {ltp.toFixed(2)}</Text>
        </Text>
      </View>

      <View style={styles.itemBottomView}>
        <Text style={styles.textStyle}>{quantity}</Text>
        <Text style={styles.textStyle}>
          P/L: <Text style={styles.textValueStyle}>₹ {pnl.toFixed(2)}</Text>
        </Text>
      </View>

      {index < length - 1 ? (
        <View style={styles.lineSepator} />
      ) : (
        <View style={styles.defaultMargin} />
      )}
    </View>
  );
};

export default HoldingItem;