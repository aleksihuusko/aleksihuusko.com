import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
