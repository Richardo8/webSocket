import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
    render(){
        return (
            <div>
                hello
            </div>
        )
    }
}

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

ReactDOM.render(
    <Hello />,
    <Button />,
    document.getElementById('root')
)