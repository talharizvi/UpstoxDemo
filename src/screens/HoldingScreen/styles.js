import { Colors } from "../../utils/constant";

const styles = {
    container: {
        flex: 1,
    },
    listStyle: {
        backgroundColor: Colors.secondary
    },
    listContentStyle: {
        flexGrow: 1
    },
    loaderView: {
        flex:1, 
        justifyContent:'center'
    },
    parentView: {
        justifyContent:'space-between',
        flex:1
    },
    bottomSafeAreaView: {
        flex: 0, 
        backgroundColor: Colors.secondary
    }
};
  
  export default styles;