import React, {useState} from "react";
import {Block, ContentType, Desk} from "../Models/Models";

export interface WorkDeskProps {
    className?: string;
}

interface BlockProps {
    id: number;
    text: string;
    options: string[];
}

const mockBlocks: Block[] = [
    {
        content: 'Title1',
        type: ContentType.Title,
        score: 1
    },
    {
        content: 'Title2',
        type: ContentType.Title,
        score: 1
    },
    {
        content: 'Title3',
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
        content: 'Teaser1',
        type: ContentType.Teaser,
        score: 1
    },
    {
        content: 'Teaser2',
        type: ContentType.Teaser,
        score: 1
    },
    {
        content: 'Introduction1',
        type: ContentType.Introduction,
        score: 1
    },
    {
        content: 'Introduction2',
        type: ContentType.Introduction,
        score: 1
    },
    {
        content: 'Quote1',
        type: ContentType.Quote,
        score: 1
    },
    {
        content: 'Quote2',
        type: ContentType.Quote,
        score: 1
    },
    {
        content: 'Conclusion1',
        type: ContentType.Conclusion,
        score: 1
    },
    {
        content: 'Conclusion2',
        type: ContentType.Conclusion,
        score: 1
    },
];

const WorkDesk: React.FC<WorkDeskProps> = ({ className }) => {
    const allBlocks : Block[] = [{
        content: 'Title',
        type: ContentType.Title,
        score: 1
    },{
        content: 'Headline',
        type: ContentType.Headline,
        score: 1
    },{
        content: 'Teaser',
        type: ContentType.Teaser,
        score: 1
    },{
        content: 'Introduction',
        type: ContentType.Introduction,
        score: 1
    },{
        content: 'Quote',
        type: ContentType.Quote,
        score: 1
    },{
        content: 'Conclusion',
        type: ContentType.Conclusion,
        score: 1
    }];

    const workDesk : Desk = {
        foundBlocks: mockBlocks,
        allBlocks: allBlocks
    }

    const initialBlocks: BlockProps[] = [
        { id: 1, text: 'Title', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Title).map((matchedBlock) => matchedBlock.content) },
        { id: 2, text: 'Headline', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Headline).map((matchedBlock) => matchedBlock.content) },
        { id: 3, text: 'Teaser', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Teaser).map((matchedBlock) => matchedBlock.content) },
        { id: 4, text: 'Introduction', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Introduction).map((matchedBlock) => matchedBlock.content) },
        { id: 5, text: 'Quote', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Quote).map((matchedBlock) => matchedBlock.content) },
        { id: 6, text: 'Conclusion', options: workDesk.foundBlocks.filter((block) => block.type === ContentType.Conclusion).map((matchedBlock) => matchedBlock.content) },
    ];

    const [blocks, setBlocks] = useState<BlockProps[]>(initialBlocks);

    const fillPlaceholder = (id: number, option: string) => {
        setBlocks(prevBlocks =>
            prevBlocks.map(block =>
                block.id === id
                    ? { ...block, text: option }
                    : block
            )
        );
    };

    const submitArticle = () => {
        console.log("submitting article");
    }

    return (
            <div className={className} style={{ padding: '20px', overflowY: 'auto' }}>
                <h1>Write your article</h1>
                <h2>Select an option for each part of your media piece to write an informed, unbiased trustworthy article, just like a real journalist.</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {blocks.map(block => (
                        <div key={block.id} style={{width: '50%', display: 'flex'}}>
                            <div style={{ border: 'none', padding: '10px', width:'100%', display: 'flex', flexDirection:'column', borderRadius: '8px' }}>
                                <p>{block.text}</p>
                                <div style={{ display: 'flex', gap: '5px'}}>
                                    {block.options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => fillPlaceholder(block.id, option)}
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
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '20px' }}>
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
