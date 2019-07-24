import React from 'react';
import "./Dashboard.css";
import SideNav from './SideNav';
import Main from './Main';

export default class Dashboard extends React.PureComponent {
    render() {
        return (
            <div className="row">
                <SideNav />
                <Main />
            </div>
        );
    }
}
