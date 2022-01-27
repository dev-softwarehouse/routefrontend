export const API_ENDPOINT_HTTP = (process.env.NODE_ENV === 'production') ? 'https://rc-server-2708.herokuapp.com' : 'http://localhost:8010'
export const API_ENDPOINT_WS = (process.env.NODE_ENV === 'production') ? 'wss://rc-server-2708.herokuapp.com' : 'ws://localhost:8010'
