import React, { Component } from 'react';


class AddPlayerForm extends Component {
    state = {
      value: ""
    };

    handleValueChange = (e) => {
        this.setState({value: e.target.value });
    }
   

    render() {
        console.log(this.state.value)
    return (
        <form>
            <input
             type="text"
             value={this.state.value}
             onChange={this.handleValueChange}
             placeholder="Enter a player's name."
             />
             <input
              type="submit"
              onChange={this.handleValueChange}
              value="Add player"
              />
        </form>

    );
    }
}

export  default AddPlayerForm;  