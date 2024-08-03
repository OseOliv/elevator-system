import React, { useEffect, useState, useCallback } from 'react';
import {
    CurrentFloorContainer,
    FloorIcon ,
    CallTitle,
    CallList,
    CallItem,
    CallSection,
    LogContainer,
    LogList,
    LogItem,
    ToggleButton ,
    DirectionButton,
    FloorButton,
    SubmitButton,
    ElevatorContainer,
    InputContainer,
    FloorButtons,
    DirectionButtons,
    FloorInput } from './Styles.js';


const ElevatorControl = () => {
    const [calls, setCalls] = useState([]);
    const [logs, setLogs] = useState([]);
    const [currentFloor, setCurrentFloor] = useState(1);
    const [selectedFloor, setSelectedFloor] = useState('');
    const [direction, setDirection] = useState(null);
    const [showHistory, setShowHistory] = useState(false);
    const [showLogs, setShowLogs] = useState(false);

    const performFetch = useCallback(async (url, method = 'GET', body = null, processData = data => data) => {
        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: body ? JSON.stringify(body) : null,
            });
            const data = await response.json();
            return processData(data);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    }, []);

    const fetchCalls = useCallback(() => {
        performFetch('http://localhost:3000/calls', 'GET', null, data => {
            const filteredCalls = showHistory ? data : data.filter(call => call.status === 'pending');
            setCalls(filteredCalls);
        });
    }, [performFetch, showHistory]);

    const fetchLogs = useCallback(() => {
        performFetch('http://localhost:3000/logs', 'GET', null, setLogs);
    }, [performFetch]);

    useEffect(() => {
        fetchCalls();
        fetchLogs();
    }, [fetchCalls, fetchLogs, showHistory, showLogs]);

    const handleSubmit = async () => {
        if (selectedFloor && direction) {
            const newCall = {
                floor: parseInt(selectedFloor, 10),
                direction,
                status: 'pending'
            };

            await performFetch('http://localhost:3000/calls', 'POST', newCall, data => {
                setCalls(prevCalls => [...prevCalls, data]);
                setSelectedFloor('');
                setDirection(null);
                fetchLogs();
            });
        }
    };

    const handleElevatorArrive = async (floorNumber) => {
        const direction = floorNumber > currentFloor ? 'up' : 'down';

        await performFetch('http://localhost:3000/arrive', 'POST', {
            floor: floorNumber,
            previous_floor: currentFloor,
            direction
        });
        setCurrentFloor(floorNumber);
        fetchCalls();
        fetchLogs();
    };
    const handleFloorButtonClick = (floorNumber) => {
        setCurrentFloor(floorNumber);
        handleElevatorArrive(floorNumber);
    };

    const handleDirectionClick = (direction) => {
        setDirection(direction);
    };

    const toggleHistory = () => setShowHistory(prev => !prev);
    const toggleLogs = () => setShowLogs(prev => !prev);

    const floors = Array.from({ length: 15 }, (_, i) => i + 1);

    return (
        <ElevatorContainer>
            <CurrentFloorContainer>
                <FloorIcon> 🛗 </FloorIcon>
                Current Floor: {currentFloor}
            </CurrentFloorContainer>
            <FloorButtons>
                {floors.map(floorNumber => (
                    <FloorButton
                        key={floorNumber}
                        onClick={() => handleFloorButtonClick(floorNumber)}
                    >
                        {floorNumber}
                    </FloorButton>
                ))}
            </FloorButtons>
            <DirectionButtons>
                <DirectionButton onClick={() => handleDirectionClick('up')}>Up</DirectionButton>
                <DirectionButton onClick={() => handleDirectionClick('down')}>Down</DirectionButton>
            </DirectionButtons>
            {direction && (
                <InputContainer>
                    <FloorInput
                        type="number"
                        value={selectedFloor}
                        onChange={(e) => setSelectedFloor(e.target.value)}
                        placeholder="Floor Nº"
                        min="1"
                    />
                </InputContainer>
            )}
            <SubmitButton
                onClick={handleSubmit}
                disabled={!selectedFloor || !direction}
            >
                Call Elevator
            </SubmitButton>
            <div>
                <ToggleButton onClick={toggleHistory}>
                    {showHistory ? 'Show Pending' : 'Show History'}
                </ToggleButton>
                <ToggleButton onClick={toggleLogs}>
                    {showLogs ? 'Hide Logs' : 'Show Logs'}
                </ToggleButton>
            </div>
            <CallSection>
                <CallTitle>{showHistory ? 'History' : 'Pending'}</CallTitle>
                <CallList>
                    {calls.map(call => (
                        <CallItem key={call.id}>
                            Floor: {call.floor}, Direction: {call.direction}, Status: {call.status}
                        </CallItem>
                    ))}
                </CallList>
            </CallSection>
            {showLogs && (
                <LogContainer>
                    <h3>Elevator Log</h3>
                    <LogList>
                        {logs.map(log => (
                            <LogItem key={log.id}>
                                Floor: {log.from_floor}, To: {log.to_floor}, Direction: {log.direction},
                                Time: {new Date(log.timestamp).toLocaleString()}
                            </LogItem>
                        ))}
                    </LogList>
                </LogContainer>
            )}
        </ElevatorContainer>
    );
};

export default ElevatorControl;
