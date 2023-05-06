import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
 


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    console.log("Hello I am a cunstructor")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8ccc8b6ee5074eeea9d1cd858f9d8fb8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    // console.log(data);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }


  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8ccc8b6ee5074eeea9d1cd858f9d8fb8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    // console.log(data);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <div className='  mx-0  d-flex row'>
          <div className='  d-flex row' >
          {/*Intro with Text Bottom Left */}
<div className="banner-wrap">
    <div className="pmd-intro-bg-img" style={{backgroundImage:'url("./header.jpeg")'}}>
        <div className="container">
            <div className="pmd-intro-container d-flex row justify-content-start text-dark" style={{minHeight:200}}>
                <div className="align-self-end col-lg-6">
                    <h1 className="pmd-display2">We Are leading Industry</h1>
                    <p className="lead">
                        Marketing + Content + News 
                    </p>
                    <a href="/" className="btn btn-dark pmd-ripple-effect btn-lg pmd-btn-raised my-1">Explore</a>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
          <div className='container-lg my-3 border border-secondary' >
            <h2 className="text-center my-10" >Top headings - Update your Day!</h2>
            {this.state.loading && <Spinner />}
            {/* <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            > */}
            <div className="row">
              {this.state.articles?.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://loremflickr.com/320/170"}
                    newsUrl={element.url} auther={element.author} date={element.publishedAT} source={element.source.name} />
                </div>
              })}
            </div>
            <div  className=' my-5 d-flex column justify-content-around'>
            <div>
              <a href="#" disabled ={this.state.page<=1} onClick={this.handlePrevClick} className=" previous round">&#8249;</a>
              </div>
              <div>
              <a href="#" onClick={this.handleNextClick} className=" next round">&#8250;</a>
            </div>
            </div>
            {/* </InfiniteScroll> */}

          </div>
        </div>
        <div>
        {/* Footer */}
<footer className="text-center text-lg-start bg-white text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <a href="/" className="me-4 link-secondary">
        <i className="fa-solid fa-user"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
     {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links  */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>NewsDaily
          </h6>
          <p>
            You can update your day with the latest news provided with reference.
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">News Website</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Content Management</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Marketing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Travel</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Mumbai, 122567, IN</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 91 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Newsdaily.com</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}
        </div>
      </>
    )
  }
}

export default News