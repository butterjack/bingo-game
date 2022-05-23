import React from 'react'
import Board from './Board';
import Confetti from './Confetti';

const SQUARE_NAMES = [
  'Hello, hello?',
  '(child noises in the background)',
  '(load painful echo/feedback)',
  'Can someone grant presenter rights?',
  'Sorry, I didn\'t find the conference id',
  'Do you see my screen?',
  'Next slide, please',
  'can you email that to everyone?',
  'I was having connection issues',
  'let\'s wait for ___!',
  'I need to jump to another call',
  'Can we take this offline?',
  'I\'ll have to get back to you',
  'You will send the minutes?',
  'Can everyone go on mute',
  'is ___ on the call?',
  'sorry, I had problems logging in',
  'Who just joined?',
  'Sorry, I was on mute',
  'Could you please get closer to the mic',
  'Could you share this slides afterwards?',
  '(animal noises in the background)',
  'Sorry, something ___ with my calendar',
  'Can you repeat, please?',
  'Tsssst',
];
  
class Bingo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: this.getSquares(),
      winLines: 0,
      toggle: false,
    }
  }
    
  getSquares() {
    if (window.localStorage) {
      var savedGame = JSON.parse(window.localStorage.getItem('bingo'));
      if (savedGame)
        return savedGame;
      else {
        var squares = this.newSquares();
        window.localStorage.setItem('bingo', JSON.stringify(squares));
        return squares;
      }
    } else {
      return this.newSquares();
    }
  }
    
  newSquares() {
    var sq = [];
    var text = shuffle(SQUARE_NAMES);
    for (var i = 0; i < 25; i++) {
      sq.push({ stamped: false, text: text[i], win: false });
    }
    sq[12].text = 'Bingo! wubba lubba dub dub';
    sq[12].stamped = true;
    return sq;
  }
    
  handleClick(i) {
    var squares = this.state.squares;
    squares[i].stamped = !squares[i].stamped;
    squares.forEach(function(square) {
      square.win = false;
    });
    
    const winLines = hasBingo(this.state.squares);
    if (winLines.length > 0) {
      
      winLines.forEach(function(line) {
        line.forEach(function(j) {
          squares[j].win = true;
        });
      });
    }

    if(winLines.length > this.state.winLines){
      //sound effect
      const audio = new Audio("./assets/wubalubadubdub.mp3")
      audio.play()
      //confetti effect
      this.setState({toggle: true})
      setTimeout(()=>{this.setState({toggle: false})}, 3000)
    }
      

    if(winLines.length !== this.state.winLines)
      this.setState({winLines: winLines.length})
      
    
    this.setState({ squares });
    
    if (window.localStorage) {
      window.localStorage.setItem('bingo', JSON.stringify(squares));
    }
  }
  
  newGame() {
    var squares = this.newSquares();
    if (window.localStorage) {
      window.localStorage.setItem('bingo', JSON.stringify(squares))
    }
    this.setState({ squares });
  }
    
  render() {
    return(
      <div className="card clearfix">
        <Confetti toggle={this.state.toggle}/>
        <div className="col-letters">
          <span>B</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>
        </div>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
        <div className='card-info'>
          <button className="new-game" onClick={() => this.newGame()}>
            New Card
          </button>
          <p> You have <span className='bingo-num'>{this.state.winLines}</span> bingos</p>
        </div>
      </div>
    )
  }
} 
  
  
  
  
  
// Helpers
function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
}

function hasBingo(squares) {
    const lines = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];

    return lines.filter((line) => {
        if (line.every(function(l) { return squares[l].stamped; })) {
        return line;
        }
    });
}

export default Bingo;
  
  
  