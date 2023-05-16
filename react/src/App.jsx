import React from "react"
import Main from './components/main'

export default function App() {
    const [notes, setNotes] = React.useState([])
    
    return (
        <Main/>
    )
}
