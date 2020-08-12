import React , { Component } from 'react';
import Topic from './components/Topic';
// import Recommend from './components/Recommend';
import Recommender from './components/Recommender';

import List from './components/List';
import Writer from './components/Writer';
import Download from './components/Dowload';
import { connect } from 'react-redux';

import { actionCreators } from './store';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

import banner from '../../statics/banner.png';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={banner} alt="banner"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    {/* <Recommend/> */}
                    <Recommender/>
                    <Download/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    }
});
export default connect(null, mapDispatch)(Home);