import React, { useState } from 'react';
import { Configuration, Layout, DeleteSVGIcon, AppBarAction, AddBoxSVGIcon } from 'react-md';
import { Text } from "@react-md/typography";
import GameInfo from './GameInfo'
import PredictedScore from './PredictedScore'
import RankingList from './RankingList'
import './App.scss';
import { Game } from './Types';
import getRandomGame from './API/GetRandomGame';

let defaultGame:Game = {
  'Presence': 0,
  'Storage': 0,
  'Memory': 0,
  'Original_Cost': 0,
  'Controller': 0,
  'Achievements': 0,
  'Action': 0,
  'Adventure': 0,
  'Casual': 0,
  'Early Access': 0,
  'Free to Play': 0,
  'Indie': 0,
  'Massively Multiplayer': 0,
  'Racing': 0,
  'RPG': 0,
  'Simulation': 0,
  'Sports': 0,
  'Strategy': 0,
  'Num_Platforms': 0,
  'Android': 0,
  'iOS': 0,
  'Linux': 0,
  'Macos': 0,
  'Nintendo 3Ds': 0,
  'Nintendo Switch': 0,
  'PC': 0,
  'Playstation 3': 0,
  'Playstation 4': 0,
  'PS Vita': 0,
  'Web': 0,
  'Wii': 0,
  'Wii U': 0,
  'Xbox 360': 0,
  'Xbox One': 0,
  'Is_Franchise': 0,
  'Is_Discounted': 0,
  'French': 0,
  'German': 0,
  'Italian': 0,
  'Japanese': 0,
  'Russian': 0,
  'Num_Languages': 0,
  '2D': 0,
  'Anime': 0,
  'Arcade': 0,
  'Atmospheric': 0,
  'Classic': 0,
  'Co-op': 0,
  'Colorful': 0,
  'Comedy': 0,
  'Cute': 0,
  'Difficult': 0,
  'Exploration': 0,
  'FPS': 0,
  'Family Friendly': 0,
  'Fantasy': 0,
  'Female Protagonist': 0,
  'First-Person': 0,
  'Funny': 0,
  'Gore': 0,
  'Great Soundtrack': 0,
  'Horror': 0,
  'Multiplayer': 0,
  'Nudity': 0,
  'Open World': 0,
  'Pixel Graphics': 0,
  'Platformer': 0,
  'Point & Click': 0,
  'Puzzle': 0,
  'Relaxing': 0,
  'Replay Value': 0,
  'Retro': 0,
  'Sandbox': 0,
  'Sci-fi': 0,
  'Sexual Content': 0,
  'Shooter': 0,
  'Singleplayer': 0,
  'Story Rich': 0,
  'Survival': 0,
  'Turn-Based': 0,
  'Violent': 0,
  'Visual Novel': 0,
}

function App() {
  const [game, setGame] = useState(defaultGame)
  const [score, setScore] = useState(0)

  function updateGame(key:string, value:number): void {
    setGame({...game, [key]:value})
  }

  return (
    <Configuration>
      <Layout
        title="Predict a Games Popularity"
        navHeaderTitle="Game Oracle"
        appBarProps={{
          children: (
            <>
              <AppBarAction 
                id={`random`} 
                first aria-label="Random"
                onClick={()=> {
                  const randomGame = getRandomGame()
                  setGame(randomGame)
                }}>
                <AddBoxSVGIcon />
                <Text>Random</Text>
              </AppBarAction>
              <AppBarAction 
                id={`reset`} 
                last aria-label="Reset"
                onClick={()=> {
                  setGame(defaultGame)
                }}>
                <DeleteSVGIcon />
                <Text>Reset</Text>
              </AppBarAction>
            </>
          )
        }}
        navProps={{
          children: (
            <>
              <PredictedScore 
                game={game}
                setScore={setScore} 
              />
              <RankingList score={score} />
            </>
          ),
        }}
      >
        <GameInfo game={game} updateGame={updateGame} />
      </Layout>
    </Configuration>
  );
}

export default App;
