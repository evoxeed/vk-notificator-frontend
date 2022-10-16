import React from 'react';
import ReactDOM from 'react-dom/client';
import Vk from "./VK";
import "@vkontakte/vkui/dist/vkui.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Vk/>
    </React.StrictMode>
);