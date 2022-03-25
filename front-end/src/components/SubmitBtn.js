import Button from 'react-bootstrap/Button';

const SubmitBtn = props => {
    return (
            <Button variant="dark" type="submit">
                {props.text}
            </Button>
    )
}
export default SubmitBtn;