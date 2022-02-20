import {Component} from 'react';
import Answer from './Answer';

class Question extends Component {
 
    state = {
      showAnswer: false,
    }
  
    handleShowAnswer = () => {
      this.setState({showAnswer: !this.state.showAnswer})
    }
  
    render() {
      const {questionObject} = this.props
  
    return(
      <div className='question'>
      <h3>Question: {questionObject.question}</h3>
      
        <div>
        {/* <h2>{}Answer: {question.answer}</h2> */}
        <button onClick={this.handleShowAnswer}> Show/Hide Answer </button> 
        {this.state.showAnswer && <Answer answerwrong={questionObject.answer} />}
        </div>
  
      </div>
    )
  }
  }

  export default Question;