import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import { reducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
