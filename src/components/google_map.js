/*global google*/
import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidUpdate(){
    console.log('google', this.props);
    var  map  =  new  google.maps.Map(this.map.current, {  
      center:  new  google.maps.LatLng(this.props.lat,  this.props.lng),  
      mapTypeId:  google.maps.MapTypeId.ROADMAP,  
      zoom:  11  
    });  
    var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
      getTileUrl:  function(coord,  zoom)  {  
        return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=_TOKEN_ID_";  
      },  
      name:  "Air  Quality",  
    });  
    map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
  }

  componentDidMount() {
    console.log('google', this.props);
    var  map  =  new  google.maps.Map(this.map.current, {  
      center:  new  google.maps.LatLng(this.props.lat,  this.props.lng),  
      mapTypeId:  google.maps.MapTypeId.ROADMAP,  
      zoom:  11  
    });  
    var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
      getTileUrl:  function(coord,  zoom)  {  
        return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=_TOKEN_ID_";  
      },  
      name:  "Air  Quality",  
    });  
    map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
  }

  render() {
    return <div className='map' ref={this.map}></div>;
  }
}

export default GoogleMap;

