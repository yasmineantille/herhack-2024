export enum ContentType {
    Title = 'TITLE',
    Headline = 'HEADLINE',
    Teaser = 'TEASER',
    Introduction = 'INTRODUCTION',
    Quote = 'QUOTE',
    Conclusion = 'CONCLUSION',
}

export interface Block {
    content: string;
    type: ContentType;
    score: number;
}

export interface Desk {
    foundBlocks : Block[];
    allBlocks : Block[];
}