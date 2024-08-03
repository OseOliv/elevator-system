import React, { useEffect, useState } from 'react';

import {CallHistoryContainer, CallHistoryList, CallHistoryItem} from './Styles.js'

const CallHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/calls')
            .then(response => response.json())
            .then(data => setHistory(data))
            .catch(error => console.error('Error fetching call history:', error));
    }, []);

    return (
        <CallHistoryContainer>
            <h2>Call History</h2>
            <CallHistoryList>
                {history.map(call => (
                    <CallHistoryItem key={call.id}>
                        Floor: {call.floor}, Direction: {call.direction}, Status: {call.status}
                    </CallHistoryItem>
                ))}
            </CallHistoryList>
        </CallHistoryContainer>
    );
};

export default CallHistory;