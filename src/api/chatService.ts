// src/api/chatService.js

// This is a mock URL, replace it with the actual API endpoint

// 10.0.2.2 is the default IP address for localhost the Android emulator
//
// const AI_ENDPOINT = 'http://10.0.2.2:8000/ai/response';
const AI_ENDPOINT = 'https://389b-145-224-65-191.ngrok-free.app/ai/response';

export const getAIResponse = async (message) => {
    try {
        const response = await fetch(AI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log(data);
        console.log(data.reply);
        return data.reply; // Assuming the API responds with a JSON object that includes a 'reply' field
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};
