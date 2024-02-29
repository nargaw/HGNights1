import useStore from '../useStore/useStore'

export default function SinglePage()
{

    const mode = useStore(state => state.mode)
    const darkModeOn = useStore(state => state.darkModeOn)
    const lightModeOn = useStore(state => state.lightModeOn)

    const changeStyle = () => {
        if(mode !== 'light') lightModeOn()
        else darkModeOn()
    }

    const containerStyle = {
        outline: 'none',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '32px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'visible',
        padding: '16px',
        position: 'relative',
        // width: '100%',
        PointerEvents: 'none',
        // backdropFilter: 'blur(0.5px)',
        backgroundColor: mode == 'dark' ? "#f5f5f700" : '#0a0a0800',
        transition: '.75s all ease'
    }

  

    const dividerStyle = {
        borderBottomWidth: '1px',
        borderColor: mode == 'dark' ? '#ffffff20' : '#0a0a0820' ,
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderStyle: 'solid',
        borderTopWidth: '0px',
        width: '100%',
        opacity: 1
    }


    const lightDarkToggleStyle = {
        display: 'flex',
        background: '#ffffff',
        width: '60px',
        height: '30px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: '.75s all ease'
    }

    const lightDarkToggleStyle2 = {
        display: 'flex',
        background: '#000',
        width: '60px',
        height: '30px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: '.75s all ease'
    }

    const toggleCircleStyle = {
        content: '',
        background: '#000',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        top: '5px',
        left: '4px',
        transform: 'translateX(-15px)',
        transition: '.75s all ease'
    }

    const toggleCircleStyle2 = {
        content: '',
        background: '#fff',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        top: '5px',
        left: '4px',
        transform: 'translateX(15px)',
        transition: '.75s all ease'
    }

    
    
    if(mode == 'dark' ? document.body.style.backgroundColor = '#000' : document.body.style.backgroundColor = '#fff')
    document.body.style.transition = '.75s all ease'

    return <>
        <div style={containerStyle} className="container">
            <div style={dividerStyle}></div>
            <div onClick={changeStyle} className="toggle" style={mode == 'dark' ? lightDarkToggleStyle : lightDarkToggleStyle2}><div className="toggleCircle" style={mode == 'dark' ?toggleCircleStyle : toggleCircleStyle2}></div></div>
            <div style={dividerStyle}></div>
        </div> 
    </>
}