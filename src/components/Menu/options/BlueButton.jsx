import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BlueButton = styled(Button)({
  background: 'linear-gradient(45deg, #C5E063 30%, #488B49 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 100,
  margin: '10px',
  cursor: 'pointer',
});

export default BlueButton;
