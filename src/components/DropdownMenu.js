import React, {Component} from 'react';
import _ from 'lodash';

export default class DropdownMenu extends Component{
      constructor() {
        super();
        this.state = {
           dropdownOpen: false,
        };
        this.peopleProperties = ['blackHair', 'glasses', 'smile', 'hat']
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

 render(){
     return(
         <div className="DropdownContainer">
           <p>Does the person have:</p> 
           <div className="Dropdown" onClick={this.toggleDropdown}>
             {this.displayDropdown()}
    
           </div>
         </div>
     )
 }
 displayDropdown() {
     if(this.state.dropdownOpen){
        return (
            <div className="attributeContainer">
                 {_.map(this.peopleProperties, attribute=>{
                     return <div onClick={()=>{this.clickFilter(attribute)}}>{attribute}</div>
                 
                 })}
             </div>
        )
    }
 }
 toggleDropdown(){
     var current = this.state.dropdownOpen
     console.log(this.state.dropdownOpen);
this.setState({
    dropdownOpen: !current
})
 }
 clickFilter(attribute){
    this.props.updateSelectAttributes(attribute);
 }    
}



