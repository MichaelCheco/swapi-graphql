import React, { Component, Fragment } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Character from "./Character"
const CHARACTER_QUERY = gql`
    query CHARACTER_QUERY {
        people {
             birth_year
             name
             mass
             skin_color
             gender
             eye_color
        }
    }
`;
export default class Characters extends Component {
  
    render() {
        return (
            <Fragment>
                <Query query={CHARACTER_QUERY}>
                    {
                        ({ data, loading, error }) => {
                            if(loading) return <h4>Loading..</h4>
                            if(error) console.log(error)
                            return <Fragment>
                                {
                                    data.people.map(person => (
                                        <Character key={person.name} info={person} />
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        );
    }
}