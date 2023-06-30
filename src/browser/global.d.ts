import {
  CreateNodecgConstructor,
  CreateNodecgInstance,
} from 'ts-nodecg/browser';

export type BundleNodecgInstance = CreateNodecgInstance<
  'ajr-elimination-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

export type BundleNodecgConstructor = CreateNodecgConstructor<
  'ajr-elimination-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

declare global {
  const nodecg: BundleNodecgInstance;

  const NodeCG: BundleNodecgConstructor;
}
