import React from 'react';
import Repo from 'components/repo';

class RepoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                {
                    this.props.repos.map((repo) =>
                        <Repo repo={repo}></Repo>
                    )
                }
            </>
        )
    }
}

export default RepoList;