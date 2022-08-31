/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, fireEvent } from "@testing-library/react"
import App from "./App";
import InputNewNote from "./components/InputNewNote/InputNewNote";
import NoteList from "./components/NoteList/NoteList"

// Component testing

describe('React - Testing components', () => {
  test('NoteList component renders properly', () => {
    const r = render(<NoteList />);
    expect(r).toBeDefined();   
  });
  test('Notelist renders the list properly', () => {
    const notes = ['Find a job', 'Relax'];
    const r = render(<NoteList notes={notes} />);
    expect(r).toBeDefined();
  })
  test('NoteList renders only notes that should be renderized', () => {
    const notes = ['Find a job', 'Relax'];
    const r = render(<NoteList notes={notes} />);
    const div = r.getByLabelText('note-list');
    expect(div.childElementCount).toBe(2)

  });
  
});

//Integration testing

describe('React - Testing all React App', () => {
  test('Render app', () => {
    const r = render(<App />);
    expect(r).toBeDefined();
  });
  test('Input renders properly', () => {
    const placeholdertext = 'Add something...';
    const r = render(<App />);
    const input = r.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  });
  test('When clicking on add button, event is launched', () => {
    const functionMock = jest.fn();
    const r = render(<InputNewNote addNewNote={functionMock}/>);
    const button = r.getByText('Add');
    fireEvent.click(button);
    expect(functionMock).toBeCalledTimes(1)
  });
  test('Add new note', () => {
    const placeholdertext = 'Add something...';
    const r = render(<App />);
    const input = r.getByPlaceholderText(placeholdertext);
    const button = r.getByText('Add'); 
    const div = r.getByLabelText('note-list');
    const initialChild = div.childElementCount;
    fireEvent.change(input, { target: { value: 'Water plants' }});
    fireEvent.click(button);
    const finalChild = div.childElementCount;
    expect(finalChild).toBeGreaterThan(initialChild);
  })
})
