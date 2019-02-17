import axios from 'axios';
import * as cons from 'actions/types';

export const saveComment = comment => ({
    type: cons.SAVE_COMMENT,
    payload: comment
});

export const fetchComments = () => {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: cons.FETCH_COMMENTS,
        payload: response
    };
}