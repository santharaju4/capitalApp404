import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalList: countryAndCapitalsList[0].id}

  onSelectOption = event => {
    this.setState({capitalList: event.target.value})
  }

  getCountry = () => {
    const {capitalList} = this.state
    console.log(capitalList)
    const activeCapitalList = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalList,
    )
    console.log(activeCapitalList)
    return activeCapitalList.country
  }

  render() {
    const {capitalList} = this.state
    const country = this.getCountry(capitalList)

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="countries-container">
            <select
              className="select-option"
              value={capitalList}
              onChange={this.onSelectOption}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
