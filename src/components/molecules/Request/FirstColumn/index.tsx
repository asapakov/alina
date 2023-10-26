import * as React from 'react';
import { RequestTypes } from '../../../../common/constants';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Input,
  TextField,
  Typography,
  type CheckboxProps,
  Grid,
} from '@mui/material';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import styles from '../column.module.scss';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../../../store/redux';
import FormControlLabel, {
  type FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useTranslation } from 'react-i18next';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  position: 'relative',
  marginRight: 'auto',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'none',
  backgroundImage: 'black',
  '&:before': {
    display: 'block',
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundImage: 'none',
    content: '"✓"',
    bottom: '5px',
    left: '2px',
  },
  'input:hover ~ &': {
    backgroundColor: 'none',
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        paddingLeft: 0,
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const FirstColumn = ({ edit }: any) => {
  const { request } = useAppSelector((state: any) => state.user);
  const { t } = useTranslation();

  return (
    <div>
      <TextField
        fullWidth
        id={'request-name'}
        label={'Название заявки'}
        placeholder={'Напишите название заявки'}
        variant="standard"
        required={true}
        value={request.name}
        onChange={(e) => edit('name', e.target.value)}
      />
      <div className={styles.flexContainer}>
        <FormControl variant="outlined">
          <InputLabel style={{ left: '-15px' }}>Сумма заявки</InputLabel>
          <Input
            sx={{ width: '15ch' }}
            id={'request-sum'}
            value={request.sum}
            endAdornment={<InputAdornment position="end">₸</InputAdornment>}
            placeholder={'Сумма'}
            onChange={(e) => edit('sum', +e.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel style={{ left: '-15px' }}>Тип заявки</InputLabel>
          <Select
            sx={{ width: '20ch' }}
            id="request-type"
            value={request.type}
            onChange={(e) => edit('type', e.target.value)}
            label="type"
            variant={'standard'}
          >
            {Object.keys(RequestTypes).map((type: string) => (
              <MenuItem key={type} value={type}>
                {t(type as any)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <FormControl sx={{ marginTop: '40px' }}>
        <Typography>Позвонить для подтвеждения</Typography>
        <RadioGroup
          onChange={(e) => edit('call', e.target.value === 'true')}
          defaultValue="Да"
          style={{ flexDirection: 'row' }}
        >
          <MyFormControlLabel
            checked={request.call}
            value={true}
            label="Да"
            control={<Radio />}
          />
          <MyFormControlLabel
            checked={!request.call}
            value={false}
            label="Нет"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>

      <FormControl sx={{ marginTop: '40px' }}>
        <Typography>Получать дополнительную информацию</Typography>
        <Grid>
          <BpCheckbox
            checked={request.email}
            onChange={() => edit('email', !request.email)}
          />
          <span>Письма на почту</span>
        </Grid>
        <Grid>
          <BpCheckbox
            checked={request.SMS}
            onChange={() => edit('SMS', !request.SMS)}
          ></BpCheckbox>
          <span>СМС на телефон</span>
        </Grid>
      </FormControl>

      <Typography sx={{ marginTop: '40px' }}>* - обязательные поля</Typography>
    </div>
  );
};

export default FirstColumn;
