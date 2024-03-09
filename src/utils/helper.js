export const calculateCurrentValues = (data) => {
    return data.reduce((acc, current) => acc + (current.ltp * current.quantity), 0).toFixed(2);
  };

export const calculateTotalInvestment = (data) => {
    return data.reduce((acc, current) => acc + (current.avgPrice * current.quantity),0).toFixed(2);
}

export const calculateTodayPNL = (data) => {
    return data.reduce((acc, current) => acc + ((current.close - current.ltp) * current.quantity),0).toFixed(2); 
}