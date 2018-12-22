import React from 'react';
import { ModalWrapper, CardWrapper, CloseButton } from '../../styledComponnets';
class ModalComponent extends React.Component {
  componentDidMount() {
    this.props.getPokemonList({limit: 30, name: '', type: '', });
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
      <CardWrapper key={card.id}>
        <img src={card.imageUrl} alt=""/>
        <div>
          <div>{card.name}</div>
          <div>hp{card.hp}</div>
          <div>str{card.attacks && this.attackCalculation(card.attacks)}</div>
          <div>weak{card.weaknesses && this.weaknessCalculation(card.weaknesses)}</div>
          <div>{card.name}</div>
        </div>
        <div onClick={()=> this.props.addThisCard(card)}>add</div>
      </CardWrapper>
    );
  }

  render() {
    console.log(this.props.list);
    const { list } = this.props;
    return (
      <ModalWrapper>
        <div className="modal-container">
          <input type='input' />
          {list.cards && this.renderCardList(list.cards)}
        </div>
        <CloseButton onClick={()=> this.props.closeModal()}>close</CloseButton>
      </ModalWrapper>
    )}
}
export default ModalComponent
