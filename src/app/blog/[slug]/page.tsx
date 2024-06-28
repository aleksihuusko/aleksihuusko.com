import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export async function fetchData(slug: string) {
  const sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams, {
    cache: "no-store",
  });
}

export default async function PostPage(props: any) {
  const { data } = await fetchData(props.params.slug);

  return <StoryblokStory story={data.story} />;
}
