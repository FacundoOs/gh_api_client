import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import { getSearchUser} from "../modules/getSearchUser"

class GHSearch extends Component {
  state = {
    items: {},
  };

  searchUser = async (e) => {
    let result = await getSearchUser();
    this.setState({
      items: result,
    });
  };

  render() {
    let items = this.state.items.login;

    return (
      <>
        <Input data-cy="input" type="text" name="search" placeholder="Input GH username" />
        <Button onClick={this.searchUser} data-cy="search" name="search">
          Search
        </Button>
    <p data-cy="user-data">{items}</p>
      </>
    );
  }
}

export default GHSearch;
