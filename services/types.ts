
interface UrlEntity {
    start: number;
    end: number;
    url: string;
    expanded_url: string;
    display_url: string;
}

interface DescriptionEntity {
    start: number;
    end: number;
    url: string;
    expanded_url: string;
    display_url: string;
}

interface Entities {
    url: {
        urls: UrlEntity[];
    };
    description: {
        urls: DescriptionEntity[];
    };
}

interface PublicMetrics {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
    like_count: number;
}

export interface UserData {
    data: {
        entities: Entities;
        id: string;
        most_recent_tweet_id: string;
        name: string;
        public_metrics: PublicMetrics;
        verified_type: string;
        url: string;
        username: string;
        created_at: string;
        location: string;
        verified: boolean;
        description: string;
        profile_image_url: string;
        protected: boolean;
    };
}
