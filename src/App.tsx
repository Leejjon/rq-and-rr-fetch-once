import './App.css';
import {QueryClient, useQuery} from "@tanstack/react-query";
import {googleQuery} from "./GoogleQuery.ts";

export async function loader(queryClient: QueryClient) {
    return await queryClient.ensureQueryData(
        googleQuery()
    );
}

function App() {
    const {data, isLoading} = useQuery({
        ...googleQuery()
    });

    if (isLoading) {
        return (<>Loading</>);
    } else {
        return (<>{data}</>);
    }
}

export default App;
