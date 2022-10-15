import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  hoverColor?: string;
}

const LinkButton = (props) => {
  return (
    <Link href={props.linkUrl}>
      <div className="flex gap-1 text-white text-md items-center hover:text-gray-300 cursor-pointer ease-in-out">
        {props.children} <span> {props.text}</span>
      </div>
    </Link>
  );
};

export default LinkButton;
