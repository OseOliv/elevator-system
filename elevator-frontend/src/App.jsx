import React from 'react';
import ElevatorControl from './components/ElevatorControl/ElevatorControl.jsx';
import GlobalStyles, {Header} from './styles/GlobalStyles';
function App() {
    return (
        <>
            <GlobalStyles />
            <Header>Elevator System</Header>
            <ElevatorControl />
        </>
    );
}
export default App;
