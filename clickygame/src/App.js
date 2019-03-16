import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: [],
    score: 0,
    clickedItems: []
  };

  componentDidMount() {
    this.setState({ friends });
  }

  Friend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  shuffleFriend = (data, id) => {
      
      let i = data.length - 1;
      while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        i--;
      } 
    this.handleItemClick(id)
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends:data });
  };

  checkIfClicked = id => {
    const clickedItems = this.state.clickedItems
    // if (!checkedItems.length) return false;
    for (let i=0;  i <=clickedItems.length; i++) {
      let current = clickedItems[i];
      if (current === id) return true;
    }
    return false;
  }

  handleItemClick = id => { 

    if (this.checkIfClicked(id)) {
      this.setState({ score: 0, clickedItems: [] });
    } else if (!this.checkIfClicked(id)) {
      let newClickedItems = this.state.clickedItems
      newClickedItems.push(id)
      this.setState({ score: this.state.score + 1, clickedItems: newClickedItems });
    }
    
    // let guessedCorrectly = false;
    // const newData = this.state.data.map(item => {
    //   const newItem = { ...item };
    //   if (newItem.id === id) {
    //     if (!newItem.clicked) {
    //       newItem.clicked = true;
    //       guessedCorrectly = true;
    //     }
    //   }
    //   return newItem;
    // });
    // guessedCorrectly
    //   ? this.handleCorrectGuess(newData)
    //   : this.handleIncorrectGuess(newData);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Navbar></Navbar> */}
        <Title>Friends List</Title>
        <div className="card-text">Score: {this.state.score}</div>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            friends={this.state.friends}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
