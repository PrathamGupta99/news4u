import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const justifyStyle = {
      textAlign: "justify",
      // textJustify: 'inter-word'
    };
    let { title, description, imageUrl, url, source, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 left-0 badge rounded-pill bg-primary"
            style={{ zIndex: "1", transform: "translate(0px, -12px)" }}
          >
            {source}
          </span>
          <img
            style={{ height: "165px" }}
            src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ height: "230px" }}>
            <h5 className="card-title" style={justifyStyle}>
              {title}...
            </h5>
            <p className="card-text" style={justifyStyle}>
              {description}...
            </p>
            <p
              className="card-text"
              style={{
                bottom: "0px",
                position: "absolute",
                left: "13px",
              }}
            >
              <small className="text-muted">
                {/* By {!author? "Unknown" : author}  */}
                {new Date(date).toLocaleTimeString()},{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
              style={{
                bottom: "10px",
                position: "absolute",
                right: "13px",
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
