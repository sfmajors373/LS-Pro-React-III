import React, { Component } from 'react';
import Card from './Card';
import './App.css';const posts =[
  {
    title: 'Post 1',
    author: 'Person 1',
    content: 'Blah'
  },
  {
    title: 'Post 2',
    author: 'Person 2',
    content: 'Blah Blah'
  },
  {
    title: 'Post 3',
    author: 'Person 3',
    content: 'Blah Blah Blah'
  },
];





export default class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        {posts.map((post) => {
          return <Card
            title={post.title}
            author={post.author}
            content={post.content}
            />
        })}
      </div>
    );
  }
}
