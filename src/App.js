// http://jservice.io/api/random
import image from './photos/jeopardytitle.jpeg';
import {Component} from 'react';
import './App.css';
import Question from './components/Question';
import Category from './components/Category';
import Points from './components/Points';
import Score from './components/Score';

class App extends Component {

  state = {
    questionObject: null,
    
  }

  handleClick = async () => {
      try {
      const response = await fetch('http://jservice.io/api/random');
      const data = await response.json();
      
      this.setState({questionObject: data[0] })
      console.log(this.state.questionObject.question)
  }catch (err) {
    console.log(err)
  }
  }

  render () {
    return (
      <div className="container">
        <header> <img src={image} height={300} width={700} alt={'jeopardytitle'} /> </header>

        <button className='button' onClick={this.handleClick}>Get Trivia Question</button>
        {/* {this.state.question && <Question question={this.state.question}showAnswer={this.state.showAnswer}/>} */}
    
      <div className='gameBoard'>
        {this.state.questionObject && <Question questionObject={this.state.questionObject} />}
        {this.state.questionObject && <Category questionObject={this.state.questionObject}/>}
        {this.state.questionObject && <Points questionObject={this.state.questionObject}/>}
        {this.state.questionObject && <Score questionObject= {this.state.questionObject}/>}
      </div>
      
      </div>
  );

  }
}

export default App;
