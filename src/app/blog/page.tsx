import { PostCard } from "@/components/post-card";
import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export default async function Blog() {
  const { data } = await fetchData();
  const posts = await fetchAllPosts();

  return (
    <>
      <StoryblokStory story={data.story} />
      <div className="pb-12 md:pb-24 lg:pb-24">
        <div className="container px-[5%]">
          <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post: any) => (
              <PostCard key={post.id} story={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const fetchAllPosts = async () => {
  const client = getStoryblokApi();
  const response = await client.get("cdn/stories", {
    content_type: "post",
    version: "draft",
  });
  return response.data.stories;
};

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog`, sbParams, { cache: "no-store" });
}
