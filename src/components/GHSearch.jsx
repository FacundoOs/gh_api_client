import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
// import { getSearchUser} from "../modules/getSearchUser"
import axios from "axios";

class GHSearch extends Component {
  state = {
    items: [],
  };

  searchUser = async () => {
    let response = await axios.get("https://api.github.com/search/users?q=tom");
    debugger
    this.setState({
      items: response.data.items
    });
  };

  render() {
    debugger
    let dataShow = this.state.items.map((show) => {
      return (
        <div class="display-show" data-cy="display-show">
          {show.login}
        </div>
      );
    });
    return (
      <>
        <Input
          data-cy="input"
          type="text"
          name="search"
          placeholder="Input GH username"
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
