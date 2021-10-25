import React from 'react';
import { Link } from 'react-router-dom';

class HomeView extends React.Component {
  render() {
    return (
      <div>
        <main>
          <article>
            <img src="/beers/beers.png" alt="" />
            <Link className="link" to={'/beers'}>
              <h2>All Beers</h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab
              expedita quae culpa rem voluptatum perferendis repudiandae iste
              totam nam soluta ratione quis illo suscipit magnam recusandae
              tempore beatae possimus aliquid numquam, explicabo nihil eaque
              laboriosam vero? Pariatur cupiditate nam animi perspiciatis, sit
              placeat maiores doloribus sed, incidunt sint possimus.
            </p>
          </article>
          <article>
            <img src="/beers/random-beer.png" alt="" />
            <Link className="link" to={'/random-beer'}>
              <h2>Random Beer</h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab
              expedita quae culpa rem voluptatum perferendis repudiandae iste
              totam nam soluta ratione quis illo suscipit magnam recusandae
              tempore beatae possimus aliquid numquam, explicabo nihil eaque
              laboriosam vero? Pariatur cupiditate nam animi perspiciatis, sit
              placeat maiores doloribus sed, incidunt sint possimus.
            </p>
          </article>
          <article>
            <img src="/beers/new-beer.png" alt="" />
            <Link className="link" to={'/new-beer'}>
              <h2>New Beer</h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab
              expedita quae culpa rem voluptatum perferendis repudiandae iste
              totam nam soluta ratione quis illo suscipit magnam recusandae
              tempore beatae possimus aliquid numquam, explicabo nihil eaque
              laboriosam vero? Pariatur cupiditate nam animi perspiciatis, sit
              placeat maiores doloribus sed, incidunt sint possimus.
            </p>
          </article>
        </main>
      </div>
    );
  }
}

export default HomeView;
