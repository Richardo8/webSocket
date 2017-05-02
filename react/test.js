import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Hello extends React.Component{
//     render(){
//         return (
//             <div>
//                 hello
//             </div>
//         )
//     }
// }

/*
* 将被废弃掉*/
// const Button = React.createClass({
//     getDefaultProps(){
//         return {
//             color: 'blue',
//             text: 'Confirm'
//         }
//     },
//     render(){
//         const {color, text} = this.props;
//
//         return (
//             <button className={`btn btn-${color}`}>
//                 <em>{text}</em>
//             </button>
//         )
//     }
// })

/*
* ES56 CLASS*/
// class Button extends Component{
//     constructor(props){
//         super(props);
//     };
//
//     static defaultProps = {
//         color: 'blue',
//         text: 'confirm',
//     };
//
//     render(){
//         const{ color, text } = this.props;
//         return (
//             <button className={`btn btn-${color}`}>
//                 <em>{text}</em>
//             </button>
//         )
//     }
// }

/*无状态函数*/
function Button({ color = 'blue', text = 'Confirm'}) {
    return (
        <button className={`btn btn-${color}`}>
            <em>{text}</em>
        </button>
    )
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
)