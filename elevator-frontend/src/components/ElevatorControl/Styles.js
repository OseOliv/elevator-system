import styled from "styled-components";

export const ElevatorContainer = styled.div`
    padding: 30px;
    max-width: 1000px;
    margin: 20px auto;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CurrentFloorContainer = styled.div`
    padding: 15px;
    background: #ff5722; 
    color: #ffffff; 
    font-size: 24px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FloorIcon = styled.span`
    display: inline-block;
    margin-right: 10px;
    font-size: 28px; 
    color: #fff;
`;

export const FloorButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px; 
    justify-content: center; 
    margin: 20px 0;
    max-width: 600px; 
    width: 100%;
`;

export const FloorButton = styled.button`
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export const DirectionButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const DirectionButton = styled.button`
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #28a745;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;

    &:hover {
        background-color: #218838;
    }
`;

export const InputContainer = styled.div`
    margin: 20px 0;
    text-align: center;
`;

export const FloorInput = styled.input`
    padding: 10px;
    font-size: 18px;
    border: 2px solid #007bff;
    border-radius: 8px;
    width: 60%;
    max-width: 200px;
    margin-right: 10px;

    &:focus {
        border-color: #0056b3;
        outline: none;
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    background-color: #ffc107;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:disabled {
        background-color: #e0a800;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #e0a800;
    }
`;

export const LogContainer = styled.div`
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const LogList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const LogItem = styled.li`
    background: #e9ecef;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
`;

export const ToggleButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #004080;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
`;

export const CallSection = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const CallTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 24px;
    color: #343a40;
`;

export const CallList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const CallItem = styled.li`
    background: #ffffff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #495057;
    width: 100%;
    max-width: 600px;
    text-align: center;
`;