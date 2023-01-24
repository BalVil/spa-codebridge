import React from 'react';

const HighlightText = ({
  result,
  query,
}: {
  result: string;
  query: string | undefined;
}) => {
  return <span>{getHighlightedText(result, query)}</span>;
};

function getHighlightedText(text: string, higlight: string | undefined) {
  const parts = text.split(new RegExp(`(${higlight})`, 'gi'));

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight?.toLowerCase() ? (
        <span style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export default HighlightText;
