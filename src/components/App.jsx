import { Component } from 'react';
import PhoneBook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React-hw-02-phonebook
        </div>
        <div>
          <PhoneBook onSubmit={this.formSubmitHandler} />
        </div>
      </div>
    );
  }
}

export default App;
