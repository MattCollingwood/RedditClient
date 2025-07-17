export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit.startsWith('/') ? subreddit : '/' + subreddit}.json`);
    const json = await response.json();
    
    return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`); 
    const json = await response.json();

    return json.data.children.map(subreddit => subreddit.data);
};

export const getSubreddit = async (subreddit) => {
    try {
        const response = await fetch(`${API_ROOT}/r/${subreddit}/about.json`); 
        const json = await response.json();

        return json && json.data ? json.data : undefined;
    } catch (error) {
        console.error(`Failed to find subreddit ${subreddit}`, error);
    }
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink.startsWith('/') ? permalink : '/' + permalink}.json`)
    const json = await response.json();

    return json[1].data.children.map(comment => comment.data);
};


