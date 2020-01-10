import { observable, action, decorate } from 'mobx'

class PostStore {

  posts = [
    {
      title: '첫 글이다..',
      content: '다다다다ㅏ다다다다다',
      date: '2020년 1월 10일'
    },
    {
      title: '두번째 글',
      content: '이다.....',
      date: '2020년 1월 10일'
    },
  ]

  addPost(post) {
    this.posts.push(post)
  }

  dehydrate() {
    return {
      posts: this.posts,
    }
  }
}

decorate(PostStore, {
  posts: observable,
  addPost: action,
})

export default PostStore