import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot'
import { config } from './config.js'
import { ThemeProvider } from 'styled-components';
import './indexCss.css'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                background: '#f1f2f6',
                fontFamily: this.fontFamily,
                headerBgColor: '#2f3640',
                headerFontColor: '#fff',
                headerFontSize: '15px',
                botBubbleColor: 'linear-gradient(-190deg, #d1d8e0, #1e272e)',
                botFontColor: '#fff',
                userBubbleColor: '#fff',
                userFontColor: '#4a4a4a',
            }
        }
    }
    
    fontFamily = [
        'system-ui', '-apple-system', 
        '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 
        'Arial', '"Noto Sans"', ' "Liberation Sans"', 
        'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', 
        '"Segoe UI Symbol"', 
    ].join(',');

    render() {
        const { theme } = this.state
        return (
            <ThemeProvider theme={theme} style={{ marginBottom: '20px' }}  >
                <ChatBot {...config} />
            </ThemeProvider>
        );
    }
}

export default index;