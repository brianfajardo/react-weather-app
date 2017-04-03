import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }

        // need to bind context of this when using a callback function
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
        e.preventDefault()
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault()

        // Now fetch weather data from API
        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' })
    }

    render() {
        return (
            <form
                className='input-group'
                onSubmit={this.onFormSubmit}>
                <input
                    placeholder='Find weather forecasts for your favourite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>
                        Search
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    // Allow actions to flow down into the middleware and then the reducers
    // inside Redux app
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)