import React, { Component } from "react";
import { Image, Button, NativeModules } from "react-native";
import Expo, {Updates} from "expo";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Spinner,
  View
} from "native-base";
import styles from "./style";
import ctrl from '../../server/controllers/inicio'
import ctrlServerLogin from '../../server/controllers/inicio';

const drawerCover = require("../../../assets/back.jpg");
const drawerImage = require("../../../assets/gabssa.png");
const datas = [];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      loading : true,
      noSesion: true,
    };
  }

  async componentWillMount() {
    let verificar = await ctrlServerLogin.getLogin()
    console.log(verificar,'<------------');
    if (verificar.res.length > 0) {
      datas.push(
        {
          name: `${verificar.res[0].nombre} ${verificar.res[0].ap}`,
          route: "Perfil",
          icon: "ios-paper-plane",
          bg: "#C5F442",
          sesion: false,
        },
        {
          name: "Inicio",
          route: "Inicio",
          icon: "md-home",
          bg: "#C5F442",
          sesion: false,
        },
        {
          name: "Información",
          route: "Detalle",
          icon: "md-information-circle",
          bg: "#C5F442",
          sesion: false,
        },
        {
          name: "Cerrar sesión",
          icon: "md-log-out",
          bg: "#C5F442",
          sesion: true,
        },
      )
    }
  }

  Redirect = async (d) => {
    if (d.sesion) {
      let sesion = await ctrl.cerrarSesion()
      Updates.reload();
    } else {
      this.props.navigation.navigate(d.route)
    }
  }


  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.Redirect(data)}
              >
              <Icon
                active
                name={data.icon}
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />
                <Left>
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
