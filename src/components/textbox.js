import React, { Component } from 'react';
import InlineEditable from "react-inline-editable-field";


// import Table from './table.js';

class Textbox extends Component {

 constructor() {
  super();
  this.state = {
    value:[]
  };
}

componentWillMount(){
  if (this.state.value.length===0){
   if (localStorage.getItem('myData')===null){
    var existed=[{name:'touch here...',mark:'touch here...'}]
    localStorage.setItem('myData', JSON.stringify(existed))
  }
  // localStorage.setItem('state', this.state.value);
  this.updatevisible = 'block';
  this.savebutton = 'none';
}
if (localStorage.getItem('myData')!==0){
 this.savebutton = 'block';
}
}

componentDidMount(){
  var a=JSON.parse(localStorage.getItem('myData'));
  this.setState({value: a })
}

AddnewList(){
  var existed=this.state.value
  existed.push({name:'',mark:''})
  this.setState(existed)
  this.updatevisible = 'none';
  this.savebutton = 'block';
  var a = JSON.parse(localStorage.getItem('myData'));
  this.setState({value: a })
  a.push({name:'touch here...',mark:'touch here...'});
  localStorage.setItem('myData', JSON.stringify(a));
}


editName(isChanged, val,index)
{
 this.refs.name=''
 var a = JSON.parse(localStorage.getItem('myData'));
 a[index].name=val
 this.setState({value: a })
 localStorage.setItem('myData', JSON.stringify(a));
 var name = this.state.value;
 name[index].name = val;
 this.setState({value: this.state.value });
}


editMark(isChanged, val,index)
{
 this.refs.mark=''
var mark = this.state.value;
var a = JSON.parse(localStorage.getItem('myData'));
a[index].mark=val
this.setState({value: a })
localStorage.setItem('myData', JSON.stringify(a));
mark[index].mark = val;
this.setState({value: this.state.value });
}

localStorage(){
  var existed=this.state.value
  localStorage.setItem('myData', JSON.stringify(existed));
  console.log(this.myData)
}

deleteSingleValue(hi,index){
 var a = JSON.parse(localStorage.getItem('myData'));
  a.splice(index,1)
  this.setState({value: a })
  localStorage.setItem('myData', JSON.stringify(a)); 
}

render() {
  return (
    <div className="Textbox">
    <div className=" col-sm-10">
    <table id="table" className="table-bordered table-hover"> 
    <tbody>
    <tr>
    <th>Name</th>
    <th>Mark<span className="addnew" onClick={this.AddnewList.bind(this)}>Add new</span></th> 
    </tr>
    {this.state.value.map((item,index)=>
      <tr key={index}>                            
      <td>
      <InlineEditable
      content={item.name}
      inputType = "textarea"
      displayPlaceholder="Touch here.."
      onBlur={(val, isChanged) => {this.editName(isChanged, val,index)}}
      style={{width: '200px'}}
      inputStyle={{width: '500px'}}
      ref = "name"
      className = "customClassName"
      />
      </td>

      <td>
      <InlineEditable
      content={item.mark}
      inputType = "textarea"
      displayPlaceholder="Touch here.."
      onBlur={(val, isChanged) => {this.editMark(isChanged, val,index)}}
      style={{width: '200px'}}
      inputStyle={{width: '500px'}}
      ref = "mark"
      className = "customClassName"
      />
      <div className="addnew" onClick={() => this.deleteSingleValue(this,index)}>Delete</div>
      </td>
      </tr>
      )}
    </tbody>
    </table>
    </div>
    </div>
    );
}
}

export default Textbox;
