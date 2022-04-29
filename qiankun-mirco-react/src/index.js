import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props) {
    const { container } = props;
    ReactDOM.render(
        <React.StrictMode>
            <Router
                basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <App />
            </Router>
        </React.StrictMode>,
        container
            ? container.querySelector('#root')
            : document.querySelector('#root'),
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
        container
            ? container.querySelector('#root')
            : document.querySelector('#root'),
    );
}
