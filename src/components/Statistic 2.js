import React, { Component } from 'react';

import TablePositions from './TablePositions';
import Matches from './Matches';
import Header from './Header';
import Footer from './Footer';

class Statistic extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="site-blocks-vs site-section bg-light">
                    <div className="container">
                        <h5 className="h5 text-uppercase text-black font-weight-bold mb-20">Estadisticas</h5>
                        <br></br>
                        <h6 className="h6 text-uppercase text-black font-weight-bold mb-3">Tabla de Posiciones</h6>
                        <TablePositions />
                        <Matches />
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Statistic;