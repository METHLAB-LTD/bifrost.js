// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { AmountOf, CurrencyId, CurrencyIdOf } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { AccountId, Balance, BalanceOf } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    currencies: {
      /**
       * Update balance success. [currency_id, who, amount]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AmountOf]>;
      /**
       * Deposit success. [currency_id, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Currency transfer success. [currency_id, from, to, amount]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AccountId, BalanceOf]>;
      /**
       * Withdraw success. [currency_id, who, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[currency_id,
       * account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[currency_id,
       * account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       * \[currency_id, who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Transfer succeeded. \[currency_id, from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [CurrencyId, AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       * \[currency_id, who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
