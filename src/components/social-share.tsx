import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  return (
    <div className="flex space-x-2">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} summary={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title} body={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
