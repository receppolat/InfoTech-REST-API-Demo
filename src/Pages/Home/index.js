import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Post from './components/Post'
function Home(props) {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const _user = props.route.params.response

  /*useEffect(() => {
    //Herhangi bir güncelleme olduğunda çalışacak kodlar,
    //performansı deli gibi yoracak olan şeyler
  })
    useEffect(() => {
      //Aşağıda dizi içeirisnde verilen state değerlerinin değiştiği anlarda çalışacak olan kod bloklar
      //Nadiren Mesela Yemeksepetinde bulunan kmapanyalara apiden bir tane kampanya güncellendiğini düşünelim.
      //API'yi sürekli dinleyen bir fonksiyonumuz burada state'e bağlı değişkende tutulabilir.
      //Yaygın, Sepette totalPrice değişkenimizin olduğunu varsayalım. sepete ürün eklendikçe totalPrice'ın fiyatı artırılmış oldu.
      //biz de totalPrice'a göre bir indirim hesaplatacağız. Bu indiirm koşullarını bu useEffect'te yazabilriiz.
    },[username])
  */

  useEffect(() => {
    //Sayfa başlatıldığında çalışacak olan kodlar.
    //Yani navigate edilen sayfa ilk çalıştığı an çalışacak olan kodlar
    //Bunlar genelde API'dan veri çekerken kullandığım axios/fetch işlemleri,
    //veya loading sayfası yapacaksak yazacağımız kodların default halleri.
    getInit();
  }, [])

  const getInit = () => {
    fetch('https://dummyjson.com/posts?limit=150')
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setPosts(response.posts)
      });
    fetch('https://dummyjson.com/users?limit=100&select=username,image')
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setUsers(response)
      });
  }
  const renderItem = ({ item }) => {
    let image = 'https://robohash.org/excepturiiuremolestiae.png';
    let username = 'kullancııadı';
    let user = [{ username: username, image: image }];
    if (users && users.users.lenght != 0 && users.users != undefined)
      user = users.users.filter(user => user.id == item.userId)
      console.log(user);
    return (
      <Post post={item} image={user[0].image} username={user[0].username} />
    )
  }
  const renderView = () => {
    return (
      <View style={styles.userContainer}>
        <Image source={{ uri: _user.image }} style={styles.image} />
        <Text style={styles.userText}>{_user.email}</Text>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
  return (
    <View>
      {
        loading ? <ActivityIndicator
          size="large"
          color="red"
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            right: 0,
            top: 250,
            bottom: 0,
          }} /> : renderView()
      }
    </View>
  )
}

export default Home;
