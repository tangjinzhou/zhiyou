import React from 'react'

export default class Tag extends React.Component {
    constructor(props){
        super(props)
        this.tags = ['百家讲坛','郭德纲','小岳岳','志玲姐姐','旅游局','高晓松']
        this.state = {
            checkedIndex: 1
        }
    }
    getTag() {
        const tag = []
        return tag
    }
    handleOnClick = (index) => {
        this.setState({checkedIndex: index})
    }
    render() {
        const checkedIndex = this.state.checkedIndex
        return (
            <div className="tag-container">
                <header className="header">讲解风格</header>
                <div className="tags">
                    {this.tags.map((tag, index)=>
                        <span className={checkedIndex === index ? 'active':''} key={index} onClick={()=>this.handleOnClick(index)}>{tag}</span>
                    )}
                </div>
                <div className="start">
                    <a href="/start">Start</a>
                </div>
            </div>
        )
    }
}