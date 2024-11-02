import React, {useState} from "react";
import {Block, ContentType, Desk} from "../Models/Models";
import {Box, Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {TweetAvatar, TweetCard } from "../StyledComponents/StyledComponents";
import { Twitter } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export interface WorkDeskProps {
    className?: string;
}

interface BlockProps {
    id: number;
    text: string;
    type: ContentType;
}

const mockBlocks: Block[] = [
    {
        content: 'Happy Halloween! How people celebrate in the USA',
        type: ContentType.Title,
        score: 5
    },
    {
        content: 'Americans Are Spending MILLIONS on This Crazy Halloween Trend – You Won\'t Believe What It Is!',
        type: ContentType.Title,
        score: 1
    },
    {
        content: 'Halloween Celebrations Banned Across the USA Due to Safety Concerns!',
        type: ContentType.Title,
        score: 1
    },
    {
        content: 'Headline1',
        type: ContentType.Headline,
        score: 1
    },
    {
        content: 'Headline2',
        type: ContentType.Headline,
        score: 1
    },
    {
        content: 'This Halloween, Americans are breaking the bank on a wild new craze. Find out what has everyone talking—and spending!',
        type: ContentType.Teaser,
        score: 1
    },
    {
        content: 'Carved pumpkins and a pile of sweets: Halloween is an important and great tradition in the USA. An American family living in Switzerland tells us how they celebrate Halloween. Learn exciting facts about the USA from Genevieve!',
        type: ContentType.Teaser,
        score: 5
    },
    {
        content: 'Halloween might be canceled nationwide this year! Discover the shocking reason behind the sudden ban!',
        type: ContentType.Teaser,
        score: 1
    },
    {
        content: 'The USA captivates global interest with its films, music, and traditions like Halloween, especially with the presidential election approaching. With Kamala Harris running against Donald Trump, the world is watching closely, including celebrities like Taylor Swift, who are urging fans to vote. This is particularly significant for Switzerland, as events in the USA often influence Europe.\n' +
            '\n' +
            'Halloween, for instance, is an American festival rooted in European traditions. As the nights grow longer and pumpkins appear, Halloween becomes a celebrated event. Although it is most popular in the USA, this custom was originally brought over by Irish emigrants, evolving into a grand spectacle. Today, American children celebrate by trick-or-treating in costumes, collecting sweets from neighbors.\n',
        type: ContentType.Introduction,
        score: 5
    },
    {
        content: 'This Halloween season, Americans are going all out—spending more than ever before on a bizarre new trend that’s taking the country by storm! From coast to coast, people are reaching deep into their pockets to keep up with this latest craze. Curious about what’s causing the Halloween hype and wallet-busting expenses? You won’t believe how far some are going to celebrate! Read on to discover the trend everyone is talking about this spooky season.',
        type: ContentType.Introduction,
        score: 1
    },
    {
    content: {
        tweetContent: 'Genevieve (12), who has been living in Switzerland for a long time, carves pumpkins with her American family every year.',
        tweetAuthor: 'SRFKids',
        tweetDate: 'Oct 30',
    },
        type: ContentType.Quote,
        score: 5
    },
    {
        content: {
            tweetContent: 'You won’t believe how Halloween celebrations in Switzerland compare to the jaw-dropping extravagance of American parties—prepare to be shocked!',
            tweetAuthor: 'Genevieve_SwissUSA',
            tweetDate: 'Oct 31',
        },
        type: ContentType.Quote,
        score: 1
    },
    {
        content: {
            tweetContent: 'Recent studies reveal that 90% of Swiss households are now adopting American-style Halloween traditions, leaving traditional Swiss celebrations in the dust!',
            tweetAuthor: 'www.spookycarvingtips.com',
            tweetDate: 'Oct 31',
        },
        type: ContentType.Quote,
        score: 1,
    },
    {
        content: 'Although the USA and Switzerland differ in size and in their traditions and holidays, there is still a lot that spills over across the Atlantic. Halloween, Black Friday or even the presidential election - what happens in the USA also influences us here',
        type: ContentType.Conclusion,
        score: 5
    },
    {
        content: 'In an unexpected turn of events, the USA’s influence on Swiss culture has reached new heights. Halloween celebrations are turning into extravagant spectacles, Black Friday is now a national shopping event, and the buzz of U.S. presidential elections is resonating in every Swiss home. Clearly, the American way of life is taking root, leaving a lasting mark on Switzerland!',
        type: ContentType.Conclusion,
        score: 1
    },
];

const WorkDesk: React.FC<WorkDeskProps> = ({className}) => {
    const allBlocks: Block[] = [{
        content: 'Title',
        type: ContentType.Title,
        score: 1
    }, {
        content: 'Teaser',
        type: ContentType.Teaser,
        score: 1
    }, {
        content: 'Introduction',
        type: ContentType.Introduction,
        score: 1
    }, {
        content: 'Quote',
        type: ContentType.Quote,
        score: 1
    }, {
        content: 'Conclusion',
        type: ContentType.Conclusion,
        score: 1
    }];

    const workDesk: Desk = {
        foundBlocks: mockBlocks,
        allBlocks: allBlocks
    }

    const initialBlocks: BlockProps[] = [
        {
            id: 1,
            text: '"Choose a Title"',
            type: ContentType.Title,
        },
        {
            id: 3,
            text: 'Choose a Teaser',
            type: ContentType.Teaser,
        },
        {
            id: 4,
            text: 'Choose an Introduction',
            type: ContentType.Introduction,
        },
        {
            id: 5,
            text: 'Choose a Quote',
            type: ContentType.Quote,
        },
        {
            id: 6,
            text: 'Choose a Conclusion',
            type: ContentType.Conclusion,
        },
    ];

    const [blocks, setBlocks] = useState<BlockProps[]>(initialBlocks);
    const [selectedType, setSelectedType] = useState<ContentType | null>(ContentType.Title);

    const fillPlaceholder = (type: ContentType, text: string) => {
        setBlocks(prevBlocks =>
            prevBlocks.map(block =>
                block.type === type
                    ? {...block, text}
                    : block
            )
        );
    };

    const changeSelectedBlockType = (type: ContentType) => {
        setSelectedType(type);
    }

    const navigate = useNavigate();

    const submitArticle = () => {
        navigate('/editor');
    }

    return (
        <div className={className} style={{padding: '20px', overflowY: 'auto', height: 'calc(100% - 100px)'}}>
            <Typography variant="h3" align="center" gutterBottom>
                Write your article
            </Typography>
            <h5>Select an option for each part of your media piece to write an informed, unbiased trustworthy article,
                just like a real journalist.</h5>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', cursor: 'pointer'}}>
                        {blocks.map(block => (
                            block.type !== ContentType.Quote?(
                                <Card onClick={() => changeSelectedBlockType(block.type)}>
                                    <CardContent><Typography>{block.text}</Typography></CardContent>
                                </Card>
                            ):(
                                <TweetCard onClick={() => changeSelectedBlockType(block.type)}>
                                    <Typography variant="body2">
                                        «{block.text}»
                                    </Typography>
                                </TweetCard>
                            )
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column'}}>
                        <span>Choose the neutral, unbiased and trustworthy option</span>
                        {workDesk.foundBlocks.filter((block) => block.type === selectedType).map(
                            (matchedBlock) => (
                                matchedBlock.type !== ContentType.Quote && typeof matchedBlock.content === 'string' ? (
                                    <Card onClick={() => fillPlaceholder(matchedBlock.type,typeof matchedBlock.content === 'string' ? matchedBlock.content : '')} style={{cursor: 'pointer'}}>
                                        <CardContent><Typography>{matchedBlock.content}</Typography></CardContent>
                                    </Card>
                                ) : (
                                    <TweetCard onClick={() => fillPlaceholder(matchedBlock.type, typeof matchedBlock.content === 'string' ? matchedBlock.content : matchedBlock.content.tweetContent)}>
                                        <Box display="flex" alignItems="center" mb={1}>
                                            <TweetAvatar alt="Genevieve" src="/path/to/avatar.png" />
                                            <Box ml={2}>
                                                <Typography variant="body1">
                                                    <strong>
                                                        @{typeof matchedBlock.content != 'string' ? matchedBlock.content.tweetAuthor : ''}
                                                    </strong>
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {typeof matchedBlock.content != 'string' ? matchedBlock.content.tweetDate : ''}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2">
                                            {typeof matchedBlock.content != 'string' ? matchedBlock.content.tweetContent : ''}
                                        </Typography>
                                        <Twitter color="primary" fontSize="small" />
                                    </TweetCard>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '20px'}}>
                <Button onClick={() => submitArticle()}>Submit to editor</Button>
            </div>
        </div>
    );
};

export default WorkDesk;
