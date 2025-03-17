import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";

const ShareButtons = () => {
  const shareUrl = window.location.href; // वर्तमान पेज का URL
  const title = "यह शानदार वेबसाइट देखें! 🚀";

  return (
    <div className="sharebutton" >
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={60} round className="shareicon"/>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={60} round className="shareicon"/>
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={60} round className="shareicon"/>
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={60} round className="shareicon"/>
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
