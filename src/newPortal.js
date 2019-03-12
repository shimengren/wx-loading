import react, { Component } from 'react';
import ReactDom from 'react-dom';





export default class NewPortal extends Component{
      constructor(props){
        super(props);
        this.node = document.createElement("div");
        document.body.appendChild(this.node);
      }
      render(){
        const { children } = this.props;
        return ReactDom.createPortal(
          children,
          this.node,
        );
      }
}