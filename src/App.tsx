import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NhlStandings } from './components/NhlStandings';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
        <NhlStandings />
      </div>
    </QueryClientProvider>
  );
};

export { App };
