import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardHeader, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CurrentGame } from '../../../../nodecg/generated';

type Props = {
  current: CurrentGame;
}

type RowProps = {
  summary: NonNullable<CurrentGame>['summaries'][number]
}

const RankColors = [
  '#e6b422',
  '#ebf6f7',
  '#9e2d00',
  '#727171',
] as const;

const EliminationRow = ({ summary }: RowProps) => {
  const [ showEdit, setShowEdit ] = useState<boolean>(false);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{
            bgcolor: RankColors[Math.min(summary.rank -1, 3)],
          }}>{ summary.rank }</Avatar>
        }
        action={
          <IconButton onClick={() => setShowEdit(!showEdit)}>
            { showEdit ? (<ExpandLessIcon />) : (<ExpandMoreIcon />) }
          </IconButton>
        }
        title={summary.runner.name}
        subheader={`${summary.score} ( ${summary.done} / 5 )`}
      >
      </CardHeader>
      <Collapse in={showEdit}>
        <CardContent>
          <small>TODO: Will be implemented editor</small>
        </CardContent>  
      </Collapse>
    </Card>
  );
};

export const EliminationSummaries = ({ current }: Props) => {
  return (
    <Stack spacing={1}>
      {
        current?.summaries.map(summary => (
          <EliminationRow summary={summary} />
        ))
      }
    </Stack>
  );
};