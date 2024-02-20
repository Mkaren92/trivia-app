import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import QuizContextProvider from "./store/quiz-context.jsx";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnWindowFocusInvisible: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </QueryClientProvider>
);
