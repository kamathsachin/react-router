import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Sachin',
    text: 'Learning React is Fun',
  },
  {
    id: 'q2',
    author: 'Shubha',
    text: 'Learning JavaScript is Fun',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
