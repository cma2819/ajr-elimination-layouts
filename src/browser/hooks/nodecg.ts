import { useContext } from 'react';
import { ReplicantMap } from '../../nodecg/replicants';
import { ReplicantContext } from '../ReplicantProvider';

type RepName = keyof ReplicantMap;
export const useReplicant = <T extends RepName>(
  repName: T
): ReplicantMap[T] => {
  return useContext(ReplicantContext)[repName];
};
