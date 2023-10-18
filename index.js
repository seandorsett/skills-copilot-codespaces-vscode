import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <div className="preview">
                <ReactMarkdown source={markdown} />
            </div>
        </div>
    );
}

export default MarkdownEditor;

function reverseSentence(sentence) {
    // split the sentence into an array of words
    const words = sentence.split(' ');

    // reverse the array of words
    const reversedWords = words.reverse();

    // join the reversed words into a new sentence
    const newSentence = reversedWords.join(' ');

    // capitalize the first letter of the new sentence
    const capitalizedSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1);

    return capitalizedSentence;
}

console.log(reverseSentence('hello world')); // "World hello"

const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
];

const names = data.map(item => item.name);

console.log(names); // ["John", "Jane", "Bob"]
