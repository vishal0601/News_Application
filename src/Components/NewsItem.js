import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span style={{zIndex:1}} class="position-absolute top-0 start-10 translate-middle badge rounded-pill text-bg-dark">
              {!source?"NA":source}
              <span class="visually-hidden">unread messages</span>
            </span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {!date ? "NA" : new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem