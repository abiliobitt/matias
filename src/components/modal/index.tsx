import React, { FC, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground, ModalContainer } from './styles'

export interface ModalProps {
  hide: Function
  isShowing: boolean
  children: ReactElement
}

const Modal: FC<ModalProps> = ({ isShowing, hide, children, ...restProps }) => isShowing
? ReactDOM.createPortal(
  <React.Fragment {...restProps}>
    <ModalBackground >
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalBackground>
  </React.Fragment>, document.body
)
: null

export default Modal
