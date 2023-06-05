import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0,0,0, 0.72);
  z-index: 2;
`

export const ModalContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 35vw;
  min-height: 50vh;
  max-height: 90vh;
  margin: 5vh auto;
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
`
