import React, {useState} from "react";
import {Block, ContentType, Desk} from "../Models/Models";

export interface WorkDeskProps {
    className?: string;
}

interface BlockProps {
    id: number;
    text: string;
    placeholder: string;
    options: string[];
}

const WorkDesk: React.FC<WorkDeskProps> = ({ className }) => {

    const initialBlocks: BlockProps[] = [
        { id: 1, text: 'This is a [placeholder] for block 1', placeholder: '[placeholder]', options: ['example', 'sample', 'test'] },
        { id: 2, text: 'This is a [placeholder] for block 2', placeholder: '[placeholder]', options: ['content', 'data', 'info'] },
        { id: 3, text: 'This is a [placeholder] for block 3', placeholder: '[placeholder]', options: ['text', 'description', 'detail'] },
        { id: 4, text: 'This is a [placeholder] for block 4', placeholder: '[placeholder]', options: ['item', 'object', 'element'] },
        { id: 5, text: 'This is a [placeholder] for block 5', placeholder: '[placeholder]', options: ['subject', 'topic', 'theme'] },
        { id: 6, text: 'This is a [placeholder] for block 6', placeholder: '[placeholder]', options: ['piece', 'section', 'area'] },
    ];

    const [blocks, setBlocks] = useState<BlockProps[]>(initialBlocks);

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
        foundBlocks: [],
        allBlocks: allBlocks
    }

    const fillPlaceholder = (id: number, option: string) => {
        setBlocks(prevBlocks =>
            prevBlocks.map(block =>
                block.id === id
                    ? { ...block, text: block.text.replace(block.placeholder, option) }
                    : block
            )
        );
    };

    return (
            <div className={className} style={{ padding: '20px' }}>
                <h1>Write your article</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {blocks.map(block => (
                        <div key={block.id} style={{ border: '1px solid #ddd', padding: '10px', width: '300px', borderRadius: '8px' }}>
                            <p>{block.text}</p>
                            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                                {block.options.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => fillPlaceholder(block.id, option)}
                                        style={{
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            backgroundColor: '#007bff',
                                            color: 'white',
                                            border: 'none',
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default WorkDesk;
