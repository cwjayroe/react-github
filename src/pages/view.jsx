import React from 'react';
import { connect } from 'react-redux';
import { QueryRenderer } from 'react-relay';
import environment from 'enivornment';
import graphql from 'babel-plugin-relay/macro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


class ViewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount = () => {
    //     if (!this.props.authenticated) {
    //         this.props.history.push('/')
    //     }
    // }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`query viewQuery {
                        viewer {
                            bio
                            name
                            email
                            avatarUrl
                            id
                            login
                            watching {
                                totalCount
                            }
                            gists {
                                totalCount
                            }
                            repositories {
                                totalCount
                            }
                        }
                    }
                `}
                variables={{}}
                render={({ error, props }) => { return this.buildPage(error, props) }}
            />
        )
    }

    buildPage = (error, data, match) => {
        if (error) {
            return <div>Error!</div>;
        }
        if (!data) {
            return <div>Loading...</div>;
        }

        return (
            <>
                <Container className='mt-5 d-flex justify-content-center'>
                    <div>
                        <Image src={data.viewer.avatarUrl} style={{ maxWidth: "100px" }} roundedCircle />
                        <div style={{ textAlign: "center" }}>{data.viewer.login}</div>
                    </div>
                </Container>
                <Container style={{ marginTop: '2rem' }}>
                    <Row>
                        <Col>
                            <Link to={`/gists`} style={{ textDecoration: 'none', color: 'black' }}>
                                <Card className='d-flex flex-row justify-content-around align-items-center' style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
                                    <div style={{ fontWeight: 600, fontSize: 20 }}>Gists</div>
                                    <div>{data.viewer.gists.totalCount}</div>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Card className='d-flex flex-row justify-content-around align-items-center' style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
                                <div style={{ fontWeight: 600, fontSize: 20 }}>Repos</div>
                                <div>{data.viewer.repositories.totalCount}</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='d-flex flex-row justify-content-around align-items-center' style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
                                <div style={{ fontWeight: 600, fontSize: 20 }}>Watching</div>
                                <div>{data.viewer.watching.totalCount}</div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


const mapStateToProps = state => {
    return state;
}


const ConnectedViewPage = connect(mapStateToProps)(ViewPage);

export default ConnectedViewPage;