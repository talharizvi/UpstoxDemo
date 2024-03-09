import { Colors } from "../../utils/constant";

const styles = {
    footerView: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 8,
      },
      footerItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
      },
      footerItemText: {
        color: Colors.dark,
        fontWeight: 'bold',
        fontSize: 16,
      },
      footerItemTextValue: {
        color: Colors.dark,
        fontSize: 16,
      },
};
  
export default styles;