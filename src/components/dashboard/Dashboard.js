import React, { Component } from 'react';

import Sidebar from '../sidebar/Sidebar';
import Topbar from '../sidebar/Topbar';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Sidebar />
                <div id="content">
                    <Topbar />
                </div>
            </div>
        )
    }
}
