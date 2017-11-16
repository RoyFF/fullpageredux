import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Wrapper = () => {
    return(
        <MultiThemeProvider>
            <App />
        </MultiThemeProvider>
    );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
