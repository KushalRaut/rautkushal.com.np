const postFields = `
_id,
title,
slug,
description,
mainImage,
author -> {
    name,
    image 
    }
`;

export const postsQuery = `
*[_type == 'post']{
  ${postFields}
}`;
