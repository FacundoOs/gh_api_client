import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  state = {
    items: {}
  }

searchUser = async (e) => {
  let result= await getSearchUser();
  this.setState({
    items: result
  })

}

  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button oncClick={this.searchUser} data-cy="search" name="search">Search</Button>
    </>
  )
}

export default GHSearch
