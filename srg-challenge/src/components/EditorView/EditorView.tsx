import React, {useState} from "react";
import {StyledCard} from "../StyledComponents/StyledComponents";
import {ReactComponent as Avatar} from '../../assets/avatar.svg';
import "./EditorView.css";
import { Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

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
            content: 'Happy Halloween! How people celebrate in the USA',
            info: 'Watch out for sensational wording like "amazing, shocking and unbelievable.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'This one Halloween trick will change your life!',
            info: 'Vague Headlines that are not specific to a topic are often a sign of clickbait.',
            rating: Rating.CLICKBAIT,
            points: 1
        },
        {
            content: 'Carved pumpkins and a pile of sweets: Halloween is an important and great tradition in the USA...',
            info: 'Watch out for overly emotional triggers like "cry, laugh, smile, and frown.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'The USA captivates global interest with its films, music, and traditions like Halloween, especially with the presidential election approaching...',
            info: 'It\'s too good to be true. If it sounds too easy, it probably is.',
            rating: Rating.CORRECT,
            points: 1
        },
        {
            content: 'Recent studies reveal that 90% of Swiss households are now adopting American-style Halloween traditions...',
            info: 'Statements without sources can easily be faked and should be critically questioned.',
            rating: Rating.FAKE_NEWS,
            points: 1
        },
        {
            content: 'Although the USA and Switzerland differ in size and in their traditions and holidays...',
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
        return 'You chose well for the most part! ' + clickbaits + ' of them is clickbait' + (fakeNews > 0 ? ' and ' + fakeNews + ' of them is incorrect news.' : '');
    }

    return (
        <div className="editor" style={{padding: '20px', overflowY: 'auto', height: 'calc(100% - 100px)'}}>
            <Typography variant="h3" align="center" gutterBottom>
                Your article has been checked by your trusted editor
            </Typography>
            <h3 style={{display: 'flex', alignItems: 'center'}}><StarIcon />{getScore()} <StarIcon /></h3>
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