import { useQuery } from "@tanstack/react-query";
export default function Example(){
    const {isPending,error}= useQuery({
        queryKey:['repoData'],
        queryFn:()=>
            fetch('http://localhost:3000/').then((res) =>
            res.json(),
    ),
    })
    if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
}