import React, { Component } from 'react';
import "./selectList.scss"

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: null,
        }
        this.onSelectBackground = this.onSelectBackground.bind(this)
    }
    onSelectBackground = (event) => {
        this.setState({bgColor: event.target.value})
    }
    render() {
        let styles = {};
        if (this.state.bgColor) {
            styles.backgroundColor = this.state.bgColor;
        }


        return(
            <select size="1" onChange={this.onSelectBackground} style={styles}>
                <option className="none" value="none">None</option>

                <option className="black" value="black">Black</option>
                <option className="white" value="white">white</option>
                <option className="blue" value="blue">blue</option>
                <option className="green" value="green">green</option>
                <option className="brown" value="brown">brown</option>
                <option className="lightGreen" value="lightGreen">lightGreen</option>
                <option className="orange" value="orange">orange</option>
                <option className="pink" value="pink">pink</option>
                <option className="purple" value="purple">purple</option>
                <option className="red" value="red">red</option>
                <option className="turquoise" value="turquoise">turquoise</option>
                <option className="yellow" value="yellow">yellow</option>
            </select>
        )
    }
}
export default Test;

{/* <div>
<input type="color" id = "color" />
</div> */}