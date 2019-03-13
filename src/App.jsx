import React, { Component } from 'react';
import TypeChecker from 'typeco';

import SearchField from '../components/SearchField';

import './App.css';

const exampleList = [
  {
    name: 'Joe Smith',
    email: 'joesmith@gmail.com',
  },
  {
    name: 'Alan Donald',
    email: 'alan@gmail.com',
  },
];

const getMatchedList = (searchText) => {
  if (TypeChecker.isEmpty(searchText)) return exampleList;
  return exampleList.filter(item => item.name.includes(searchText) ||
    item.name.includes(searchText));
};

const ExampleList = props => (
  <div className="list-example">
    <div className="list-header">
      <ul>
        <li> Name </li>
        <li> Email </li>
      </ul>
    </div>
    <div className="list-body">
      {
        props.list.map((item, index) => (
          <ul key={index}>
            <li> {item.name} </li>
            <li> {item.email} </li>
          </ul>))
      }
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicExampleList: [...exampleList],
      onEnterExampleList: [...exampleList],
      onSearchClickExampleList: [...exampleList],
    };
    this.onBasicExampleChange = this.onBasicExampleChange.bind(this);
    this.onEnterExample = this.onEnterExample.bind(this);
    this.onSearchClickExample = this.onSearchClickExample.bind(this);
  }

  onBasicExampleChange(value) {
    this.setState({
      basicExampleList: getMatchedList(value),
    });
  }

  onEnterExample(value) {
    this.setState({
      onEnterExampleList: getMatchedList(value),
    });
  }

  onSearchClickExample(value) {
    this.setState({
      onSearchClickExampleList: getMatchedList(value),
    });
  }

  render() {
    return (      
        <div>         
          <SearchField
            placeholder="Search item"
            onEnter={this.onEnterExample}
          />
        </div>
        <div>
        <SearchField
            placeholder="Search item"
            onChange={this.onBasicExampleChange}
          />
        </div>
        <div>
        <SearchField
            placeholder="Search item"
            onSearchClick={this.onSearchClickExample}
          />
        </div>
    );
  }
}

export default App;