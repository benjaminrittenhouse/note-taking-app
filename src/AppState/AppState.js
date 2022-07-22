import React, { useState, useEffect } from 'react';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState(){
    // Hooks. We use a default state of no notes, and the setAllNotes is the state that we would change to update our notes
    const [allNotes, setAllNotes] = useState([{}])
    const [note, setNote] = useState("")
    
    const AppState = {
        allNotes, setAllNotes,
        note, setNote,
    };

    return <AppNavigation AppState = {AppState}/>
}