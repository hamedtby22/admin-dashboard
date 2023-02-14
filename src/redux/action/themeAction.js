
const setModeSetting = mode => {
    return {
        type: 'SET_MODE',
        payload: mode
    }
}

const setColorSetting = color => {
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

const getTheme = () => {
    return {
        type: 'GET_THEME'
    }
}

export {setColorSetting,setModeSetting,getTheme}