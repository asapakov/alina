import * as React from 'react';
import { useAppSelector } from '../../../../store/redux';
import { useTranslation } from 'react-i18next';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+7 (7__) ___ - __ - __"
        definitions={{
          _: /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

const ThirdColumn = ({ edit }: any) => {
  const { request } = useAppSelector((state: any) => state.user);
  const handleDate = (date: any) => edit('date', date);
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel style={{ left: '-15px' }}>Номер телефона</InputLabel>
        <Input
          name="phone"
          value={request.phone}
          onChange={(e) => edit('phone', e.target.value)}
          inputComponent={TextMaskCustom as any}
        ></Input>
      </FormControl>
      <FormControl sx={{ marginTop: '40px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
            <DemoItem label="Дата заявки">
              <DateCalendar value={request.date} onChange={handleDate} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </FormControl>
    </div>
  );
};

export default ThirdColumn;
