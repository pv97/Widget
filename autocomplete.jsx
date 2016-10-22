import React from 'react';

class Autocomplete extends React.Component {
  constructor({names}) {
    super();
    this.names = names;
    this.state = {
      user_input: "",
      matchwords: names
    };
  }

  changeInput(e){
    let currentInput = e.target.value;
    this.changeList(currentInput);
  }

  clickWord(word){
    this.changeList(word);
  }

  changeList(currentInput){
    let match = [];
    for (var i = 0; i < this.names.length; i++) {
      if (this.names[i].slice(0,currentInput.length) === currentInput) {
        match.push(this.names[i]);
      }
    }
    this.setState({user_input:currentInput, matchwords:match});
  }


  render(){
    return(
      <div id="root3">
        <input value={this.state.user_input} onChange={this.changeInput.bind(this)}/>
        <ul>
          {
            this.state.matchwords.map((word)=> (
              <li key={word} onClick={this.clickWord.bind(this, word)}>{word}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default Autocomplete;
