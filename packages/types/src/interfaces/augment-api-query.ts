// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { NodePrimitivesCurrencyCurrencyId, OrmlTokensAccountData, OrmlTokensBalanceLock } from '@bifrost-finance/types/interfaces/primitives';
import type { AccountId32 } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';
import type { Vec, u128 } from '@polkadot/types';
import type { Observable } from '@polkadot/types/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, NodePrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, NodePrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | string | Uint8Array) => Observable<u128>, [NodePrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
