import React, { Component } from 'react'
import './App.css'
import ModalComponent from './components/Modal';
import { getPokemonList, addThisCard } from './actions';
import { CardWrapper, ListWrapper } from './styledComponnets'
import { connect } from 'react-redux';
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}


class App extends Component {
  constructor(props){
  	super(props);
  	this.state = { modalShow: false};
  }

  renderCardList(list) {
    const result = list.map(card => this.renderCard(card));
    return result;
  }

  attackCalculation(data) {
    const power = data.length;
    if(50*power > 100) {
      return 100;
    }
    return 50*power;
  }
  weaknessCalculation(data) {
    const weak = data.length;
    if(100*weak > 100) {
      return 100;
    }
    return 100*weak;
  }

  happyCalculation(data) {
    //(hp / 10) + (damage /10 ) + 10 - (weak)) / 5
  }

  renderCard(card) {
    //name img hp str weak rate
    return (
      <CardWrapper key={card.id} style={{width: '50%', height: '342px'}}>
        <img src={card.imageUrl} alt=""/>
        <div>
          <div>{card.name}</div>
          <div>hp{card.hp}</div>
          <div>str{card.attacks && this.attackCalculation(card.attacks)}</div>
          <div>weak{card.weaknesses && this.weaknessCalculation(card.weaknesses)}</div>
          <div>{card.name}</div>
        </div>
      </CardWrapper>
    );
  }

  showAddModal() {
    this.setState({ modalShow: true });
  }

  render() {
    const { modalShow } = this.state;
    const { getPokemonListProps, queryList, addThisCardProps, myList } = this.props;
    console.log(myList);
    return (
      <div className="App" style={{height: '100%'}}>
        <ListWrapper>{myList && this.renderCardList(myList)}</ListWrapper>
        <button onClick={()=> this.showAddModal()}>ADD</button>
        {modalShow && <ModalComponent
          getPokemonList={filter => getPokemonListProps(filter)}
          list={queryList}
          addThisCard={card=>addThisCardProps(card)}
          closeModal={()=>this.setState({modalShow: false})}
          />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      myList: state.main.toJS().myList,
      queryList: state.main.toJS().queryList,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getPokemonListProps: filter => dispatch(getPokemonList(filter, dispatch)),
        addThisCardProps: card => dispatch(addThisCard(card, dispatch)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
