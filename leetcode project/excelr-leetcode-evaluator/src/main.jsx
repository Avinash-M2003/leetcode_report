import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LeetCodeEvaluator from "./components/LeetCodeEvaluator.jsx";
createRoot(document.getElementById('root')).render(
   <LeetCodeEvaluator></LeetCodeEvaluator>,
)
