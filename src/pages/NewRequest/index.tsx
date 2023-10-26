import { useDispatch } from 'react-redux';
import { clearRequestData, setRequestData } from '../../store/redux/actions';
import FirstColumn from '../../components/molecules/Request/FirstColumn';
import SecondColumn from '../../components/molecules/Request/SecondColumn';
import ThirdColumn from '../../components/molecules/Request/ThirdColumn';
import { setRequestToLs } from '../../store/localStorage';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../store/redux';

const NewRequests = () => {
  const { request, fullName } = useAppSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const editProperty = (key: string, value: string) => {
    dispatch(setRequestData({ key, value }));
  };

  const clearRequestForm = () => dispatch(clearRequestData());

  const sendRequest = () => {
    if (confirm()) {
      setRequestToLs({ ...request, fullName });
      return clearRequestForm();
    }
    return false;
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={5}>
        <FirstColumn edit={editProperty} />
      </Grid>
      <Grid item xs={12} md={3}>
        <SecondColumn edit={editProperty} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ThirdColumn edit={editProperty} />
      </Grid>
      <Grid item xs={12} md={12}>
        <button onClick={sendRequest}>Отправить</button>
        <button onClick={clearRequestForm}>Очистить</button>
      </Grid>
    </Grid>
  );
};

export default NewRequests;
