import { eliminations } from './eliminations';
import { NodeCG } from './nodecg';
import { results } from './results';

export = (nodecg: NodeCG): void => {
  results({ nodecg });
  eliminations({ nodecg });
};