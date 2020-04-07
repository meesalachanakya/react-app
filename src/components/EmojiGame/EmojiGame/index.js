import React from 'react'
import Navbar from '../Navbar/index.js'
import {EmojisGameApp,Emojis,Result,ResultPage,Score,LoserComment,WinnerComment,Button} from './styledComponents.js'
import EmojiCard from '../EmojiCard/index.js';
import HowToPlay from '../HowToPlay/index.js'

class EmojiGame extends React.Component{
    state={ 
            emojis:[],
            score:0,
            topScore:0,
            gameState:'PLAYING',
            theme:'light-mode'
    }
    
    componentDidMount=()=>{
        this.setState({emojis:this.CreatEmojiList()})
    }
    
    CreatEmojiList=()=>{
        return([
            {
                id:0,
                isClicked:false,
                name:'Exploding Head',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'
            },
            {
                id:1,
                isClicked:false,
                name:'Grinning Face with Sweat',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png'
            },
            {
                id:2,
                isClicked:false,
                name:'Smiling Face with ',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png'
            },
            {
                id:3,
                isClicked:false,
                name:'Smirking Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png'
            },
            {
                id:4,
                isClicked:false,
                name:'Thinking Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'
            },
            {
                id:5,
                isClicked:false,
                name:'Winking Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png'
            },
            {
                id:6,
                isClicked:false,
                name:'Grinning Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png'
            },
            {
                id:7,
                isClicked:false,
                name:'Crying Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png'
            },
            {
                id:8,
                isClicked:false,
                name:'Astonished Face',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png'
            },
            {
                id:9,
                isClicked:false,
                name:'Face with Tears of Joy',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png'
            },
            {
                id:10,
                isClicked:false,
                name:'Star-Struck',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png'
            },
            {
                id:11,
                isClicked:false,
                name:'Winking Face with Tongue',
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png'
            },
            ])
    }
    
    
    
    onEmojiClick=(emojiObject)=>{
        const {emojis}=this.state
        
        if(emojiObject.isClicked){
            this.setState({gameState:'LOSE'})
            let updatedList=[]
            updatedList=emojis.filter((each)=>each.id!==emojiObject.id)
            updatedList.push(emojiObject)
            this.setState({emojis:updatedList})
        }
        else{
            emojiObject.isClicked=!emojiObject.isClicked
            let updatedList=[]
            updatedList=this.state.emojis.filter((each)=>each.id!==emojiObject.id)
            updatedList.push(emojiObject)
            this.shuffleEmojis(updatedList)
            this.incrementScore()
        }
    }
    
    shuffleEmojis=(list)=>{
        let shuffledList=[]
        while(list.length>0){
            const each=list[Math.floor(Math.random()*list.length)]
            let index=list.indexOf(each)
            shuffledList.push(each)
            list.splice(index,1)
        }
        this.setState({emojis:shuffledList})
    }
    
    incrementScore=()=>{
        this.setState({score:this.state.score+1})
        if(this.state.score+1===12){
            this.setState({gameState:'WIN'})
        }
    }
    
    onPlayAgainClick=()=>{
        this.resetGame()
        this.setTopScore()   
    }
    
    resetGame=()=>{
        const {emojis}=this.state
        const newEmojis=emojis.filter((each)=>each.isClicked=false)
        this.setState({emoji:newEmojis,
                        gameState:'PLAYING',
                        score:0
        })
    }
    
    setTopScore=()=>{
        if(this.state.score>this.state.topScore){
            this.setState({topScore:this.state.score})
        }   
    }
    
    onChangeTheme=()=>{
        const {theme}=this.state
        if(theme==='light-mode'){
            this.setState({theme:'dark-mode'})
        }
        else{
            this.setState({theme:'light-mode'})
        }
    }
    
    render(){
        const {emojis,score,topScore,gameState,theme}=this.state
        if(gameState==='LOSE'){
            return(<ResultPage theme={theme}>
                    <Navbar theme={theme} score={score} onClickHandle={this.onChangeTheme} topScore={topScore}/>
                    <Result>
                        <Score>{score}</Score>
                        <LoserComment>You Lose!</LoserComment>
                        <Button onClick={this.onPlayAgainClick}>Play Again</Button>
                    </Result>
                    <HowToPlay theme={theme}/>
                    </ResultPage>
            )
        }
        else if(gameState==='WIN'){
            return(
                <ResultPage theme={theme}>
                    <Navbar theme={theme} onClickHandle={this.onChangeTheme} score={score} topScore={topScore}/>
                    <Result>
                        <Score>{score}</Score>
                        <WinnerComment>You Won</WinnerComment>
                        <Button onClick={this.onPlayAgainClick}>Play Again</Button>
                    </Result>
                    <HowToPlay theme={theme}/>
                </ResultPage>)
        }
        else if(gameState==='PLAYING'){
        return(
            <EmojisGameApp theme={theme}>
                <Navbar score={score} theme={theme} onClickHandle={this.onChangeTheme} topScore={topScore}/>
                <Emojis> {emojis.map((each)=><EmojiCard theme={theme} onTouch={this.onEmojiClick} emoji={each}/>)}</Emojis>
                <HowToPlay theme={theme}/>
            </EmojisGameApp>
            )
    }}
    
}

export default EmojiGame