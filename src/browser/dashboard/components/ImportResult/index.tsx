import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

export const ImportResult = () => {

  const [ resultSource, setResultSource ] = useState<string>(nodecg.bundleConfig.defaultJsonId ?? '');
  const [ isLoading, setLoading ] = useState<boolean>(false);

  const importResult = () => {
    setLoading(true);
    nodecg.sendMessage('import-result', resultSource, () => {
      setLoading(false);
    });
  };

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        label='Google Drive URL or file ID'
        value={resultSource}
        onChange={(e) => {setResultSource(e.currentTarget.value);}}
        disabled={isLoading}
      />
      <Button fullWidth variant='contained' disabled={isLoading} onClick={importResult}>
        予選結果インポート
      </Button>
    </Stack>
  );
};