import React, {useState} from "react";
import {Block, ContentType, Desk} from "../Models/Models";
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {TweetAvatar, TweetCard } from "../StyledComponents/StyledComponents";
import { Twitter } from "@mui/icons-material";

export interface WorkDeskProps {
    className?: string;
}

interface BlockProps {
    id: number;
    text: string;
    type: ContentType;
    options: string[];
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
        content: 'The USA - a country that interests everyone\n' +
            'Whether through films, music, customs such as Halloween or the presidential elections - the USA is constantly present. Especially now that the presidential election is just around the corner, interest is high worldwide. Kamala Harris is running against Donald Trump, and the whole world is watching. Even celebrities like singer Taylor Swift are talking about it and encouraging their fans to vote.\n' +
            'But why is this so important for us in Switzerland? A lot of what happens in the USA also has an impact on Europe and Switzerland. You can see this not only in politics, but also in traditions and festivals that are becoming increasingly popular in Switzerland. Halloween, for example.\n' +
            'Halloween - an American festival with European roots\n' +
            'The nights are getting longer, the wind is getting stronger and pumpkins are popping up everywhere. It\'s Halloween - the spookiest festival of the year. Halloween is particularly popular and widely celebrated in the USA.\n' +
            'But did you know that this custom originally comes from Europe? Irish emigrants brought the festival to America a long time ago, where it developed into a gigantic spectacle. Today, children in the USA celebrate Halloween by going from house to house to collect sweets, dressed in the scariest costumes.\n' +
            '\n' +
            'Translated with DeepL.com (free version)',
        type: ContentType.Introduction,
        score: 5
    },
    {
        content: 'This Halloween season, Americans are going all out—spending more than ever before on a bizarre new trend that’s taking the country by storm! From coast to coast, people are reaching deep into their pockets to keep up with this latest craze. Curious about what’s causing the Halloween hype and wallet-busting expenses? You won’t believe how far some are going to celebrate! Read on to discover the trend everyone is talking about this spooky season.',
        type: ContentType.Introduction,
        score: 1
    },
    {
        content: 'Halloween is becoming increasingly popular in Switzerland. But in the USA it\'s huge! The houses are elaborately decorated. Sometimes it seems as if everything is just bigger in the USA: the parties, the cars, the cities.',
        type: ContentType.Quote,
        score: 5
    },
    {
        content: 'You won’t believe how Halloween celebrations in Switzerland compare to the jaw-dropping extravagance of American parties—prepare to be shocked!',
        type: ContentType.Quote,
        score: 1
    },
    {
        content: 'Recent studies reveal that 90% of Swiss households are now adopting American-style Halloween traditions, leaving traditional Swiss celebrations in the dust!',
        type: ContentType.Quote,
        score: 1,
    },
    // {
    //     content: 'Conclusion1',
    //     type: ContentType.Conclusion,
    //     score: 1
    // },
    // {
    //     content: 'Conclusion2',
    //     type: ContentType.Conclusion,
    //     score: 1
    // },
];

const WorkDesk: React.FC<WorkDeskProps> = ({className}) => {
    const allBlocks: Block[] = [{
        content: 'Title',
        type: ContentType.Title,
        score: 1
    }, {
        content: 'Photo',
        type: ContentType.Headline,
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
            text: 'Title',
            type: ContentType.Title,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Title).map((matchedBlock) => matchedBlock.content)
        },
        {
            id: 2,
            text: 'Photo',
            type: ContentType.Headline,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Headline).map((matchedBlock) => matchedBlock.content)
        },
        {
            id: 3,
            text: 'Teaser',
            type: ContentType.Teaser,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Teaser).map((matchedBlock) => matchedBlock.content)
        },
        {
            id: 4,
            text: 'Introduction',
            type: ContentType.Introduction,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Introduction).map((matchedBlock) => matchedBlock.content)
        },
        {
            id: 5,
            text: 'Quote',
            type: ContentType.Quote,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Quote).map((matchedBlock) => matchedBlock.content)
        },
        {
            id: 6,
            text: 'Conclusion',
            type: ContentType.Conclusion,
            options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Conclusion).map((matchedBlock) => matchedBlock.content)
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

    const submitArticle = () => {
        console.log("submitting article");
    }

    return (
        <div className={className} style={{padding: '20px', overflowY: 'auto', height: 'calc(100% - 100px)'}}>
            <h1>Write your article</h1>
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
                            <Card onClick={() => changeSelectedBlockType(block.type)}>
                                <CardContent><Typography>{block.text}</Typography></CardContent>
                            </Card>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column'}}>
                        {workDesk.foundBlocks.filter((block) => block.type === selectedType).map(
                            (matchedBlock) => (
                                matchedBlock.type !== ContentType.Quote ? (
                                    <Card onClick={() => fillPlaceholder(matchedBlock.type, matchedBlock.content)} style={{cursor: 'pointer'}}>
                                        <CardContent><Typography>{matchedBlock.content}</Typography></CardContent>
                                    </Card>
                                ) : (
                                    <TweetCard>
                                        <Box display="flex" alignItems="center" mb={1}>
                                            <TweetAvatar alt="Genevieve" src="/path/to/avatar.png" />
                                            <Box ml={2}>
                                                <Typography variant="body1">
                                                    <strong>@Genevieve_SwissUSA</strong>
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    Oct 31
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2">
                                            {matchedBlock.content}
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
                <button
                    onClick={() => submitArticle()}
                    style={{
                        padding: '5px 10px',
                        borderRadius: '4px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        height: 'auto',
                        border: 'none',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        width: 'calc(100% / 3)',
                    }}
                >
                    Submit to editor
                </button>
            </div>
        </div>
    );
};

export default WorkDesk;
