import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class GHSearch extends Component {
  state = {
    items: [],
    value: "",
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  searchUser = async () => {
    let response = await axios.get(
      `https://api.github.com/search/users?q=${this.state.value}`
    );
    this.setState({
      items: response.data.items,
    });
  };

  render() {
    let dataShow = this.state.items.map((show) => {
      return (
        <p class="display-show" data-cy="display-show">
          {show.login}
        </p>
      );
    });
    return (
      <>
        <Input
          data-cy="input"
          type="text"
          name="search"
          placeholder="Input GH username"
          onChange={this.onChangeHandler}
        />
        <Button onClick={this.searchUser} data-cy="search" name="search">
          Search
        </Button>
        <p data-cy="user-data">{dataShow}</p>
      </>
    );
  }
}

export default GHSearch;
