import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/Nav"
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    guessed: "Click any image to begin."
  };


  componentDidUpdate(){
    if (this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score});
    }
  }

  followClicks = id => {

    const findAtIndex = friends.findIndex( friend => friend.id == id);
    console.log(findAtIndex);
    

    if (friends[findAtIndex].clicked == true){

      this.setState({score: 0});
      const resetFriends = friends.map(friend => friend.clicked = false);
      this.setState({friends: resetFriends});
      this.setState({guessed: "You guessed incorrectly."});

    } else if (this.state.score >= 1){

      this.setState({guessed: "You guessed correctly."});
      friends[findAtIndex].clicked = true;
      this.setState({score: this.state.score + 1});

     } else {

      this.setState({score: this.state.score + 1});
      friends[findAtIndex].clicked = true;
      this.setState({guessed: "Click another image."})
    }

    const shuffled = friends.sort(() => Math.random() - 0.5);
    this.setState({friends: shuffled});
    
  }

  render() {
    return (
    <div id="fullPage">
      <Nav
        guessed={this.state.guessed}
        score={this.state.score}
        highScore={this.state.highScore}
      />
      <div className = "container-fluid" style={{ width: 900 }}>
        <h3 style={{textAlign: 'center', fontSize: '20px'}}>Click a friend to begin. Try to click as many friends as you can without clicking the same friend twice, or you lose. Good luck!</h3> 
        <Wrapper>
        {
        this.state.friends.map(friend => {
          return <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            shake={this.state.score === 0 && this.state.highScore !== 0}
            followClicks ={this.followClicks}
          />
        })
        }
      </Wrapper>
    </div>
  </div>
  )
  }
  
}
  

export default App;

