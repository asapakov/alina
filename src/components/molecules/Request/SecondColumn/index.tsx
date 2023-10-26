import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/redux';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Cities } from '../../../../common/constants';

const SecondColumn = ({ edit }: any) => {
  const { request } = useAppSelector((state: any) => state.user);
  const { t } = useTranslation();

  return (
    <div>
      <TextField
        type="number"
        variant="standard"
        value={request.value}
        InputProps={{ inputProps: { min: 1, max: 100 } }}
        label="Количество заявителей"
        onChange={(e) => edit('value', +e.target.value)}
      />
      <FormControl variant="outlined" sx={{ marginTop: '40px' }}>
        <InputLabel style={{ left: '-15px' }}>Город</InputLabel>
        <Select
          sx={{ width: '25ch' }}
          id="request-city"
          value={request.city}
          onChange={(e) => edit('city', e.target.value)}
          label="type"
          variant={'standard'}
        >
          {Cities.map((city: string) => (
            <MenuItem key={city} value={city}>
              {t(city as any)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SecondColumn;
