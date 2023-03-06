import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const api = import.meta.env.VITE_API_KEY

const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ApolloProvider client={client}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ApolloProvider>
)

// how use dotenv on React vite?
