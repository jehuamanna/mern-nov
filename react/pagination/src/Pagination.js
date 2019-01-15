import React from 'react'
import axios from 'axios'

export default class Pagination extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      posts: [],
      hasMore: true,
      totalLength: 0,
      pageSize: 25,
      page: 0
    }
    this.clickHandle = this.clickHandle.bind(this)
    this.loadPage = this.loadPage.bind(this)



    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.loadPage();
      }
    }
  }



  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        let data = response.data
        this.setState({
          data,
          totalLength: data.length,
          posts: data.slice(0, this.state.page * this.state.pageSize)
        })
        this.loadPage()

      })
  }

  loadPage() {
    this.setState(function (prevState) {
      let page = prevState.page * prevState.pageSize < prevState.totalLength ? prevState.page + 1 : prevState.totalLength / prevState.pageSize
      console.log(page)
      return {
        page,
        hasMore: this.state.posts.length < this.state.totalLength,
        posts: prevState.data.slice(0, page * prevState.pageSize)
      }
    })
  }

  clickHandle() {
    this.loadPage()
  }

  render() {
    console.log(this.state.posts.length)
    const { posts, hasMore } = this.state

    return (<div>
      {posts.map(function (item) {
        return <li key={item.id}>{item.title} {item.body}</li>
      })}
      {!hasMore &&
        <div>You did it! You reached the end!</div>
      }
      {/* <input type="button" value="load more" onClick={this.clickHandle} /> */}
    </div>)
  }
}