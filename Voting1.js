let jsLib = ['React','Vue','Angular','Ember'] 
let h1Text = 'Vote Your JS Library!'
/*
const Tittle = (props => {
    const { text } =props;
    return React.createElement(Title, {text:})
})*/

function wrapperDiv (props){
    return React.createElement('div', null, 
        React.createElement(Title, {h1Text} ),
        React.createElement(jsFunctions,{jsLib} )
    )
  
}



function Title (props) {
    
     return React.createElement('h1', null, props.h1Text)
//    return React.createElement(jsFunctions,{jsLib}, h1Text )
    //return React.createElement(jsFunctions, h1Text, h1Text)
}

function jsFunctions (props) {
    //console.log(props)
    let arr = props.jsLib
    //console.log ("arr: " +arr)

    return React.createElement('div', null, arr.map((str, idx) => {
        return React.createElement('h3', {key:idx}, str)
    }))
}



var styles = {
    row: {height: '40px',width:'200px', display:'inline-block', display: 'flex', alignItems:'center'}
    
}

ReactDOM.render(
    // React.createElement(Title, {style: {...styles.cell}, jsLib, }, ''),
    React.createElement(wrapperDiv, {style: {...styles.cell}, jsLib, h1Text }, ''),
    document.getElementById('root')
)

/*


const Title = (props) => {
    const { text } = props;
    return React.createElement('h1', null, text);
}
const App = (props) => {
    return React.createElement('div', null,
    React.createElement
    
    (Title, { text: 'Title one!' } ),
    React.createElement(Title, { text: 'Title two!!' } ),
    React.createElement(Title, { text: 'Title three!!!' } )
)
}
*/