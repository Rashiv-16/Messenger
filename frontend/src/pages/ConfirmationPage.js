import styled from 'styled-components'
import confirmationIllustration from '../img/confirmation-illustration.svg'
import processingIcon from '../img/processing.svg'

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

   /* border: 1px solid red; */
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

const TextContainer = styled.div`
   /* border: 1px solid red; */
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`

const ProcessingContainer = styled.div`
   /* border: 1px solid red; */
   margin-bottom: 4rem;
`

const ProcessingIcon = styled.img`
   /* border: 1px solid red; */
`

const TextContent = styled.p`
   /* border: 1px solid red; */
   font-family: var(--roboto);
   font-size: 1.6rem;
   color: var(--color-3);
   margin-bottom: 1.6rem;
`

const SendMailAgain = styled.a`
   /* border: 1px solid red; */
   font-family: var(--roboto);
   font-size: 1.2rem;
   color: var(--color-4);
`

const ConfirmationPage = () => {
    return(
        <Main>
            <IllustrationContainer>
                <MainIllustration src={confirmationIllustration}/>
            </IllustrationContainer>
            <TextContainer>
                <ProcessingContainer>
                    <ProcessingIcon src={processingIcon}/>
                </ProcessingContainer>
                <TextContent>
                    A mail is sent to you. If you didn't get it,<br/>please wait for 5 Minutes and try again.
                </TextContent>
                <SendMailAgain href='#'>Send confirmation mail again</SendMailAgain>
            </TextContainer>
        </Main>
    )
}

export default ConfirmationPage