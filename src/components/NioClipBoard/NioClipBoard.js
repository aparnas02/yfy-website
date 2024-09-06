import classNames from 'classnames';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function NioClipBoard({ text = "https://www.uscreen.tv/careers.....", className }) {

  const [copied, setCopied] = useState(false);
  const clipBtn = classNames({
    "bg-transparent": true,
    "border-0 outline-0": true,
    "fs-7 fw-semiBold text-capitalize": true,
    [`text-${copied ? 'success' : 'primary'}`]: copied,
    [`${className}`]: className
  });

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="position-relative d-flex justify-content-between align-items-center gap-3 py-1 px-3 mb-3 rounded-2 border">
      <pre className="fs-7 opacity-50 m-0 overflow-hidden language-html" id="copy-link">
        <code className="text-dark">{text}</code>
      </pre>
      <div className="js-copy-wrap">
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button className={clipBtn}>
            {copied ? 'copied' : 'copy'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}


