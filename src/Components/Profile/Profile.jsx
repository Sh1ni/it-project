import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    
  let posts = [
    {id: 1, message: 'Hi, how are you?', LikesCount: 45},
    {id: 2, message: "it's my first post?", LikesCount: 45}
  ]
  
  
  return (
      <div>
        <ProfileInfo />
        <MyPostsContainer store={props.store} /> 
      </div>
    )
}

export default Profile;