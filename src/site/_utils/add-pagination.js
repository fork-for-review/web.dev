/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Take array of posts and returns an array of paginated pages for the posts.
 * @param {Array<object>} posts Posts to paginate
 * @param {object} additionalData Aditional data that may be relevant to a page.
 * Items like `title`, `href`, and `description` would be here.
 * @return {Array<object>} An array of items to display, including href and index.
 */
module.exports = function addPagination(posts, additionalData = {}) {
  const pageCount = 2;
  const paginated = [];
  const pages = Math.ceil(posts.length / pageCount);

  for (let i = 0; i < pages; i++) {
    const startFrom = i * pageCount;
    paginated.push({
      ...additionalData,
      posts: posts.slice(startFrom, startFrom + pageCount),
      index: i,
      pages,
    });
  }

  return paginated;
};
