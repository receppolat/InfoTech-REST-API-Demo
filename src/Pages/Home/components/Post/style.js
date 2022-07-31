import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        marginBottom: '2%',
        marginLeft: '2%'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: "center",
        elevation: 5,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        textAlign: "center"
      }
})

export default styles;