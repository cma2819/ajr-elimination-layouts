import React from 'react';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CurrentGame, Game, Games } from '../../../../nodecg/generated';

type Props = {
  games: Games;
  current: CurrentGame;
}

export const SelectElimination = ({ games, current: _current }: Props) => {

  const currentGame = (): [Game, number] | [undefined, -1] => {
    const current = games.find(g => g.index === _current?.index);
    if (current) {
      return [ current, games.findIndex(g => g.index === _current?.index) ];
    }

    return [ undefined, -1 ];
  };

  const selectPrevious = () => {
    const [ , currentIndex ] = currentGame();
    nodecg.sendMessage('select-current-game', currentIndex - 1);
  };

  const selectNext = () => {
    const [ , currentIndex ] = currentGame();
    nodecg.sendMessage('select-current-game', currentIndex + 1);
  };

  const selectAt = (index: number) => {
    nodecg.sendMessage('select-current-game', index);
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={2}>
        <Button
          fullWidth
          variant='contained'
          startIcon={<ArrowLeft />}
          disabled={currentGame()[1] < 1}
          onClick={selectPrevious}
        >
            前
        </Button>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <InputLabel id='select-elimination-label'>対象ゲーム</InputLabel>
          <Select
            labelId='select-elimination-label'
            value={currentGame()[1]}
            label='対象ゲーム'
            onChange={(e) => { selectAt(Number(e.target.value));}}
          >
            <MenuItem value={-1}>-</MenuItem>
            {
              games.map(game => (
                <MenuItem value={game.index}>{ game.name }</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button fullWidth variant='contained' endIcon={<ArrowRight />}
          disabled={currentGame()[1] === games.length - 1}
          onClick={selectNext}
        >
            次
        </Button>
      </Grid>
    </Grid>
  );
};