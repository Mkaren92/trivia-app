import { createContext, useReducer, useContext, useCallback } from "react";
import { actions } from "../utility/data";

const initialState = {
  activeQuestionIndex: 0,
  answers: [],
  category: null,
};

const QuizContext = createContext({
  activeQuestionIndex: 0,
  answers: [],
  category: null,
  addAnswer: () => {},
  selectCategory: () => {},
  resetState: () => {},
});

function quizReducer(state, action) {
  if (action.type === actions.SELECT_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === actions.ADD_ANSWER) {
    const updatedAnswers = [...state.answers];
    updatedAnswers.push({ ...action.payload });
    const newIndex = state.activeQuestionIndex + 1;
    return {
      ...state,
      answers: updatedAnswers,
      activeQuestionIndex: newIndex,
    };
  }

  if (action.type === actions.RESET_STATE) {
    return initialState;
  }

  return state;
}

export default function QuizContextProvider({ children }) {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const handleSelectCategory = useCallback((category) => {
    quizDispatch({
      type: actions.SELECT_CATEGORY,
      payload: category,
    });
  }, []);

  const handleAddAnswer = useCallback((answer) => {
    quizDispatch({
      type: actions.ADD_ANSWER,
      payload: answer,
    });
  }, []);

  const handleResetState = useCallback(() => {
    quizDispatch({
      type: actions.RESET_STATE,
    });
  }, []);

  const values = {
    answers: quizState.answers,
    activeQuestionIndex: quizState.activeQuestionIndex,
    category: quizState.category,
    addAnswer: handleAddAnswer,
    selectCategory: handleSelectCategory,
    resetState: handleResetState,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuiz = () => useContext(QuizContext);
