import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  return (
    <>
      <ul>
        {props.posts.map((elt) => (
          <li key={elt.slug} className="mb-3 flex justify-between">
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a>
                <h2>{elt.title}</h2>
              </a>
            </Link>
            <div className="text-right">{elt.date}</div>
          </li>
        ))}
      </ul>

      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </>
  );
};

export { BlogGallery };
