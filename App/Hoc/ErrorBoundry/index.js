import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import Fallback from "./Components/Fallback";

const AppErrorBoundary = ({children}) => {
    return <ErrorBoundary FallbackComponent={Fallback}>
        {children}
    </ErrorBoundary>
}

export default AppErrorBoundary