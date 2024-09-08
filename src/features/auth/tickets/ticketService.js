import axios from "axios";

const API_URL = '/api/tickets/'

// Create a new ticket
const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',  // Prevent caching
            Pragma: 'no-cache',  // HTTP 1.0 fallback for old proxies
            Expires: '0'         // Expire immediately
        }
    }

    const response = await axios.post(`${API_URL}?timestamp=${new Date().getTime()}`, ticketData, config);  // Add timestamp to prevent caching
    return response.data;
}

// Get all tickets
const getTickets = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',  // Prevent caching
            Pragma: 'no-cache',
            Expires: '0'
        }
    }

    const response = await axios.get(`${API_URL}?timestamp=${new Date().getTime()}`, config);  // Add timestamp to prevent caching
    return response.data;
}

// Get a single ticket by ID
const getTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',  // Prevent caching
            Pragma: 'no-cache',
            Expires: '0'
        }
    }

    const response = await axios.get(`${API_URL}${ticketId}?timestamp=${new Date().getTime()}`, config);  // Add timestamp to prevent caching
    return response.data;
}

// Close a ticket
const closeTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',  // Prevent caching
            Pragma: 'no-cache',
            Expires: '0'
        }
    }

    const response = await axios.put(`${API_URL}${ticketId}?timestamp=${new Date().getTime()}`, { status: 'closed' }, config);  // Add timestamp to prevent caching
    return response.data;
}

// Export the service functions
const ticketService = {
    getTickets,
    createTicket,
    getTicket,
    closeTicket
}

export default ticketService;
