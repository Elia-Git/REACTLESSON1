import React from 'react'
// const [myCount, setMyCount] = useState(props.countFrom)
class CounterClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myCount: props.countFrom }
        this.updateCount = this.updateCount.bind(this)
    }
    updateCount() {
        const { myCount } = this.state
        console.log('does it load')
        this.setState({
            myCount: myCount + 1,
        })
    }
    render() {
        const { myCount } = this.state
        return ( < div > < button onClick = {
            () => this.updateCount()
        } > { myCount } < /button></div > )
    }
}

export default CounterClass