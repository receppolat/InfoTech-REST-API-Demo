import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        width,
        height: height * .2,
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    image:{
        width :20,
        height:20
    },
    imageContainer: {
        backgroundColor: 'rgba(255,255,255,.7)',
        padding: '2%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    discountContainer:{
        position: 'absolute',
        right: '2%',
        top: 0,
        backgroundColor: 'yellow',
        padding: '2%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
        flexDirection: 'row'
    },
    ratingContainer: {
        position: 'absolute',
        flexDirection: 'row',
        left: '2%',
        top: 0,
        backgroundColor: 'blue',
        padding: '2%',
        borderBottomLeftRadius:40,
        borderBottomRightRadius: 40,
        width: 75,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default styles;