import React from "react";
import NextHead from "next/head";

const defaultDescription = "Daun's Weather Application";
const defaultOGURL = process.env.appUrl;
const defaultOGImage = defaultOGURL + "/static/og-image.png";
const defaultTitle = process.env.appTitle;

interface HeadProps {
  description?: string;
  ogImage?: string;
  title?: string;
  url?: string;
}

const Head: React.FC<HeadProps> = props => {
  return (
    <NextHead>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <title>{props.title || defaultTitle}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
    </NextHead>
  );
};

export default Head;
