import React, {Component} from 'react'
import List from './List';

class Question extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    
    handleClick(e){
        this.setState({ show: !this.state.show})
    }
    
    
    render(){
        const item  = this.props.item
        const show  = this.props.show
        
        var list
        
        if(show){
            
            list = (
            
                <div>
                    <List question_id = {item.id} />
                    <button onClick={(e) => this.handleClick(e)}> Hide Answer </button>
                </div>
                    
            )
        }else{
            
            list= <button onClick={(e) => this.handleClick(e)}> Show answers </button>
        }
        return(
            <li>
                <h4>{item.question}</h4> 
                <h6>{item.author}</h6>
            </li>
        )
    }
    
}

export default Question