import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import ListadoPokemons from "./components/ListadoPokemons";

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

import "./styles.css";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Pokédex</h1>
                <div id="bandejaDeEntrada">
                    <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                        <div style={{display: 'flex', flexDirection:'row'}}>
                            <ListadoPokemons/>
                        </div>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
}
