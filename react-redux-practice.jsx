// 1. Getting Started with React Redux

        class DisplayMessages extends React.Component {
            // change code below this line
        constructor(props) {
            super(props)
        
            this.state = {
            input: '',
            messages: []
            }
        }
            // change code above this line
            render() {
            return <div />
            }
        };

// 2. Manage State Locally First

        class DisplayMessages extends React.Component {
            constructor(props) {
            super(props);
            this.state = {
                input: '',
                messages: []
            }
            this.handleChange = this.handleChange.bind(this);
            this.submitMessage = this.submitMessage.bind(this);
            }
            // add handleChange() and submitMessage() methods here
        
            handleChange(e) {
            this.setState({ input: e.target.value })
            }
        
            submitMessage() {
            let newMessages = [... this.state.messages, this.state.input]
            this.setState({ 
                messages: newMessages, 
                input: '' 
                })
            }
        
            render() {
            let newArr = this.state.messages.map((e, i) => <li>{e}</li>)
            return (
                <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */ }
                <input type='text' value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                {newArr}
                </ul>
                { /* change code above this line */ }
                </div>
            );
            }
        };

// 3. Extract State Logic to Redux

        // define ADD, addMessage(), messageReducer(), and store here:
        const ADD = 'ADD';

        function addMessage(message) {
        return {
            type: ADD,
            message: message
        }
        }

        let messageReducer = (state = [], action) => {
        switch(action.type) {
            case ADD:
            return [...state, action.message]

            default:
            return state;
        }
        }

        const store = Redux.createStore(messageReducer);

// 4. Use Provider to Connect Redux to React

        const Provider = ReactRedux.Provider;

        class AppWrapper extends React.Component {
        // render the Provider here
        render() {
            return (
        <Provider store={store}>
            <DisplayMessages />
        </Provider>
            )}
        // change code above this line
        };

//  5. Map State to Props

        const state = [];

        // change code below this line
        function mapStateToProps(state) {
        return {
            messages: state
            };
        };

// 6. Map Dispatch to Props

        const addMessage = (message) => {
            return {
            type: 'ADD',
            message: message
            }
        };
        
        // change code below this line
        
        function mapDispatchToProps(dispatch) {
            return {
                submitNewMessage: (newMes) => {dispatch(addMessage(newMes))}
            }
        }

//  7. Connect Redux to React

        const addMessage = (message) => {
            return {
            type: 'ADD',
            message: message
            }
        };
        
        const mapStateToProps = (state) => {
            return {
            messages: state
            }
        };
        
        const mapDispatchToProps = (dispatch) => {
            return {
            submitNewMessage: (message) => {
                dispatch(addMessage(message));
            }
            }
        };
        
        class Presentational extends React.Component {
            constructor(props) {
            super(props);
            }
            render() {
            return <h3>This is a Presentational Component</h3>
            }
        };
        
        const connect = ReactRedux.connect;
        // change code below this line
        let ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)


// 8. Connect Redux to the Messages App

        const Provider = ReactRedux.Provider;
        const connect = ReactRedux.connect;

        // define the Container component here:
        const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

        class AppWrapper extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            // complete the return statement:
            return(
            <Provider store={store}>
            <Container />
            </Provider>
            )
        }
        };


// 9. Extract Local State into Redux

            // Redux:
        const ADD = 'ADD';

        const addMessage = (message) => {
        return {
            type: ADD,
            message: message
        }
        };

        const messageReducer = (state = [], action) => {
        switch (action.type) {
            case ADD:
            return [
                ...state,
                action.message
            ];
            default:
            return state;
        }
        };

        const store = Redux.createStore(messageReducer);

        // React:
        const Provider = ReactRedux.Provider;
        const connect = ReactRedux.connect;

        // Change code below this line
        class Presentational extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            input: '',
            }
            this.handleChange = this.handleChange.bind(this);
            this.submitMessage = this.submitMessage.bind(this);
        }
        handleChange(event) {
            this.setState({
            input: event.target.value
            });
        }
        submitMessage() {
            this.props.submitNewMessage(this.state.input);
            this.setState({
            input: '',
            });
        }
        render() {
            return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                value={this.state.input}
                onChange={this.handleChange}/><br/>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                {this.props.messages.map( (message, idx) => {
                    return (
                        <li key={idx}>{message}</li>
                    )
                    })
                }
                </ul>
            </div>
            );
        }
        };
        // Change code above this line

        const mapStateToProps = (state) => {
        return {messages: state}
        };

        const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (message) => {
            dispatch(addMessage(message))
            }
        }
        };

        const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

        class AppWrapper extends React.Component {
        render() {
            return (
            <Provider store={store}>
                <Container/>
            </Provider>
            );
        }
        };

// 10. Moving Forward From Here

        // import React from 'react'
        // import ReactDOM from 'react-dom'
        // import { Provider, connect } from 'react-redux'
        // import { createStore, combineReducers, applyMiddleware } from 'redux'
        // import thunk from 'redux-thunk'

        // import rootReducer from './redux/reducers'
        // import App from './components/App'

        // const store = createStore(
        //   rootReducer,
        //   applyMiddleware(thunk)
        // );

        // ReactDOM.render(
        //   <Provider store={store}>
        //     <App/>
        //   </Provider>,
        //   document.getElementById('root')
        // );

        // change code below this line
        console.log('Now I know React and Redux!')
                        