/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import { signedExtensions as bifrostSignedExtensions } from './signedExtensions';

import aSharePrimitives from './aSharePrimitives';
import bid from './bid';
import bridgeEos from './bridgeEos';
import bancor from './bancor';
import bridgeIost from './bridgeIost';
import flexibleFee from './flexibleFee';
import minterReward from './minterReward';
import salp from './salp';
import stakingReward from './stakingReward';
import swap from './swap';
import tokens from './tokens';
import vesting from './vesting';
import vsbondAuction from './vsbondAuction';
import vtokenMint from './vtokenMint';
import zenlinkProtocol from './zenlinkProtocol';
import runtime from './runtime';
import currencies from "./currencies";

import bifrostVersioned from './spec/bifrost';
import asgardVersioned from './spec/asgard';

const additionalOverride = {
  Keys: 'SessionKeys1'
};

const bifrostDefs = {
  bid,
  bridgeEos,
  bancor,
  bridgeIost,
  currencies,
  flexibleFee,
  minterReward,
  salp,
  stakingReward,
  swap,
  tokens,
  vesting,
  runtime,
  vsbondAuction,
  vtokenMint,
  zenlinkProtocol,
  aSharePrimitives
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(bifrostDefs),
  ...additionalOverride
};

export const rpc = jsonrpcFromDefs(bifrostDefs, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(bifrostDefs, { ...ormlAlias });

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['generalCouncil']
    },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    bifrost: getBundle(bifrostVersioned),
    asgard: getBundle(asgardVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    bifrost: getBundle(bifrostVersioned),
    asgard: getBundle(asgardVersioned)
  }
};

export const signedExtensions = bifrostSignedExtensions;