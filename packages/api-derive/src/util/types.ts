// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';

export interface timestampListAndBlockHeightList{
    timestampList: number[],
    blockHeightList: Observable<BN[]>
  }

  