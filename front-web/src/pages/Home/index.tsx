import React from 'react';
import Typical from 'react-typical';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as GamerImage } from '../../assets/gamer.svg';
import { Link } from 'react-router-dom';
import '../../animations/animations.css';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais 
                <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        ' jogos a galera gosta mais ?',
                        2000,
                        ' os melhores jogos da atualidade ?',
                        2000
                    ]}
                />
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
            </h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                            QUERO SABER QUAIS SÃO
                    </button>
                    <div className="home-btn-icon">
                        <ArrowIcon/>
                    </div>
                </div>
            </Link>
        </div>
        <GamerImage className="home-image"/>
    </div>
);

export default Home;