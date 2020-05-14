import React from 'react';
import Media from 'react-media';

const ReactMediaComp = () => {
    return (
        <Media
            queries={{
                small:  '(max-width:599px)',
                medium: '(min-width:600px) and (max-width:1199px)',
                large:  '(min-width:1200px)',
            }}
        >
            {matches => {
                return (
                    <>
                        {matches.small && <p>This is small screen</p>}
                        {matches.medium && <p>This is medium screen</p>}
                        {matches.large && <p>This is large screen</p>}
                    </>
                );
            }}
        </Media>
    )
}

export default ReactMediaComp;