import styled from 'styled-components'

const Label = styled.label`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 3.2rem;

    & > div {
        border-bottom: 1px solid var(--color-5);
        padding-right: 2rem;

    }
 
    & > div > img {
        width: 1.6rem;
        height: 1.6rem;
    }

    & > input {
        font-size: 1.6rem;
        max-width: 32rem;
        width: 100%;
        font-family: var(--roboto);
        color: var(--color-4);
        padding: 0.05px 0 1.6rem 0;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--color-5);

        &::placeholder {
            color: var(--color-1);
        }

        &:focus {
            border-bottom: 1px solid var(--color-5);
            outline: none;
        }
    }

`

const InputField = ({type, placeholder, icon}) => {
    return(
        <Label>
            <div><img src={icon} alt={icon}/></div>
            <input type={type} placeholder={placeholder} />
        </Label>

    )
}

export default InputField