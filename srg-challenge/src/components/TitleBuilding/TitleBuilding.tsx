import React, { useState, useEffect } from 'react';
import { StyledCard, SectionTitle, TweetCard, TweetAvatar } from '../StyledComponents/StyledComponents';
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
            clickbait: 'This one trick will change your life.',
            notClickbait: 'Start Your Day with This Fun Trick to Feel Great and Get More Done!',
            info: 'Vague Headlines that are not specific to a topic are often a sign of clickbait.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'This Heartwarming Story Will Make You Cry!',
            notClickbait: 'Read This Touching Story About a Dog’s Journey Home',
            info: 'Watch out for overly emotional triggers like "cry, laugh, smile, and frown.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'Finish All Your Homework in Just 15 Minutes with This Magic Trick!',
            notClickbait: 'Learn Tips to Finish Your Homework Faster and Have More Free Time',
            info: 'It\'s too good to be true. If it sounds too easy, it probably is.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'Get a Puppy for Free!!! You Won’t Believe How Easy It Is!!!',
            notClickbait: 'Learn How to Adopt a Puppy and Give It a Loving Home',
            info: 'Overuse of punctuation is often an indication of clickbait.',
            order: Math.random() > 0.5 ? 0 : 1
        },
        {
            clickbait: 'These are the 5 best Halloween costume ideas for 2024',
            notClickbait: 'Discover popular Costume Ideas for 2024',
            info: 'Lists of "best of" lists are often a sign of clickbait.',
            order: Math.random() > 0.5 ? 0 : 1
        }
    ];

    const [clickbaitPairs, setClickbaitPairs] = useState<ClickbaitPair[]>(initialClickbaitPairs);
    const [bubbleText, setBubbleText] = useState('Choose the clickbait example in every pair by clicking on it');
    const [bubbleColor, setBubbleColor] = useState('neutral');

    const clickedOnClickbait = (isClickbait: boolean, info: string, index: number) => {
        setClickbaitPairs(prevPairs => {
            const newPairs = [...prevPairs];
            newPairs[index].clickedOn = isClickbait ? 'clickbait' : 'notClickbait';
            newPairs[index].correct = isClickbait;
            return newPairs;
        });
        setBubbleText(isClickbait ? 'Correct! This is clickbait! ' + info : 'Incorrect! This is not clickbait! ' + info);
        setBubbleColor(isClickbait ? 'correct' : 'incorrect');
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
            <div className="titleContainer">
                <div className="avatarContainer">
                    <Avatar className="avatar"/>
                    <div className={`speech-bubble ${bubbleColor}`}>
                        <p>{bubbleText}</p>
                    </div>
                </div>
                <div className="titleGrid">
                    {clickbaitPairs.map((pair, index) => (
                        <div key={index} className={`clickbaitPair`}>
                            <StyledCard className={`bait ${getClass(pair, pair.order === 0)}`}
                                        onClick={() => clickedOnClickbait(pair.order === 0, pair.info, index)}>{pair.order === 0 ? pair.clickbait : pair.notClickbait}</StyledCard>
                            <StyledCard className={`bait ${getClass(pair, pair.order === 1)}`}
                                        onClick={() => clickedOnClickbait(pair.order === 1, pair.info, index)}>{pair.order === 1 ? pair.clickbait : pair.notClickbait}</StyledCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TitleBuilding;