import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  console.log(props.message) 
      return (
        <div className={s.item}>
                <img src='https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg' />
              { props.message }
            <div>
            <button>
              <span>Like</span>
              </button>
              { props.count }
            </div>
        </div>
      )
    }
export default Post;