import React from 'react';
import Covid from "./images/covid-danger-data.png";
import Inn from "./images/InnAtTheEdge.png";
import Planner from "./images/dailyplanner.png";
import CatBurger from "./images/catburgers.png";

function Portfolio() {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <header className="col-12"><h2>Portfolio</h2></header>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Covid} alt='screenshot of Covid Danger Data website, with a map of california overlayed by counties colored by covid outbreak severity and icons for active wildfires' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://clydebaron2000.github.io/Covid-Danger-Data/">Covid Danger Data</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="http://github.com/clydebaron2000/Covid-Danger-Data" target="_blank" rel="noopener noreferrer">Covid Danger Data Github repo</a></div>
                    </div>

                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Inn} alt='screenshot of a Multi User Dungeon (MUD) - a text based rpg.' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://innattheedge.herokuapp.com">Inn At The Edge of Copyright</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://github.com/n-lambert/Inn-At-The-Edge-of-Copyright" target="_blank" rel="noopener noreferrer">Inn At The Edge of Copyright repo</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Planner} alt='screenshot of daily planner website, with white background and gray, red, and green past, present, and future timeslot sections' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://rebgrasshopper.github.io/dailyplanner/">Daily Planner</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="http://github.com/rebgrasshopper/dailyplanner" target="_blank" rel="noopener noreferrer">Daily Planner Github repo</a></div>
                    </div>
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={CatBurger} alt='screenshot of Cat Burgers website with galaxy background and cats along the edges.' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://eatburgershw.herokuapp.com">Cat Burgers</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="http://github.com/rebgrasshopper/EatBurgers" target="_blank" rel="noopener noreferrer">Cat Burgers Github repo</a></div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Portfolio;