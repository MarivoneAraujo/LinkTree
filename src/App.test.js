import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders the App component', () => {
  render(<App />);
  
  // Assertion
  const appClassName = document.querySelector('.App');
  expect(appClassName).toBeInTheDocument();
});

test('renders texts in the App component', () => {
  const { queryAllByText } = render(<App />);

  const headerTexts = queryAllByText((content, element) => {
    // Custom text matcher to handle broken up text
    const hasText = (str) => element.textContent.includes(str);
    return (
      hasText("Oiê! Sou Marivone,") &&
      hasText("a @mothercoder!")
    );
  });

  const subtitle = queryAllByText("Aqui estão todos os meus links:");
  const footer = queryAllByText("@2023 Marivone Araujo - Created w React/JS, MUI & React Testing Library");


  expect(headerTexts.length).toBeGreaterThan(0);
  expect(subtitle.length).toBeGreaterThan(0);
  expect(footer.length).toBeGreaterThan(0);

});
