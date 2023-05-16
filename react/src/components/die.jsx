import React from 'react'

export default function Die(Props){

    const [die, setDie] = React.useState(0)

    const styles = {
        backgroundColor: Props.selected ? '#59E391' : 'rgb(221, 221, 221)'
    }

    return(
        <div>
            <button className='Die' style={styles} onClick={Props.hold}>
                {Props.value}
            </button>
        </div>
    )
}