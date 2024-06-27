import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}
