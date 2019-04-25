import React from 'react'

class MenuBar extends React.Component {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  handleClick = (e) => {
    console.log(e)
    e.persist()
    this.props.changeActive(e.target.id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a className={this.props.active === "profile" ? "item active" : "item"} id="profile" onClick={this.handleClick}>
          <i className="user large icon" id="profile"/>
        </a>

        <a className={this.props.active === "photo" ? "item active" : "item"} id="photo">
          <i className="photo large icon" id="photo" onClick={this.handleClick}/>
        </a>

        <a className={this.props.active === "cocktail" ? "item active" : "item"} id="cocktail">
          <i className="cocktail large icon" id="cocktail" onClick={this.handleClick}/>
        </a>

        <a className={this.props.active === "pokemon" ? "item active" : "item"} id="pokemon">
          <i className=" themeisle large icon" id="pokemon" onClick={this.handleClick}/>
        </a>
      </div>
    )
  }

}

export default MenuBar
