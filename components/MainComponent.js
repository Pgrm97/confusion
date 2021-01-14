import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent'
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promos: state.promos,
      leaders: state.leaders
    }
  }

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
})

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#8b0000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
    Dishdetail: { screen: Dishdetail }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#8b0000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 :  Constants.statusBarHeight }}>
                <MainNavigator />
            </View>            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);