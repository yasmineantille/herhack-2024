import React, { useState, useEffect } from 'react';
import './TitleBuilding.css';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';

export interface TitleBuildingProps {}

interface ClickbaitPair {
    clickbait: string;
    notClickbait: string;
    info: string;
    order: number; // 0 for clickbait first, 1 for non-clickbait first
    clickedOn?: 'clickbait' | 'notClickbait' | undefined;
    correct?: boolean; // true if correctly identified, false otherwise
}

const TitleBuilding: React.FC<TitleBuildingProps> = () => {
    const initialClickbaitPairs: ClickbaitPair[] = [
        {
            clickbait: 'This Amazing Trick Will Make Your Homework Disappear!',
            notClickbait: 'Tips to Help You Manage Your Homework Efficiently',
            info: 'Watch out for sensational wording like "amazing, shocking and unbelievable.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'You Won\'t Believe What Happened Next!',
            notClickbait: 'A Surprising Twist in the Story',
            info: 'Clickbait often uses phrases like "you won\'t believe, you\'ll be shocked, and you\'ll be amazed.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'This Simple Trick Will Help You Lose Weight Fast!',
            notClickbait: 'Healthy Eating Habits for Weight Loss',
            info: 'Clickbait often promises quick and easy solutions to complex problems.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'You\'ll Never Guess What Happened!',
            notClickbait: 'A Surprising Turn of Events',
            info: 'Clickbait often uses phrases like "you\'ll never guess, you\'ll never believe, and you\'ll never expect.',
            order: Math.random() > 0.5 ? 0 : 1
        }
    ];

    const [clickbaitPairs, setClickbaitPairs] = useState<ClickbaitPair[]>(initialClickbaitPairs);
    const [bubbleText, setBubbleText] = useState('Choose the clickbait example in every pair by clicking on it');

    const clickedOnClickbait = (isClickbait: boolean, info: string, index: number) => {
        setClickbaitPairs(prevPairs => {
            const newPairs = [...prevPairs];
            newPairs[index].clickedOn = isClickbait ? 'clickbait' : 'notClickbait';
            newPairs[index].correct = isClickbait;
            return newPairs;
        });
        setBubbleText(isClickbait ? 'Correct! This is clickbait! ' + info : 'Incorrect! This is not clickbait! ' + info);
    }

    const getClass = (pair: ClickbaitPair, isClickbait: boolean) => {
        if (pair.clickedOn === (isClickbait ? 'clickbait' : 'notClickbait')) {
            return pair.correct ? 'correct' : 'incorrect';
        }
        return '';
    }

    return (
        <div className="titleBuilding">
            <h1>Which is clickbait?</h1>
            <div className="titleGrid">
                {clickbaitPairs.map((pair, index) => (
                    <div key={index} className={`clickbaitPair`}>
                        <div className={`bait ${getClass(pair, pair.order === 0)}`}
                             onClick={() => clickedOnClickbait(pair.order === 0, pair.info, index)}>{pair.order === 0 ? pair.clickbait : pair.notClickbait}</div>
                        <div className={`bait ${getClass(pair, pair.order === 1)}`}
                             onClick={() => clickedOnClickbait(pair.order === 1, pair.info, index)}>{pair.order === 1 ? pair.clickbait : pair.notClickbait}</div>
                    </div>
                ))}
            </div>
            <div className="avatarContainer">
                <Avatar className="avatar"/>
                <div className="speech-bubble">
                    <p>{bubbleText}</p>
                </div>
            </div>
        </div>
    );
}

export default TitleBuilding;