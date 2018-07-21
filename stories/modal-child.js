

render(){
    return (
      <div>
        {this.state.message}
        {this.props.children.map((item) => {
          if (item.type == 'span') {
          return <div> I wrapped the item {item}</div>
      </div>
      })}
    )
  }
}

export default Child
