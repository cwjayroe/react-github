import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ViewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state;
}


const ConnectedViewPage = connect(mapStateToProps)(ViewPage);

export default ConnectedViewPage;