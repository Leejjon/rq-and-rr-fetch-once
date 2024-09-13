import './App.css';
import {QueryClient, useQuery} from "@tanstack/react-query";
import {query} from "./Query.ts";

export async function loader(queryClient: QueryClient) {
    return await queryClient.ensureQueryData(
        query()
    );
}

function App() {
    const {data, isLoading} = useQuery({
        ...query()
    });

    if (isLoading) {
        return (<>Loading</>);
    } else {
        return (<>{data}</>);
    }
}

export default App;
