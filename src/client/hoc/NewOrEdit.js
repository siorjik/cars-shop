import React from "react";

function newOrEdit(Comp) {
  class NewOrEdit extends React.Component {
    render() {
      let props;
      if(this.props) props = this.props;
      else props = null;

      return (<Comp {...props}/>);
    }
  }
  
  NewOrEdit.displayName = `NewOrEdit(${Comp.displayName || Comp.name || 'Comp'})`;
  return NewOrEdit;
}

export default newOrEdit;