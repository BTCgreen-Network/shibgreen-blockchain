import { createApi } from '@reduxjs/toolkit/query/react';

import shibgreenLazyBaseQuery from './shibgreenLazyBaseQuery';

export const baseQuery = shibgreenLazyBaseQuery({});

export default createApi({
  reducerPath: 'shibgreenApi',
  baseQuery,
  endpoints: () => ({}),
});
