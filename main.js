function QuickStart() {
    const st1 = {color: 'white', backgroundColor: '#23272F', marginLeft: '20px'}
    const st2 = {color: 'white', backgroundColor: '#343A46', fontSize: '14px', marginLeft: '20px', fontWeight: 'lighter', padding: '4px'}
    return(
        <div style= {{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#23272F',
            padding: '10px', 
            borderRadius: '8px',
            fontFamily: 'sans-serif',
            width: '75%',
            justifyContent: 'center',
            margin: 'auto'

        }}>
            <h1 style={st1}>Quick Start</h1>
            <p style={st1}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <ul style= {{color: 'white', fontSize: '20px', backgroundColor: '#343A46', 
                borderRadius: '8px', padding: '16px', margin: '24px', fontWeight: 'bolder'
            }}>You will learn
                <li style= {st2}>How to create and nest components</li>
                <li style= {st2}>How to add markup and styles</li>
                <li style= {st2}>How to display data</li>
                <li style= {st2}>How to render conditions and lists</li>
                <li style= {st2}>How to respond to events and update the screen</li>
                <li style= {st2}>How to share data between components</li>
            </ul>
        </div>
    )

}

ReactDOM.createRoot(document.querySelector('#root')).render(<QuickStart />)