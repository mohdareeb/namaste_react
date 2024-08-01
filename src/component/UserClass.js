import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
            info:""
        };
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mohdareeb")
        const json = await data.json();
        console.log(json)
        this.setState({
            info : json
        })
    }
    render(){

        return (
            <div className="user-info">
                <img src={this.state.info.avatar_url}></img>
                <h2>Name : {this.state.info.name}</h2>
                <h3>Created at  : {this.state.info.created_at}</h3>
                {/* <h3>Count : {this.state.count}</h3> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>Click to Update</button> */}
            </div>
        );
    }
}

export default UserClass;