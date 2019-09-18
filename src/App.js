const Per = ({name, animal, breed}) => {
    return React.createElement( "div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed),
    ])
}

const App = () => {
    return React.createElement( "div",{}, [
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Per,{
            name: 'Luna',
            animal: 'DOg',
            breed: 'Havenses'
        }),
        React.createElement(Per,{
            name: 'Proper',
            animal: 'Bird',
            breed: 'feed'
        }),
        React.createElement(Per,{
            name: 'Morki',
            animal: 'Cat',
            breed: 'Mixed'
        }),
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))