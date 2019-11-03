import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css"

export default class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo : [],
            viewAll: false 
        };
    
    this.onChangeView = this.onChangeView.bind(this);
    }
    onChangeView(e){
        this.setState({
            viewAll: e.target.checked
        });
    }

    componentDidMount(){
        const user = this.props.location.state.user2;
        const url  = "https://jsonplaceholder.typicode.com/todos?userId=" + user.id;
        fetch(url)
        .then(response => response.json())
        .then( data =>{
            this.setState({
                todo: data,
        
            });
        }); 
    }
    render(){
        const todoDet = this.state.todo.map(todo1 => {
            if(todo1.completed !=this.state.viewAll){
                return(
                    <tobody>
                        <tr key={todo1.id}>
                            <td>{todo1.title}</td>
                        </tr>
                    </tobody>
                )
            }
        
        })
        const todoDet1 =this.state.todo.map(todo2 => {
            return(
                <tobody>
                    <tr key={todo2.id}>
                        <td>{todo2.title}</td>
                    </tr>
                </tobody>
            )
        });
        const { fromPath }  = this.props.location.state;
        return(
            <div>
            <div>
                <input type="checkbox"
                value={todoDet}
                onChange={this.onChangeView}
                checked={this.state.viewAll}
                />
                <span> View All</span>
            </div>
            <div className="container">
            <div className="card">
                <div className="card-header">User Details</div>
                <div className="card-body">
                    <table className="table">
                       {this.state.viewAll ? <div>{todoDet1}</div> :<div>{todoDet}</div>}
                    </table>
                </div>
                <div className="card-footer">
                <Link className="btn btn-primary" to={fromPath}>Go Back</Link>
            </div>
            </div>
            
            </div>
            </div>
            
        )
    }
}