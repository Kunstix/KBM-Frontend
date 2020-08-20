import React from 'react';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

export const getSuggestions = (value, data) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : data.filter(
        lang =>
          lang.username.toLowerCase().slice(0, inputLength) === inputValue ||
          lang.fullname.toLowerCase().slice(0, inputLength) === inputValue
      );
};

export const getSuggestionValue = suggestion => suggestion.username;

export const renderSuggestion = (suggestion, { query }) => {
  const matches = AutosuggestHighlightMatch(suggestion.username, query);
  const parts = AutosuggestHighlightParse(suggestion.username, matches);
  return (
    <span>
      {parts.map((part, index) => {
        const className = part.highlight
          ? 'react-autosuggest__suggestion-match'
          : null;

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        );
      })}
    </span>
  );
};
