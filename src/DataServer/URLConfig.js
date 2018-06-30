const host = 'http://192.168.2.134:';
const port = 60003;

const loginURL = host+port+'/api/login';
const registerURL = host+port+'/api/register';
const postMessageURL = host+port+'/api/postMessage';
const postCommentURL = host+port+'/api/postComment';
const allMessagesURL = host+port+'/api/allMessages';
const allCommentsURL = host+port+'/api/allComments';

const imageBaseURL = host+port+'/resource/image/';


export {
    loginURL,
    registerURL,
    postMessageURL,
    postCommentURL,
    allMessagesURL,
    allCommentsURL,
    imageBaseURL,
}