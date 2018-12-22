import styled from 'styled-components';
export const ModalWrapper = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  top: 0;
  .modal-container {
    width: 90%;
    height: 90%;
    background: #fff;
    margin: auto;
    margin-top: 3%;
    overflow: scroll;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CloseButton = styled.div`
position: absolute;
background: #fff;
border-radius: 5px;
padding: 3px;
top: 0;
right: 4px;
`

export const ListWrapper = styled.div`
overflow: auto;
height: 96%;
`
