import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ImagesList from '../image-list/images';
import { FilterOption } from '../../services/api/types';

export default function Tags() {
  const [selected, setSelected] = React.useState<FilterOption[]>([]);
  const searchedValues = React.useMemo<string[]>(() => {
    return selected.map((element: FilterOption) => element.value)
  }, [selected])

  return (
    <div>
      <Stack spacing={3} sx={{ p: 2, mt: 15, marginInline: 'auto', width: 1400 }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={styleNames}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          value={selected}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Styl"
              placeholder="dodaj więcej"
            />
          )}
          onChange={(event, value) => (setSelected(value))}
        />
      </Stack>
      <ImagesList searchedValues={searchedValues}/>
    </div>
  );
}


const styleNames = [
  {label: 'nowoczesny', value: 'modern'},
  {label: 'skandynawski', value: 'scandinavian'},
  {label: 'klasyczny', value: 'classic'},
  {label: 'industrialny', value: 'industrial'},
  {label: 'eklektyczny', value: 'eclectic'},
  {label: 'rustykalny', value: 'rustic'},
  {label: 'glamour', value: 'glamour'},
  {label: 'vintage', value: 'vintage'},
  {label: 'boho', value: 'bohemian'},
  {label: 'Hampton', value: 'Hampton'},
  {label: 'art déco', value: 'artdéco'},
];