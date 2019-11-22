import React,{Component} from 'react';
import './ClearBtn.css';


class ClearBtn extends Component {
   
    render(){
        return (
          <div className="clear-btn"
            onClick={()=>this.props.handleClear()}
            >
            {this.props.children}
    </div>
  )
    }
}

export default ClearBtn;
