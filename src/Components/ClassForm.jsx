import React, { Component } from 'react';

class ClassForm extends Component {
    render() {
        return (
            <div>
               <form class="form-inline" style={{backgroundColor: "pink"}}>
  <div class="form-group">
  <h1>ClassForm</h1>
    <label for="exampleInputName2">Name  <br/></label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Name" />
     <br/>
     <br/>

  <div class="form-group">
    <label for="exampleInputName2">Password  <br/></label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Password" />
     <br/>
     <br/>

  <div class="form-group">
    <label for="exampleInputEmail2">Email  <br/></label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email" />
  </div>
  </div>
  </div>
  <br/>

  <button type="submit" class="btn btn-default" style={{backgroundColor: "green"}}>Submit</button>
  <br/><br/>
</form> 
            </div>
        );
    }
}

export default ClassForm;