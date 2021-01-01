import styled from 'styled-components'
import confirmationIllustration from '../img/confirmation-illustration.svg'

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    height: max-content;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem;
`

const IllustrationContainer = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5.6rem;
    min-width: 32.8rem;
`

const MainIllustration = styled.img`
    width: 100%;
    height: 100%;
`

const ConfirmationPage = () => {
    return(
        <Main>
            <IllustrationContainer>
                <MainIllustration src={confirmationIllustration}/>
            </IllustrationContainer>
        </Main>
    )
}

export default ConfirmationPage