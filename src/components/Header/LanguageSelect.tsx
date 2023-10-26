import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang: any) => {
    void i18n.changeLanguage(lang.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{t('language')}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={i18n.language}
        label="Age"
        onChange={changeLanguageHandler}
      >
        <MenuItem value={'ru'}>Ru</MenuItem>
        <MenuItem value={'en'}>En</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
