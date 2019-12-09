import {useLocalStorage} from './useLocalStorage'
import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('keyHere')

    useEffect(() => {
        if (darkMode) {
                document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    })

    return [darkMode, setDarkMode];

}