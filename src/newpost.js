import React from "react";
import ReactDOM from "react-dom";
import './newpost.css';


export default class NewPost extends React.Component {
  render(){
    return(
      <div className="newpost">
        <div className="date-time">
          <div className="date">{this.props.postDate}</div>
            <div className="time">{this.props.postTime} </div>
        </div>
        <div className="post"> <img src={this.props.postPic} alt="post"/> </div>
        <div className="caption"> {this.props.postCaption}</div>
      </div>
    );
  }
}


ReactDOM.render(<NewPost/>, root);
