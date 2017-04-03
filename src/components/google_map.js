import React, { Component } from 'react'

class GoogleMap extends Component {
    // Life-cycle method once method has been mounted/rendered to the screen
    componentDidMount() {
        // Create an embedded Google maps
        // Reference to an HTML node that we want to render this map to (this.refs.map)
        new google.maps.Map(this.refs.map, {
            // city width zoom
            zoom: 12,
            // center on provided co-ordinates
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return (
            // this.refs.map
            <div ref='map' />
        )
    }
}

export default GoogleMap