    import React, { Component } from 'react';
    import api from '../../services/api';
    
    import './styles.css';


    export default class Main extends Component{

    state = {
        planets: [],
        planetsInf: {},
    };

        componentDidMount(){
        this.loadPlanets();
    }

    loadPlanets = async () => {
        
        const response = await api.get('/planets');
       
        this.setState({ planets: response.data.results })
    };


    prevPage = () =>{}

    nextPage = () => {



    }

    render(){
        const { planets } = this.state;
        return (
        <div className="planet-list">
            {planets.map(planet =>(
                
                <article Key={planet._id}>
                    <strong>{planet.name}</strong>
                    <p>{planet.climate}</p>
                    <a href="">Explore</a>
                </article>
            ))}
            <div className="actions">
                <button onClick={this.prevPage}>Previous</button>
                <button onClick={this.nextPage}>Next</button>
            </div>   
        </div>
        );
    }
}