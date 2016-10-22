import React from 'react';

class Tabs extends React.Component {
  constructor(array) {
    super(array);
    this.state = {
      index: 0
    };
  }

  changeTab(index){
    this.setState({index:index});
  }

  render(){
    return(
      <article id="tab-article">
        <ul>
          {
            this.props.array.map((object, index) => (
              <span onClick={this.changeTab.bind(this, index)} key={index}
                className="tab-header">{index}</span>
            )
          )}
        </ul>
        <div>
          <h3>{this.props.array[this.state.index].title}</h3>
          <p>{this.props.array[this.state.index].content}</p>
        </div>
      </article>
    );
  }


}

export default Tabs;
