import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
    const { isLoading, hits, removeStory } = useGlobalContext();

    if (isLoading) return <div className='loading'></div>;

    return (
        <section className='stories'>
            {hits.map((story) => {
                const {
                    objectID: id,
                    title,
                    num_comments,
                    url,
                    points,
                    author,
                } = story;
                return (
                    <article className='story' key={id}>
                        <h4 className='title'>{title}</h4>
                        <p className='info'>
                            {points} points by{' '}
                            <span>
                                {author} | {num_comments} comments
                            </span>
                        </p>
                        <div>
                            <a
                                href={url}
                                className='read-link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                read more
                            </a>
                            <button
                                className='remove-btn'
                                onClick={() => removeStory(id)}
                            >
                                remove
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Stories;
