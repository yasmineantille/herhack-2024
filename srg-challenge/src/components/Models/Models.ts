export enum ContentType {
    Title = 'TITLE',
    Headline = 'HEADLINE',
    Teaser = 'TEASER',
    Introduction = 'INTRODUCTION',
    Quote = 'QUOTE',
    Conclusion = 'CONCLUSION',
}

interface TweetInfo {
    tweetContent: string;
    tweetAuthor: string;
    tweetDate: string;
}

export interface Block {
    content: string | TweetInfo;
    type: ContentType;
    score: number;
}

export interface Desk {
    foundBlocks : Block[];
    allBlocks : Block[];
}