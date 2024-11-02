import React, {useState} from "react";
import {StyledCard} from "../StyledComponents/StyledComponents";
import {ReactComponent as Avatar} from '../../assets/avatar.svg';
import "./EditorView.css";

export interface EditorProps {
}

export enum Rating {
    CORRECT, CLICKBAIT, FAKE_NEWS
}

interface ReportPart {
    content: string;
    info: string;
    rating: Rating;
    clickedOn?: boolean;
    correct?: boolean; // true if correctly identified, false otherwise
    points: number;
}

const EditorView: React.FC<EditorProps> = () => {
    const initialReportParts: ReportPart[] = [
        {
            content: 'Tips to Help You Manage Your Homework Efficiently',
            info: 'Watch out for sensational wording like "amazing, shocking and unbelievable.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'This one trick will change your life.',
            info: 'Vague Headlines that are not specific to a topic are often a sign of clickbait.',
            rating: Rating.CLICKBAIT,
            points: 1
        },
        {
            content: 'Read This Touching Story About a Dog’s Journey Home',
            info: 'Watch out for overly emotional triggers like "cry, laugh, smile, and frown.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'Finish All Your Homework in Just 15 Minutes with This Magic Trick!',
            info: 'It\'s too good to be true. If it sounds too easy, it probably is.',
            rating: Rating.FAKE_NEWS,
            points: 1
        },
        {
            content: 'Learn How to Adopt a Puppy and Give It a Loving Home',
            info: 'Overuse of punctuation is often an indication of clickbait.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'Discover popular Costume Ideas for 2024',
            info: 'Lists of "best of" lists are often a sign of clickbait.',
            rating: Rating.CORRECT,
            points: 1
        }
    ];

    const [reportParts, setReportParts] = useState<ReportPart[]>(initialReportParts);
    const [bubbleText, setBubbleText] = useState('Well done! Your article is almost perfect - click on the marked parts to see where you went wrong.');

    const clickedOnCard = (rating: Rating, info: string, index: number) => {
        setReportParts(prevPairs => {
            const newPairs = prevPairs.map((reportPart) => {
                    reportPart.clickedOn = false;
                    return reportPart;
                }
            );
            newPairs[index].clickedOn = true;
            newPairs[index].correct = (rating === Rating.CORRECT);
            return newPairs;
        });
        switch (rating) {
            case Rating.CORRECT:
                setBubbleText('This information is correct and verifiable. Great job!');
                return;
            case Rating.CLICKBAIT:
                setBubbleText('This information is clickbait. ' + info);
                return;
            case Rating.FAKE_NEWS:
                setBubbleText('This information is incorrect. ' + info);
                return;
        }
    }

    const getClass = (pair: ReportPart) => {
        switch (pair.rating) {
            case Rating.CORRECT:
                return 'correct' + (pair.clickedOn ? ' correct-background' : '');
            case Rating.CLICKBAIT:
                return 'clickbait' + (pair.clickedOn ? ' clickbait-background' : '');
            case Rating.FAKE_NEWS:
                return 'incorrect' + (pair.clickedOn ? ' incorrect-background' : '');
        }
    }

    function getScore() {
        const clickbaits = reportParts
            .filter((part) => part.rating === Rating.CLICKBAIT)
            .reduce((sum) => (sum + 1), 0);
        const fakeNews = reportParts
            .filter((part) => part.rating === Rating.FAKE_NEWS)
            .reduce((sum) => (sum + 1), 0);
        return clickbaits + ' part is clickbait' + (fakeNews > 0 ? ' and ' + fakeNews + ' part is incorrect news.' : '');
    }

    return (
        <div className="editor" style={{padding: '20px', overflowY: 'auto', height: 'calc(100% - 100px)'}}>
            <h1>Your article has been checked by your trusted editor:</h1>
            <h3>Here is your score: {getScore()}</h3>
            <div className="editorContainer">
                <div className="avatarContainer">
                    <Avatar className="avatar"/>
                    <div className="speech-bubble">
                        <p>{bubbleText}</p>
                    </div>
                </div>
                <div className="editorGrid">
                    {reportParts.map((pair, index) => (
                        <div key={index} className={`reportPart`}>
                            <StyledCard className={`bait ${getClass(pair)}`}
                                        onClick={() => clickedOnCard(pair.rating, pair.info, index)}>{pair.content}</StyledCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditorView;