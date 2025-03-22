'use client' // By default, React components are assumed to be for the server/back-end
// You have to specify use client if you want them to be used for the frontend/client

import * as React from "react";
import { useEffect, useState } from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

// When exporting multiple components/functions, you can't specify an export default at the end
// So instead just add export at the beginning of the component/function name line 
// Then when importing you have to use the {} around the function/component you want
export const YouTubeEmbed = ({ videoId}) => { // videoId must be a string
  return (
    <div className="relative w-full pb-[56.25%] h-0 flex justify-center">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export function ScrollableHtmlBox({ filePath }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error("Error loading HTML file:", err));
  }, [filePath]);

  return (
    <div className="w-full max-w-2xl h-96 border rounded-xl shadow-lg overflow-auto p-4 bg-white">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}


// Typescript code conly
// interface EmailTemplateProps {
  // firstName: string;
// }

export const EmailTemplate = ({ // : React.FC<Readonly<EmailTemplateProps>>
  firstName, email, message
}) => {
  return (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <Container>
      <Hr>
      <Text style={textStyle.base}>
            From: <i>{email}</i>,
          </Text>
          <Text style={textStyle.base}>{message}</Text>
          <Text style={textStyle.base}>
            Sent via Contact Form @{" "}
            <a rel="noopener" href="https://eimaam.dev" target="_blank">
              eimaam.dev
            </a>
            <br />
      </Text>
      </Hr>
    </Container>
  </div>
  );
};




