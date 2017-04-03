import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

const StyledTable = styled.table`
> thead > tr > th {
    text-align: center
}
> tbody > tr > td {
    text-align: center;
    vertical-align: middle;
    width: 25%
}
td:first-of-type, td:first-of-type > div {
    height: 200px;
    width: 250px;
}
`

class WeatherList extends Component {
    renderWeather(cityData) {
        const city = cityData.city.name
        // Mapping over list to pull of the temperatures
        const temperatures = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord

        return (
            <tr key={city}>
                <td ><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temperatures} units='°F' color='#22B14C' /></td>
                <td><Chart data={pressures} units='hPa' color='#6699CC' /></td>
                <td><Chart data={humidities} units='%' color='#F98A4F' /></td>
            </tr>
        )
    }

    render() {
        return (
            <StyledTable className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </StyledTable>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)