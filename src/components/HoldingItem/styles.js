import { Colors } from "../../utils/constant"

const styles = {
    itemRooView: {
        marginHorizontal: 12,
        marginVertical: 8,
      },
      itemTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      itemBottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      textStyle: {
        color: Colors.dark,
        fontSize: 16,
        fontWeight: '400',
      },
      symbolText: {
        color: Colors.dark,
        fontWeight: 'bold',
        fontSize: 16,
      },
      textValueStyle: {
        fontWeight: '600',
        fontSize: 16,
        color: Colors.dark,
      },
      lineSepator: {
        height: 1,
        backgroundColor: Colors.darkGrey,
        marginTop: 8,
        marginBottom: -8
      },
      defaultMargin: {
        marginTop: 8,
        marginBottom: -8
      },
}

export default styles