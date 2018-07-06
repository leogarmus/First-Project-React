import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
       <div className="wrapper">
        <SayFullName name="Petya" surname="Pupkin" link="vk.com" />
        <SayFullName name="Ivan" surname="Pupkina" link="youtube.com" />
        <SayFullName name="Sasha" surname="Durkpca" link="facebook.com" />
      </div>
    );
  }
}


function SayFullName(props){
  return(
    <div>
    <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
    <a href="{props.link}"> Ссылка нам мой профиль </a>
    </div>
    )
}



export default App;
