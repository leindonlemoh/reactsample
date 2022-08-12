import React from "react";


class Clock extends React.Component{
 constructor(props){
        super(props);
        // initialize state
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
           () => this.tick(),
          1000
        );
    }

componentDidUpdate(){
    console.log("updated");
}

    componentWillUnmount(){
    // para di na mag run sa background need to clean up
        clearInterval(this.timerID);

    }
     tick(){
        // para ma update yung state onbject
        this.setState( 
        {
           date: new Date()
        } 
    );
}
    render(){
        return(
            <div>
                <h1>
                    { this.state.date.toLocaleTimeString() }
                </h1>
            </div>
        );
    }
}

export default Clock;