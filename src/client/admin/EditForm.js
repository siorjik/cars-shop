import React from "react";

import newOrEdit from "./../hoc/NewOrEdit";

let EditForm = (props) => {
  let form;
  let nameField, typeField, classField, priceField, hotField;

  let saveData = (ev) => {
    ev.preventDefault();
    let data = {
      name: nameField.value,
      type: typeField.value,
      classProd: classField.value,
      price: priceField.value,
      hot: hotField.value
    };
    props.saveEdit(data);
  }

  let focusForm = (ev) => {
    ev.target.style.border = "1px solid grey";
  }

  if(props.product) {
    let {name, type, img, classProd, price, hot} = props.product;
    form = (
      <form className="prod-form" onSubmit={saveData}>
        <label>Name:</label> <input type="text" defaultValue={name} ref={input => nameField = input}/><br/><br/>
        <label>Type:</label> <input type="text" defaultValue={type} ref={input => typeField = input} disabled/><br/><br/>
        <label>Class:</label> <input type="text" defaultValue={classProd} ref={input => classField = input}/><br/><br/>
        <label>Price:</label> <input type="text" defaultValue={price} ref={input => priceField = input}/><br/><br/>
        <label>Hot:</label> <input type="text" defaultValue={`${hot}`} ref={input => hotField = input}/><br/><br/>
        <button>Save</button>
        <input type="button" value="Cancel" onClick={props.closeEdit}/>
      </form>
    );
  }
  else {
    form = (
      <form onFocus={focusForm} className="prod-form-new" ref={props.formRef}>
        <label>Name:</label> <input name="name" type="text" ref={input => nameField = input}/><br/><br/>
        <label>Type:</label> <br/>{props.selectType}<br/><br/>
        <label>Class:</label> <input name ="classProd" type="text" ref={input => classField = input}/><br/><br/>
        <label>Price:</label> <input name="price" type="text" ref={input => priceField = input}/><br/><br/>
        <label>Hot:</label> <input name="hot" type="text" ref={input => hotField = input}/><br/><br/>
      </form>
    );
  }
  
  return (<div>{form}</div>);
}

export default newOrEdit(EditForm);