import React from 'react';
import Generate from './Generate.js';

class Saved extends Generate {
constructor(props){
    super(props);

}
  render(){
     const {formData} = this.props;
     let rows = []
     {this.items.map(item =>{ 
        return(
          <tr>
            <td>{item.pinone}</td>
            <td>{item.pintwo}</td>
            <td>{item.pinthree}</td>
          </tr>
          ); 
        })}
      return(
        <div id="Generate">
          <table>
            <tr>
              <th>pinone</th>
              <th>pintwo</th>
              <th>pinthree</th>
              <th>pinfour</th>
              <th>pinfive</th>
            </tr>
            {rows}

          </table>
        </div>
      );
    }
   }


   export default Saved;