import React from 'react';
import { maths } from "./ChapterNamesAndImages";
import ChapterCard from '../ChapterCards/ChapterCard';

const ChapterList = ({ subject }) => {
    if (subject === "maths") {
        return (
            <div className='flex flex-wrap justify-start'>
                {maths.map((e, index) => (
                    <div className='m-4' key={index}>
                        <ChapterCard 
                            TopicName={e.TopicName} 
                            ImageSrc={e.ImageSrc} 
                            ImageAlt={e.ImageAlt} 
                        />
                    </div>
                ))}
            </div>
        );
    } else {
        return <div>No chapters available for this subject.</div>;
    }
}

export default ChapterList;
