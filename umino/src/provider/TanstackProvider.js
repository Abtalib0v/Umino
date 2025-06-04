import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const TanstackProvider = ({children}) => {
    const queryClient = new QueryClient({
defaultOptions:{
    queries:{
        refetchOnWindowFocus:false,
        retry:1,
        staleTime:1000 * 60 * 5,
    }
}
    })
  return (
    
<QueryClientProvider client={queryClient}>
{children}
{
    import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false}/>
}
</QueryClientProvider>
  )
}

export default TanstackProvider