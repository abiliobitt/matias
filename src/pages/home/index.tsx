import { useState } from "react"
import Modal from '../../components/modal'
import useModal from '../../components/modal/useModal'
import SearchBar from "../../components/search"
import axiosRequest from "../../services/apiGet"
import ImageBox from "../../components/imageComponent"
import { HomeWrapper } from "./styles"

const Home = () => {
    const [gifs, SetGifs] = useState<any|null>()
    const searchGif = async(text: string) => {
        const request = await axiosRequest(text)
        SetGifs(request.data.data)
    }
    const {isShowing, toggle} = useModal()
    const closeModal = () => {
        toggle()
    }    

    const modalChild = (gif: any) => {
        console.log('teste')
        toggle()
        return <ImageBox id={gif.id} url={gif.images.original.url} title={gif.title} />
    }
      
    return (
        <>
            <button onClick={toggle}>ABRIR MODAL</button>
            <SearchBar searchFunction={searchGif} />
            <HomeWrapper>

            {
                gifs && <>
                    {gifs.map((gif: any) => <ImageBox id={gif.id} url={gif.images.original.url} title={gif.title} onClick={(gif) => modalChild(gif)} />)}
                </>
            }
            </HomeWrapper>
            {
                isShowing && <Modal isShowing={isShowing} hide={() => toggle()}>
                <>
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Fechar Modal"
                    onClick={() => closeModal()}
                    data-testid="closeModal">
                      Close
                  </button>
                    <h1>Modal</h1>
                </>
              </Modal>
            }
        </>
    )
}

export default Home