import React from 'react';

const HighlightText = ({
  result,
  query,
}: {
  result: string;
  query: string | undefined;
}) => {
  return <p>{getHighlightedText(result, query)}</p>;
};

function getHighlightedText(text: string, higlight: string | undefined) {
  console.log(higlight);

  const parts = text.split(new RegExp(`(${higlight})`, 'gi'));
  console.log('Parts:', parts);

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
